import PostCard from "@/components/post-card";
import { CategoryTemplateProps } from "../Categoria";
import styles from './styles.module.css';
import Link from "next/link";
import { Post } from "../Post";
import HeaderTemplate from "../Header";

export type SubCategoryTemplateProps = {
    subCategory: {
        name: string;
        slug: string;
        category: CategoryTemplateProps
    };
    posts: Post[];
};

const SubCategoryTemplate = ({ subCategory, posts }: SubCategoryTemplateProps) => {
  return (
    <>
      <HeaderTemplate />
      <section className={styles.subCategorySection}>
        <h1 className={styles.subCategoryTitle}>{subCategory.name.charAt(0).toUpperCase() + subCategory.name.slice(1)}</h1>
        <div className={styles.postsSection}>
          <h2 className={styles.postsSubtitle}>Posts</h2>
          <section>
            <ul className={styles.postsContainer}>
              { posts && posts
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
        </div>
      </section>
    </>
  )
}

export default SubCategoryTemplate;