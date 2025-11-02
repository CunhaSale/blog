import { PostTemplateProps } from '@/templates/Post'
import styles from './styles.module.css'
import Image from 'next/image'

const PostList = ({ post }: PostTemplateProps) => {
    return (
        <section className={styles.listPostsItem}>
            <div className={styles.listPostsText}>
                { post.subCategories[0] && post.subCategories[0]?.category && <p>{post.subCategories[0]?.category?.name.charAt(0).toUpperCase() + post.subCategories[0]?.category?.name.slice(1)}</p>}
                <p className={styles.postTitle}>{post.title}</p>
                <p>
                    {new Date(post.createdAt.replace(/(\.\d{3})\d+/, "$1")).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long' })}
                </p>
            </div>
            <div className={styles.listPostsImage}>
                {post.coverImage?.url && <Image
                    src={post.coverImage.url}
                    alt={`Capa do post ${post.title}`}
                    style={{ objectFit: 'cover', background: '#F1E2D0', width: '100%', height: '100%' }}
                    width={697.41}
                    height={350}/>}
            </div>
        </section>
    )
}

export default PostList