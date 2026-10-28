import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import client from '@/graphql/client';
import { GET_POSTS_BY_SUB_CATEGORY, GET_SUB_CATEGORIES, GET_SUB_CATEGORY_BY_SLUG } from '@/graphql/queries';
import SubCategoryTemplate, { SubCategoryTemplateProps } from '@/templates/SubCategoria';
import { GetPostsBySubCategoryQuery, GetSubCategoriesQuery, GetSubCategoryBySlugQuery } from '@/graphql/generated/graphql';
import { buildCanonical } from '@/lib/seo';
import { generateNextSeo } from 'next-seo/pages';

export default function SubCategoryPage({ subCategory, posts }: SubCategoryTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    return (
      <>
        <Head>{generateNextSeo({
          title: subCategory.name,
          description: `Artigos e insights sobre ${subCategory.name} no MachiTech Insights.`,
          canonical: buildCanonical(`/sub-categoria/${subCategory.slug}`),
          openGraph: {
            title: `${subCategory.name} | MachiTech Insights`,
            description: `Artigos e insights sobre ${subCategory.name}.`,
            url: buildCanonical(`/sub-categoria/${subCategory.slug}`),
          },
        })}</Head>
        <SubCategoryTemplate subCategory={subCategory} posts={posts} />
      </>
    );
};

export async function getStaticPaths() {
    let subCategories = [] as GetSubCategoriesQuery["subCategories"];

    try {
        const response = await client.request<GetSubCategoriesQuery>(GET_SUB_CATEGORIES, { first: 3 });
        subCategories = response.subCategories ?? [];
    } catch (error) {
        console.error("Error fetching subCategories for getStaticPaths:", error);
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    const paths = subCategories.map((subCategory) => ({
        params: { slug: subCategory.slug },
    }));

    return { paths, fallback: "blocking" };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { subCategory } = await client.request<GetSubCategoryBySlugQuery>(GET_SUB_CATEGORY_BY_SLUG, {
            slug: `${params?.slug}`
        });

        const { posts } = await client.request<GetPostsBySubCategoryQuery>(GET_POSTS_BY_SUB_CATEGORY, {
            subCategory: `${params?.slug}`,
            first: 3,
        });

        if (!subCategory) return { notFound: true };
        if (!posts) return { notFound: true };

        return {
            revalidate: 60 * 60,
            props: {
                subCategory,
                posts
            }
        };
    } catch (error) {
        console.error("Error fetching subcategory page data:", error);
        return { notFound: true };
    }
};