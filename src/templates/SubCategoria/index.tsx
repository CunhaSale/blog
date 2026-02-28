import { CategoryTemplateProps } from "../Categoria";
import Link from "next/link";
import { Post } from "../Post";
import { Header } from "@/components/Header";
import { ChevronRight } from "lucide-react";
import { BlogPostCard } from "@/components/BlogPostCard";
import { Footer } from "@/components/Footer";

type subCategory = {
   name: string;
  slug: string;
  category: CategoryTemplateProps
}

type Category = {
    name: string;
    slug: string;
    subCategories: subCategory[]
}

export type SubCategoryTemplateProps = {
    subCategory: {
        name: string;
        slug: string;
        category: Category;
    };
    posts: Post[];
};

const SubCategoryTemplate = ({ subCategory, posts }: SubCategoryTemplateProps) => {
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
          <Link 
            href={`/categoria/${subCategory.category.slug}`} 
            className="hover:text-primary transition-colors"
          >
            {subCategory.category.slug}
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{subCategory.name}</span>
        </nav>

        {/* Subcategory Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {subCategory.name}
          </h1>
          {/* <p className="text-lg text-muted-foreground max-w-2xl">
            {subCategory.description}
          </p> */}
        </div>

        {/* Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            Artigos em {subCategory.name}
          </h2>
          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} {...post} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12">
              Nenhum artigo encontrado nesta subcategoria.
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
    // <>
    //   <HeaderTemplate />
    //   <section className={styles.subCategorySection}>
    //     <h1 className={styles.subCategoryTitle}>{subCategory.name.charAt(0).toUpperCase() + subCategory.name.slice(1)}</h1>
    //     <div className={styles.postsSection}>
    //       <h2 className={styles.postsSubtitle}>Posts</h2>
    //       <section>
    //         <ul className={styles.postsContainer}>
    //           { posts && posts
    //             .filter(post => !post.postDisabled)
    //             .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime() - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime())
    //             .map((post, index) => (
    //             <li key={`post-${index}`} className={styles.postItem}>
    //                 <Link href={`/post/${post.slug}`}>
    //                   <PostCard post={post} />
    //                 </Link>
    //             </li>
    //           )) }
    //         </ul>
    //       </section>
    //     </div>
    //   </section>
    // </>
  )
}

export default SubCategoryTemplate;