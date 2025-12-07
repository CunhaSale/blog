import { Post } from "../Post";
import Link from "next/link";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import { BlogPostCard } from "@/components/BlogPostCard";

type subCategory = {
   name: string;
  slug: string;
  category: CategoryTemplateProps
}

export type CategoryTemplateProps = {
    category: {
        name: string;
        slug: string;
        subCategories: subCategory[]
    },
    subCategories: subCategory[],
    posts: Post[]
};

const CategoryTemplate = ({ category, subCategories, posts }: CategoryTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{category.name}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {category.name}
          </h1>
          {/* <p className="text-lg text-muted-foreground max-w-2xl">
            {category.description}
          </p> */}
        </div>

        {/* Subcategories */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Subcategorias</h2>
          <div className="flex flex-wrap gap-3">
            {subCategories.map((sub) => (
              <Link
                key={sub.slug}
                href={`/sub-categoria/${sub.slug}`}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {sub.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Artigos em {category.name}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            { posts && posts
                .filter(post => !post.postDisabled)
                .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime() - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime())
                .map((post, index) => (
                  <Link key={`post-${index}`} href={`/post/${post.slug}`}>
                    <BlogPostCard {...post} />
                  </Link>
              )) }
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2024 BrandUp. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default CategoryTemplate;