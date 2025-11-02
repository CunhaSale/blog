import client from "@/graphql/client";
import { GetPostsQuery } from "@/graphql/generated/graphql";
import { GET_POSTS } from "@/graphql/queries";
import HomeTemplate, { HomeTemplateProps } from "@/templates/Home";

export default function Home({ posts }: HomeTemplateProps) {
  return <HomeTemplate posts={posts} />;
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 25 });
  
  if (!posts) {
    return { notFound: true };
  }

  return {
      revalidate: 60,
      props: {
        posts: posts
      }
  }
}