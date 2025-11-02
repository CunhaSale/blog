import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { GET_CATEGORIES, GET_CATEGORY_BY_SLUG, GET_POSTS_BY_CATEGORY, GET_SUB_CATEGORIES_BY_CATEGORY } from '@/graphql/queries';
import client from '@/graphql/client';
import CategoryTemplate, { CategoryTemplateProps } from '@/templates/Categoria';
import { GetCategoriesQuery, GetCategoryBySlugQuery, GetPostsByCategoryQuery, GetsubCategoriesByCategoryQuery } from '@/graphql/generated/graphql';

export default function CategoryPage({ category, subCategories, posts }: CategoryTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (<CategoryTemplate category={category} subCategories={subCategories} posts={posts} />);
}

export async function getStaticPaths() {
    const { categories } = await client.request<GetCategoriesQuery>(GET_CATEGORIES, { first: 1 });

    const paths = categories.map((category) => ({
        params: { slug: category.slug },
    }));

    return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { category } = await client.request<GetCategoryBySlugQuery>(GET_CATEGORY_BY_SLUG, {
        slug: `${params?.slug}`
    });

    const { posts } = await client.request<GetPostsByCategoryQuery>(GET_POSTS_BY_CATEGORY, {
        category: `${params?.slug}`,
    });

    const { subCategories } = await client.request<GetsubCategoriesByCategoryQuery>(GET_SUB_CATEGORIES_BY_CATEGORY, {
        category: `${params?.slug}`,
    });

    if (!category) return { notFound: true };
    if (!posts) return { notFound: true };
    if (!subCategories) return { notFound: true };

    return {
        revalidate: 60,
        props: {
            category,
            subCategories,
            posts
        }
    };
};