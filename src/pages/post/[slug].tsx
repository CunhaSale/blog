import client from '@/graphql/client';
import { GetPostBySlugQuery, GetPostsQuery } from '@/graphql/generated/graphql';
import { GET_POST_BY_SLUG, GET_POSTS } from '@/graphql/queries';
import PostTemplate, { PostTemplateProps } from '@/templates/Post';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function Post({ post }: PostTemplateProps) {
    const router = useRouter();
    if (router.isFallback)  
        return (<p>Loading...</p>);

    return (<PostTemplate post={post} />);
}

export async function getStaticPaths() {
    const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 1 });

    const paths = posts.map(({ slug }) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
        slug: `${params?.slug}`
    })

    if (!post) return { notFound: true };

    return {
        revalidate: 60,
        props: {
            post
        }
    };
};