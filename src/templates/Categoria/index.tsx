import PostCard from "@/components/post-card";
import { Post } from "../Post";
import styles from './styles.module.css';
import Link from "next/link";
import HeaderTemplate from "../Header";

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
    <>
      <HeaderTemplate />
      <section className={styles.categorySection}>
        <h1 className={styles.categoryTitle}>{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h1>
        <div className={styles.subCategoriesBadges}>
          {subCategories && subCategories.map((subCategory, index) => (
            <Link key={`subCat-${index}`} href={`/sub-categoria/${subCategory.slug}`}>
              <span key={subCategory.slug} className={styles.subCategoryBadge}>
              {subCategory.name}
              </span>
            </Link>
          ))}
        </div>
        <section className={styles.postsSection}>
          <h2 className={styles.postsSubtitle}>Posts</h2>
          <section>
            <ul className={styles.postsContainer}>
              { posts &&posts
                .filter(post => !post.postDisabled)
                .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime() - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime())
                .map((post, index) => (
                <li key={`post-${index}`} className={styles.postItem}>
                    <Link href={`/post/${post.slug}`}>
                      <PostCard post={post} />
                    </Link>
                </li>
              )) }
            </ul>
          </section>
        </section>
      </section>
    </>
  )
}

export default CategoryTemplate;