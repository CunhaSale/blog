import { PostTemplateProps } from "@/templates/Post";
import Link from "next/link";
import Image from "next/image";
import styles from './styles.module.css';

const HighlightPost = ({ post }: PostTemplateProps) => {
    return (
        <div className={styles.highlightPostContainer}>
            <Link href={`/post/${post.slug}`} className={styles.highlightPostLink}>
                <div className={styles.highlightImageContainer}>
                    <Image
                        style={{
                            objectFit: 'cover',
                            background: '#F1E2D0',
                            width: '100%',
                            height: '100%'
                        }}
                        alt="imagem"
                        src={post.coverImage.url}
                        width={697.41}
                        height={480}
                    />

                    <div className={styles.subCategoryLabel}>
                    {post.subCategories[0].name}
                    </div>

                    <div className={styles.imageTitleOverlay}>
                    {post.title}
                    </div>
                </div>
            </Link>
            <div className={styles.highlightPostDescription}>
                <h1>Explore Conteúdos Que Inspiram. Descubra, Aprenda e Conecte-se com Conteúdos Feitos pra Você.</h1>
                <p>Descubra conteúdos incríveis, criados para ensinar e inspirar de um jeito único.</p>
            </div>
        </div>
    )
}

export default HighlightPost;