import client from "@/graphql/client";
import {
  GetCategoriesQuery,
  GetPostsByCategoryQuery,
  GetPostsQuery,
  GetSiteSettingsQuery,
} from "@/graphql/generated/graphql";
import { GET_CATEGORIES, GET_POSTS, GET_POSTS_BY_CATEGORY, GET_SITE_SETTINGS, } from "@/graphql/queries";
import HomeTemplate, { HomeTemplateProps } from "@/templates/Home";

export default function Home({ posts, categories, postsByCategory, showAdBanner }: HomeTemplateProps) {
  return <HomeTemplate posts={posts} categories={categories} postsByCategory={postsByCategory} showAdBanner={showAdBanner} />;
}

export const getStaticProps = async () => {
  const [
    { posts },
    { categories },
    { siteSettings },
  ] = await Promise.all([
    client.request<GetPostsQuery>(GET_POSTS, { first: 25 }),
    client.request<GetCategoriesQuery>(GET_CATEGORIES, { first: 100 }),
    client.request<GetSiteSettingsQuery>(GET_SITE_SETTINGS),
  ]);
 
  if (!posts) return { notFound: true };
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
      showAdBanner: siteSettings[0]?.showAdBanner ?? false,
    },
  };
};