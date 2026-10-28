import client from '@/graphql/client';
import { GetPostBySlugQuery, GetPostsQuery } from '@/graphql/generated/graphql';
import { GET_POST_BY_SLUG, GET_POSTS } from '@/graphql/queries';
import { buildCanonical, stripHtml } from '@/lib/seo';
import PostTemplate, { PostTemplateProps } from '@/templates/Post';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { generateNextSeo } from 'next-seo/pages';
import { useRouter } from 'next/router';

export default function Post({ post }: PostTemplateProps) {
    const router = useRouter();
    if (router.isFallback)  
        return (<p>Loading...</p>);

    return (
      <>
        <Head>{generateNextSeo({
          title: post.title,
          description: post.description || stripHtml(post.body?.html).slice(0, 160),
          canonical: buildCanonical(`/post/${post.slug}`),
          openGraph: {
            type: 'article',
            title: post.title,
            description: post.description || stripHtml(post.body?.html).slice(0, 160),
            url: buildCanonical(`/post/${post.slug}`),
            article: {
              publishedTime: new Date(post.createdAt).toISOString(),
              modifiedTime: new Date(post.createdAt).toISOString(),
              authors: ['MachiTech Insights'],
              tags: post.subCategories?.map((subCategory) => subCategory.name) ?? [],
            },
            images: post.coverImage?.url ? [{ url: post.coverImage.url, alt: post.title }] : undefined,
          },
        })}</Head>
        <PostTemplate post={post} />
      </>
    );
}

export async function getStaticPaths() {
    let posts = [] as GetPostsQuery["posts"];

    try {
        const response = await client.request<GetPostsQuery>(GET_POSTS, { first: 3 });
        posts = response.posts ?? [];
    } catch (error) {
        console.error("Error fetching posts for getStaticPaths:", error);
        return {
            paths: [],
            fallback: "blocking",
        };
    }

    const paths = posts.map(({ slug }) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: "blocking",
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
            slug: `${params?.slug}`
        })

        if (!post) return { notFound: true };

        return {
            revalidate: 60 * 60,
            props: {
                post
            }
        };
    } catch (error) {
        console.error("Error fetching post page data:", error);
        return { notFound: true };
    }
};