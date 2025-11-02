
import { Post } from "@/templates/Post";
import HighlightPost from "@/components/highlight-post";
import styles from "./styles.module.css";

interface Props {
  lastPost: Post;
}

export function HighlightSection({ lastPost }: Props) {
  return (
    <section className={styles.highlightSection}>
      <HighlightPost post={lastPost} />
    </section>
  );
}