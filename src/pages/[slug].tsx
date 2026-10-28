import { Header } from '@/components/Header';
import client from '@/graphql/client';
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql';
import { GET_PAGE_BY_SLUG, GET_PAGES } from '@/graphql/queries';
import { buildCanonical, stripHtml } from '@/lib/seo';
import PageTemplate, { PageTemplateProps } from '@/templates/Pages';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { generateNextSeo } from 'next-seo/pages';
import { useRouter } from 'next/router';

export default function Page({ title, body }: PageTemplateProps) {
    const router = useRouter();
    if (router.isFallback)  
        return (<p>Loading...</p>);

    const slug = Array.isArray(router.query.slug) ? router.query.slug[0] : router.query.slug ?? "";
    const description = stripHtml(body).slice(0, 160);

    return (
      <>
        <Head>{generateNextSeo({
          title,
          description,
          canonical: buildCanonical(`/${slug}`),
          openGraph: {
            title,
            description,
            url: buildCanonical(`/${slug}`),
          },
        })}</Head>
        <PageTemplate title={title} body={body} />
      </>
    );
}

export async function getStaticPaths() {
    try {
        const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 3 });

        const paths = pages.map(({ slug }) => ({
            params: { slug },
        }));

        return {
            paths,
            fallback: "blocking",
        };
    } catch (error) {
        console.error("Error fetching pages for getStaticPaths:", error);
        return {
            paths: [],
            fallback: "blocking",
        };
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
            slug: `${params?.slug}`
        })

        if (!page) {
            return { notFound: true };
        }

        return {
            revalidate: 60 * 60,
            props: {
                title: page.title,
                body: page.body?.html,
            }
        };
    } catch (error) {
        console.error("Error fetching CMS page data:", error);
        return { notFound: true };
    }
};