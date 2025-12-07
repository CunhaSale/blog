import { Header } from "@/components/Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

export type PageTemplateProps = {
  title: string;
  body: string;
}

const PageTemplate = ({ title, body}: PageTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Content */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {title}
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </header>

          <div
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-semibold
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground
              prose-ul:text-muted-foreground prose-li:marker:text-primary
              [&>h2]:text-2xl [&>h2]:mt-10 [&>h2]:mb-4
              [&>p]:mb-6
              [&>ul]:mb-6 [&>ul]:pl-6 [&>ul]:list-disc
              [&>ul>li]:mb-2"
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Blog. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default PageTemplate;