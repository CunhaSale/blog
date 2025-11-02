import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import client from '@/graphql/client';
import { GET_POSTS_BY_SUB_CATEGORY, GET_SUB_CATEGORIES, GET_SUB_CATEGORY_BY_SLUG } from '@/graphql/queries';
import SubCategoryTemplate, { SubCategoryTemplateProps } from '@/templates/SubCategoria';
import { GetPostsBySubCategoryQuery, GetSubCategoriesQuery, GetSubCategoryBySlugQuery } from '@/graphql/generated/graphql';

export default function SubCategoryPage({ subCategory, posts }: SubCategoryTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    return (<SubCategoryTemplate subCategory={subCategory} posts={posts} />);
};

export async function getStaticPaths() {
    const { subCategories } = await client.request<GetSubCategoriesQuery>(GET_SUB_CATEGORIES, { first: 1 });

    const paths = subCategories.map((subCategory) => ({
        params: { slug: subCategory.slug },
    }));

    return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { subCategory } = await client.request<GetSubCategoryBySlugQuery>(GET_SUB_CATEGORY_BY_SLUG, {
        slug: `${params?.slug}`
    });

    const { posts } = await client.request<GetPostsBySubCategoryQuery>(GET_POSTS_BY_SUB_CATEGORY, {
        subCategory: `${params?.slug}`
    });

    if (!subCategory) return { notFound: true };
    if (!posts) return { notFound: true };

    return {
        revalidate: 60,
        props: {
            subCategory,
            posts
        }
    };
};