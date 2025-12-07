import { Header } from '@/components/Header';
import client from '@/graphql/client';
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql';
import { GET_PAGE_BY_SLUG, GET_PAGES } from '@/graphql/queries';
import PageTemplate, { PageTemplateProps } from '@/templates/Pages';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page({ title, body }: PageTemplateProps) {
    const router = useRouter();
    if (router.isFallback)  
        return (<p>Loading...</p>);

    return (<PageTemplate title={title} body={body} />);
}

export async function getStaticPaths() {
    const { pages } = await client.request<GetPagesQuery>(GET_PAGES, { first: 1 });

    const paths = pages.map(({ slug }) => ({
        params: { slug },
    }));

    return {
        paths,
        fallback: true,
    };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
        slug: `${params?.slug}`
    })

    if (!page) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Página não encontrada
            </h1>
            <Link href="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </main>
      </div>
    );
  }

    return {
        revalidate: 60,
        props: {
            title: page.title,
            body: page.body?.html,
        }
    };
};