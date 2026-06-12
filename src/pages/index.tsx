import client from "@/graphql/client";
import {
  GetCategoriesQuery,
  GetPostsByCategoryQuery,
  GetPostsQuery,
} from "@/graphql/generated/graphql";
import { GET_CATEGORIES, GET_POSTS, GET_POSTS_BY_CATEGORY } from "@/graphql/queries";
import HomeTemplate, { HomeTemplateProps } from "@/templates/Home";

export default function Home({ posts, categories, postsByCategory }: HomeTemplateProps) {
  return <HomeTemplate posts={posts} categories={categories} postsByCategory={postsByCategory} />;
}

export const getStaticProps = async () => {
  // 1. Todos os posts (para a aba "Todos")
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 25 });

  if (!posts) return { notFound: true };

  // 2. Últimas 4 categorias
  const { categories } = await client.request<GetCategoriesQuery>(GET_CATEGORIES, { first: 100 });

  if (!categories) return { notFound: true };

  // 3. Posts de cada categoria em paralelo
  const categoryPostsEntries = await Promise.all(
    categories.map(async (cat) => {
      const { posts: catPosts } = await client.request<GetPostsByCategoryQuery>(
        GET_POSTS_BY_CATEGORY,
        { category: cat.slug }
      );
      return [cat.slug, catPosts ?? []] as const;
    })
  );

  const postsByCategory = Object.fromEntries(categoryPostsEntries);

  return {
    revalidate: 60,
    props: {
      posts,
      categories,
      postsByCategory,
    },
  };
};