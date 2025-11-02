import { Post } from "../Post";
import styles from './styles.module.css';
import Link from "next/link";
import Image from "next/image";
import HeaderTemplate from "../Header";
import PostList from "@/components/post-list";

export type AuthorTemplateProps = {
    author: {
        name: string;
        slug: string;
        bio: {
            html: string;
        },
        interests: string[];
        socialNetworks: [{
          media: string;
          link: string;
        }];
        experiences: string[];
        academicBackgrounds: string[];
        coverImage: {
            url: string;
        }
        posts: Post[];
    };
};

const AutorTemplate = ({ author }: AuthorTemplateProps) => {
  return (
    <>
      <HeaderTemplate />
      <section className={styles.authorSection}>
        <h1 className={styles.authorName}>{author.name}</h1>
        <div className={styles.infoImageBio}>
          <div className={styles.infoImage}>
            {author.coverImage && <Image
              src={author.coverImage.url}
              alt={`Foto de ${author.name}`}
              className={styles.coverImage}
              style={{ objectFit: 'cover', background: '#F1E2D0' }}
              width={1200}
              height={600}
            />}

            <div className={styles.infoRow}>
              {author.interests.length > 0 && <div className={styles.infoContent}>
                <p className={styles.infoTitle}>Interesses:</p>
                <div className={styles.infoItems}>
                  {author.interests && author.interests?.map((interest, idx) => (
                    <span key={idx} className={styles.infoItem}>
                      {interest}{idx < author.interests.length - 1 ? ',' : ''}
                      &nbsp;
                    </span>
                  ))}
                </div>
              </div>}

              {author.socialNetworks.length > 0 && <div className={styles.infoContent}>
                <p className={styles.infoTitle}>Redes:</p>
                <div className={styles.infoItems}>
                  {author.socialNetworks && author.socialNetworks?.map((socialMedia, idx) => {
                    const socialMediaIcons = [
                      { keyword: ['twitter', 'x'], iconClass: 'fa-x-twitter' },
                      { keyword: ['facebook'], iconClass: 'fa-facebook' },
                      { keyword: ['instagram'], iconClass: 'fa-instagram' },
                      { keyword: ['youtube'], iconClass: 'fa-youtube' },
                      { keyword: ['tiktok'], iconClass: 'fa-tiktok' },
                      { keyword: ['github'], iconClass: 'fa-github' },
                      { keyword: ['linkedin'], iconClass: 'fa-linkedin' },
                    ];

                    const lowerSocialMedia = socialMedia.media.toLowerCase();

                    const matchedIcon = socialMediaIcons.find(({ keyword }) =>
                      keyword.some(k => lowerSocialMedia.includes(k))
                    );
                    
                    return (
                      <span key={idx} className={`${styles.infoItems} ${styles.icons}`} style={{ cursor: 'pointer' }}>
                        {matchedIcon &&
                          <Link className={styles.infoItem} href={socialMedia.link} target="_blank">
                            <i className={`fa-brands ${matchedIcon.iconClass}`}></i>
                          </Link>
                        }
                        &nbsp;&nbsp;&nbsp;
                      </span>
                    )}
                  )}
                </div>
              </div>}

              {author.experiences.length > 0 && <div className={styles.infoContent}>
                <p className={styles.infoTitle}>Experiência:</p>
                <div className={styles.infoItems}>
                  {author.experiences && author.experiences?.map((experience, idx) => (
                    <span key={idx} className={styles.infoItem}>
                      {experience}{idx < author.experiences.length - 1 ? ',' : ''}
                      &nbsp;
                    </span>
                  ))}
                </div>
              </div>}

              {author.academicBackgrounds.length > 0 && <div className={styles.infoContent}>
                <p className={styles.infoTitle}>Formação acadêmica:</p>
                <div className={styles.infoItems}>
                  {author.academicBackgrounds && author.academicBackgrounds?.map((academicBackground, idx) => (
                    <span key={idx} className={styles.infoItem}>
                      {academicBackground}{idx < author.academicBackgrounds.length - 1 ? ',' : ''}
                      &nbsp;
                    </span>
                  ))}
                </div>
              </div>}
            </div>
          </div>

          <section className={styles.bioSection}>
            <h2 className={styles.bioTitle}>Sobre</h2>
            <div
              className={styles.bioContent}
              dangerouslySetInnerHTML={{ __html: author.bio?.html }}
            />
          </section>
        </div>

        <section className={styles.postsSection}>
          <h2 className={styles.postsTitle}>Posts</h2>
          <section>
            <ul className={styles.postsContainer}>
              { author.posts && author.posts
                .filter(post => !post.postDisabled)
                .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime() - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime())
                .map((post, index) => (
                <li key={`post-${index}`} className={styles.postItem}>
                    <Link href={`/post/${post.slug}`}>
                      <PostList key={`post-${index}`} post={post} />
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

export default AutorTemplate;