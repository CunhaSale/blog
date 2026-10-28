import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import client from '@/graphql/client';
import { GET_AUTHOR_BY_SLUG, GET_AUTHORS } from '@/graphql/queries';
import AutorTemplate, { AuthorTemplateProps } from '@/templates/Autor';
import { GetAuthorBySlugQuery, GetAuthorsQuery } from '@/graphql/generated/graphql';
import { buildCanonical } from '@/lib/seo';
import { generateNextSeo } from 'next-seo/pages';

export default function AutorPage({ author }: AuthorTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    if (!author) {
        return <div>Autor não encontrado.</div>;
    }

    return (
      <>
        <Head>{generateNextSeo({
          title: author.name,
          description: `Conheça ${author.name} e explore os artigos, insights e conteúdos publicados no MachiTech Insights.`,
          canonical: buildCanonical(`/autor/${author.slug}`),
          openGraph: {
            title: `${author.name} | MachiTech Insights`,
            description: `Conheça ${author.name} e seus artigos no MachiTech Insights.`,
            url: buildCanonical(`/autor/${author.slug}`),
          },
        })}</Head>
        <AutorTemplate author={author} />
      </>
    );
}

export async function getStaticPaths() {
    let authors = [] as GetAuthorsQuery["authors"];

    try {
        const response = await client.request<GetAuthorsQuery>(GET_AUTHORS, { first: 3 });
        authors = response.authors ?? [];
    } catch (error) {
        console.error("Error fetching authors for getStaticPaths:", error);
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    const paths = authors.map((author) => ({
        params: { slug: author.slug },
    }));

    return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { author } = await client.request<GetAuthorBySlugQuery>(GET_AUTHOR_BY_SLUG, {
            slug: `${params?.slug}`
        });

        if (!author) return { notFound: true };

        return {
            revalidate: 60 * 60,
            props: {
                author,
            },
        };
    } catch (error) {
        console.error("Error fetching author page data:", error);
        return { notFound: true };
    }
};