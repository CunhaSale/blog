import Link from 'next/link';
import styles from './styles.module.css';
import Image from 'next/image';
import HeaderTemplate from '../Header';
import Footer from '@/components/footer';

export type Post = {
  id: string;
  slug: string;
  title: string
  description: string;
  coverImage: {
    url: string;
  }
  createdAt: string;
  subCategories: [{
    name: string;
    slug: string;
    category: {
      name: string;
      slug: string;
    }
  }];
  author: {
    name: string;
    slug: string;
  }
  body: {
    html: string;
  }
  postDisabled: boolean;
  ad: boolean;
}

export type PostTemplateProps = {
  post: Post
}

const PostTemplate = ({ post }: PostTemplateProps) => {
  return (
    <>
      <HeaderTemplate />
        <div className={styles.postContent}>
          <section className={styles.postSection}>
            {post.subCategories[0]?.category && post.subCategories[0] && <nav className={styles.breadcrumb}>
              {<Link href={`/categoria/${post.subCategories[0]?.category?.slug}`} className={styles.breadcrumbLink}>
                {post.subCategories[0]?.category?.name}
              </Link>}
              {post.subCategories[0]?.category && ' / '}
              <Link href={`/sub-categoria/${post.subCategories[0]?.slug}`} className={styles.breadcrumbLink}>
                {post.subCategories[0]?.name}
              </Link>
            </nav>}
            <h1 className={styles.postTitle}>{post.title}</h1>
            {post.coverImage?.url && <Image
              className={styles.coverImage}
              src={post.coverImage.url}
              alt={post.title}
              width={1200}
              height={600}
            />}

            {!post.ad && (<div className={styles.infoRow}>
              {post.author && <div className={styles.infoContent}>
                <p className={styles.infoTitle}>Por:&nbsp;</p>
                <span className={styles.infoItem}>
                  <Link href={`/autor/${post.author?.slug}`}>
                    {post.author?.name}
                  </Link>
                </span>
              </div>}

              <div className={styles.infoContent}>
                <p className={styles.infoTitle}>
                  {(() => {
                    const date = new Date(post.createdAt.replace(/(\.\d{3})\d+/, "$1"));
                    const formattedDate = date.toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    }).replace('de', ''); // tira o ponto do mês

                    const formattedTime = date.toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false
                    });

                    return `${formattedDate.replace(',', '')} às ${formattedTime}`;
                  })()}
                </p>
              </div>
            </div>)}

            {post.description && <p className={styles.postDescription}>{post.description}</p>}

            <div
              className={styles.postBody}
              dangerouslySetInnerHTML={{ __html: post.body.html }}
            />
          </section>
        </div>
      <Footer />
    </>
  )
}

export default PostTemplate;