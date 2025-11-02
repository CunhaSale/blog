import Link from "next/link";
import styles from "./styles.module.css";
import { Post } from "@/templates/Post";
import PostCard from "@/components/post-card";
import TextDivider from "@/components/text-divider";

interface Props {
  posts: Post[];
}

export function PostsList({ posts }: Props) {
  const normalPosts = posts
    .filter(post => !post.postDisabled && !post.ad)
    .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime()
                  - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime());

  const adPosts = posts
    .filter(post => !post.postDisabled && post.ad)
    .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime()
                  - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime());

  const firstThree = normalPosts.slice(1, 4);
  const remainingNormals = normalPosts.slice(4);

  const postsAfterDivider: Post[] = [];
  let adIndex = 0;

  for (let i = 0; i < remainingNormals.length; i++) {
    postsAfterDivider.push(remainingNormals[i]);

    if ((i + 1) % 2 === 0 && adIndex < adPosts.length) {
      postsAfterDivider.push(adPosts[adIndex]);
      adIndex++;
    }
  }

  return (
    <section className={styles.homeSection}> 
      <ul className={styles.postsContainer}>
        {/* Primeiros 3 posts */}
        {firstThree.map((post, index) => (
          <li key={`top-post-${index}`} className={styles.postItem}>
            <Link href={`/post/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}

        {/* Divisória */}
        {postsAfterDivider.length > 0 && (
          <li className={styles.dividerItem}>
            <TextDivider text="Leia também" />
          </li>
        )}

        {/* Posts restantes + anúncios */}
        {postsAfterDivider.map((post, index) => (
          <li key={`post-${index}`} className={styles.postItem}>
            <Link href={`/post/${post.slug}`}>
              <PostCard post={post} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
