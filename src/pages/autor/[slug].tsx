import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import client from '@/graphql/client';
import { GET_AUTHOR_BY_SLUG, GET_AUTHORS } from '@/graphql/queries';
import AutorTemplate, { AuthorTemplateProps } from '@/templates/Autor';
import { GetAuthorBySlugQuery, GetAuthorsQuery } from '@/graphql/generated/graphql';

export default function AutorPage({ author }: AuthorTemplateProps) {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Carregando...</div>;
    }

    if (!author) {
        return <div>Autor não encontrado.</div>;
    }

    return (<AutorTemplate author={author} />);
}

export async function getStaticPaths() {
    const { authors } = await client.request<GetAuthorsQuery>(GET_AUTHORS, { first: 1 });

    const paths = authors.map((author) => ({
        params: { slug: author.slug },
    }));

    return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { author } = await client.request<GetAuthorBySlugQuery>(GET_AUTHOR_BY_SLUG, {
        slug: `${params?.slug}`
    });

    if (!author) return { notFound: true };

    return {
        revalidate: 60,
        props: {
            author,
        },
    };
};