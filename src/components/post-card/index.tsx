import Image from 'next/image';
import styles from './styles.module.css';
import { PostTemplateProps } from '@/templates/Post';

const PostCard = ({ post }: PostTemplateProps) => {
    return (    
        <div className={styles.postWrapper}>
            <div className={styles.imageWrapper} style={{ position: 'relative' }}>
                {post.ad && (
                    <span
                    style={{
                        position: 'absolute',
                        top: '4px',
                        left: '4px',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // fundo escuro translúcido
                        color: 'white',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        zIndex: 1,
                    }}
                    >
                    Anúncio
                    </span>
                )}

                {post.coverImage && <Image
                    style={{
                        objectFit: 'cover',
                        background: '#F1E2D0',
                        width: '100%'
                    }}
                    alt="imagem"
                    src={post.coverImage.url}
                    width={697.41}
                    height={350}
                />}
            </div>

            <div className={styles.cardDescription}>
                {/* <div className={styles.categoriesWrapper}>
                    <span className={styles.category}>
                        {post.categories.map((category) => (
                        <span key={category.name} className={styles.categoryItem}>
                            {category.name}
                        </span>
                        ))}
                    </span>
                </div> */}
                
                <div className="body">
                    <h3 className={styles.postHeading}>{post.title}</h3>
                    <p className={styles.postDescription}>{post.description}</p>
                </div>
                
                {!post.ad && <div className={styles.footer}>
                    <time>
                        {(() => {
                            const now = new Date();
                            const postDate = new Date(post.createdAt.replace(/(\.\d{3})\d+/, "$1"));
                            const diffMs = now.getTime() - postDate.getTime();
                            const diffSec = Math.floor(diffMs / 1000);
                            const diffMin = Math.floor(diffSec / 60);
                            const diffHour = Math.floor(diffMin / 60);
                            const diffDay = Math.floor(diffHour / 24);

                            if (diffDay > 0) {
                                return `há ${diffDay} dia${diffDay > 1 ? 's' : ''}`;
                            } else if (diffHour > 0) {
                                return `há ${diffHour} hora${diffHour > 1 ? 's' : ''}`;
                            } else if (diffMin > 0) {
                                return `há ${diffMin} minuto${diffMin > 1 ? 's' : ''}`;
                            } else {
                                return 'agora mesmo';
                            }
                        })()}
                    </time>
                    <span className={styles.author}>{post?.author?.name}</span>
                </div>}

                {post.ad && <div className={styles.footerAd}></div>}
            </div>
        </div>
    )
}

export default PostCard;
