import Head from "next/head";
import client from "@/graphql/client";
import {
  GetCategoriesQuery,
  GetPostsByCategoryQuery,
  GetPostsQuery,
  GetSiteSettingsQuery,
} from "@/graphql/generated/graphql";
import { GET_CATEGORIES, GET_POSTS, GET_POSTS_BY_CATEGORY, GET_SITE_SETTINGS, } from "@/graphql/queries";
import { buildCanonical } from "@/lib/seo";
import { generateNextSeo } from "next-seo/pages";
import HomeTemplate, { HomeTemplateProps } from "@/templates/Home";

export default function Home({ posts, categories, postsByCategory, showAdBanner }: HomeTemplateProps) {
  return (
    <>
      <Head>{generateNextSeo({
        title: "Início",
        description: "Conteúdo premium sobre tecnologia, IA, marketing e negócios para marcas que querem crescer com estratégia.",
        canonical: buildCanonical("/"),
        openGraph: {
          url: buildCanonical("/"),
          title: "MachiTech Insights",
          description: "Conteúdo premium sobre tecnologia, IA, marketing e negócios para marcas que querem crescer com estratégia.",
          images: [
            {
              url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
              alt: "MachiTech Insights",
            },
          ],
        },
      })}</Head>
      <HomeTemplate posts={posts} categories={categories} postsByCategory={postsByCategory} showAdBanner={showAdBanner} />
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const [
        { posts },
        { categories },
        { siteSettings },
      ] = await Promise.all([
        client.request<GetPostsQuery>(GET_POSTS, { first: 10 }),
        client.request<GetCategoriesQuery>(GET_CATEGORIES, { first: 10 }),
        client.request<GetSiteSettingsQuery>(GET_SITE_SETTINGS),
      ]);
    
    if (!posts) return { notFound: true };
    if (!categories) return { notFound: true };

    const limitedCategories = categories.slice(0, 5);

    const categoryPostsEntries = await Promise.all(
      limitedCategories.map(async (cat) => {
        const { posts: catPosts } = await client.request<GetPostsByCategoryQuery>(
          GET_POSTS_BY_CATEGORY,
          { category: cat.slug, first: 3 }
        );
        return [cat.slug, catPosts ?? []] as const;
      })
    );

    const postsByCategory = Object.fromEntries(categoryPostsEntries);

    return {
      revalidate: 60 * 60,
      props: {
        posts,
        categories: limitedCategories,
        postsByCategory,
        showAdBanner: siteSettings[0]?.showAdBanner ?? false,
      },
    };
  } catch(error) { 
    console.error(error)
    return { notFound: true }
  }
};