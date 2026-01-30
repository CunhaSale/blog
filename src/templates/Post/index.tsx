import Link from 'next/link';
import { Header } from '@/components/Header';
import { ArrowLeft } from 'lucide-react';

export type Post = {
  id: string;
  slug: string;
  title: string
  description: string;
  coverImage: {
    url: string;
  }
  createdAt: string;
  subCategories: [{
    name: string;
    slug: string;
    category: {
      name: string;
      slug: string;
    }
  }];
  author: {
    name: string;
    slug: string;
  }
  body: {
    html: string;
  }
  postDisabled: boolean;
  ad: boolean;
}

export type PostTemplateProps = {
  post: Post
}

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-8 py-8 md:py-12">
        <article className="max-w-3xl mx-auto animate-fade-in">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link 
              href="/" 
              className="text-primary hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href={`/categoria/${post.subCategories[0].category.slug}`} className="text-primary hover:underline">
              {post.subCategories[0].category.name}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">{post.subCategories[0].name}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8">
            <img 
              src={post.coverImage.url} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Author and Date */}
          <div className="flex items-center gap-2 text-sm mb-8 pb-8 border-b border-border">
            <span className="text-muted-foreground">Por:</span>
            <Link 
              href={`/autor/${post.author.slug}`}
              className="text-primary hover:underline font-medium"
            >
              {post.author.name}
            </Link>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground">
              {(() => {
                  const date = new Date(post.createdAt.replace(/(\.\d{3})\d+/, "$1"));
                  const formattedDate = date.toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  }).replace('de', ''); // tira o ponto do mês

                  const formattedTime = date.toLocaleTimeString('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  });

                  return `${formattedDate.replace(',', '')} às ${formattedTime}`;
                })()}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <h2 className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-medium">
              {post.description}
            </h2>

            <section className="mb-8">
              <div
              className="text-muted-foreground leading-relaxed mb-4 bodyhtml"
              dangerouslySetInnerHTML={{ __html: post.body.html }}
              />
              <style jsx global>{`
              .bodyhtml .highlight {
                border-left: 3px solid #29D;
                padding-left: 7px;
                margin: 32px 16px;
              }
              `}</style>
            </section>

            {/* Conclusion */}
            {/* <section className="mb-8 p-6 bg-secondary/50 rounded-xl border border-border">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Conclusão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {post.conclusion}
              </p>
            </section> */}
          </div>

          {/* Back to home */}
          <div className="mt-12 pt-8 border-t border-border">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar para todos os artigos
            </Link>
          </div>
        </article>
      </main>
      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                © 2024 MindTech. Todos os direitos reservados.
              </span>
            </div>
            <div className="flex gap-6">
              <Link href="/sobre-nos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </Link>
              <Link href="/anuncios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Jobs
              </Link>
              <Link href="/contato" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PostTemplate;