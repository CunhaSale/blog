import { Post } from "../Post";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { BlogPostCard } from "@/components/BlogPostCard";


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
  if (!author) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Autor não encontrado
            </h1>
            <Link href="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        {/* <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Início</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Autores</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{author.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}

        {/* Author Profile */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <Avatar className="w-32 h-32 border-4 border-primary/20">
                <AvatarImage src={author.coverImage.url} alt={author.name} />
                <AvatarFallback className="text-3xl">
                  {author.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {author.name}
                </h1>
                {/* <p className="text-primary font-medium mb-4">{author.role}</p> */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {author.bio.html}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4">
                  {author.name && (
                    <a
                      href={`mailto:${author.name}@mail.com`}
                      className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                      title="Email"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
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
                      <span key={idx} style={{ cursor: 'pointer' }}>
                        {matchedIcon &&
                          <Link href={socialMedia.link} target="_blank">
                            <i className={`fa-brands ${matchedIcon.iconClass}`}></i>
                          </Link>
                        }
                        &nbsp;&nbsp;&nbsp;
                      </span>
                    )}
                  )}
                  {/* {
                    author.socialNetworks.map((network, index) => {
                      return (
                      <>
                        <Link key={index} href={network.link}>{network.media}</Link>
                        {network.media.toLowerCase() === 'linkedin' && (
                          <Linkedin className="w-5 h-5" />
                        )}
                        {network.media.toLowerCase() === 'twitter' || network.media.toLowerCase() === 'x' && (
                          <Twitter className="w-5 h-5" />
                        )}
                      </>
                    )})
                  } */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author Posts */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Artigos de {author.name.split(" ")[0]}
          </h2>

          {author.posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {author.posts.map((post) => (
                <BlogPostCard {...post} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-12">
              Nenhum artigo encontrado para este autor.
            </p>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Blog. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
    // <>
    //   <HeaderTemplate />
    //   <section className={styles.authorSection}>
    //     <h1 className={styles.authorName}>{author.name}</h1>
    //     <div className={styles.infoImageBio}>
    //       <div className={styles.infoImage}>
    //         {author.coverImage && <Image
    //           src={author.coverImage.url}
    //           alt={`Foto de ${author.name}`}
    //           className={styles.coverImage}
    //           style={{ objectFit: 'cover', background: '#F1E2D0' }}
    //           width={1200}
    //           height={600}
    //         />}

    //         <div className={styles.infoRow}>
    //           {author.interests.length > 0 && <div className={styles.infoContent}>
    //             <p className={styles.infoTitle}>Interesses:</p>
    //             <div className={styles.infoItems}>
    //               {author.interests && author.interests?.map((interest, idx) => (
    //                 <span key={idx} className={styles.infoItem}>
    //                   {interest}{idx < author.interests.length - 1 ? ',' : ''}
    //                   &nbsp;
    //                 </span>
    //               ))}
    //             </div>
    //           </div>}

    //           {author.socialNetworks.length > 0 && <div className={styles.infoContent}>
    //             <p className={styles.infoTitle}>Redes:</p>
    //             <div className={styles.infoItems}>
    //               {author.socialNetworks && author.socialNetworks?.map((socialMedia, idx) => {
    //                 const socialMediaIcons = [
    //                   { keyword: ['twitter', 'x'], iconClass: 'fa-x-twitter' },
    //                   { keyword: ['facebook'], iconClass: 'fa-facebook' },
    //                   { keyword: ['instagram'], iconClass: 'fa-instagram' },
    //                   { keyword: ['youtube'], iconClass: 'fa-youtube' },
    //                   { keyword: ['tiktok'], iconClass: 'fa-tiktok' },
    //                   { keyword: ['github'], iconClass: 'fa-github' },
    //                   { keyword: ['linkedin'], iconClass: 'fa-linkedin' },
    //                 ];

    //                 const lowerSocialMedia = socialMedia.media.toLowerCase();

    //                 const matchedIcon = socialMediaIcons.find(({ keyword }) =>
    //                   keyword.some(k => lowerSocialMedia.includes(k))
    //                 );
                    
    //                 return (
    //                   <span key={idx} className={`${styles.infoItems} ${styles.icons}`} style={{ cursor: 'pointer' }}>
    //                     {matchedIcon &&
    //                       <Link className={styles.infoItem} href={socialMedia.link} target="_blank">
    //                         <i className={`fa-brands ${matchedIcon.iconClass}`}></i>
    //                       </Link>
    //                     }
    //                     &nbsp;&nbsp;&nbsp;
    //                   </span>
    //                 )}
    //               )}
    //             </div>
    //           </div>}

    //           {author.experiences.length > 0 && <div className={styles.infoContent}>
    //             <p className={styles.infoTitle}>Experiência:</p>
    //             <div className={styles.infoItems}>
    //               {author.experiences && author.experiences?.map((experience, idx) => (
    //                 <span key={idx} className={styles.infoItem}>
    //                   {experience}{idx < author.experiences.length - 1 ? ',' : ''}
    //                   &nbsp;
    //                 </span>
    //               ))}
    //             </div>
    //           </div>}

    //           {author.academicBackgrounds.length > 0 && <div className={styles.infoContent}>
    //             <p className={styles.infoTitle}>Formação acadêmica:</p>
    //             <div className={styles.infoItems}>
    //               {author.academicBackgrounds && author.academicBackgrounds?.map((academicBackground, idx) => (
    //                 <span key={idx} className={styles.infoItem}>
    //                   {academicBackground}{idx < author.academicBackgrounds.length - 1 ? ',' : ''}
    //                   &nbsp;
    //                 </span>
    //               ))}
    //             </div>
    //           </div>}
    //         </div>
    //       </div>

    //       <section className={styles.bioSection}>
    //         <h2 className={styles.bioTitle}>Sobre</h2>
    //         <div
    //           className={styles.bioContent}
    //           dangerouslySetInnerHTML={{ __html: author.bio?.html }}
    //         />
    //       </section>
    //     </div>

    //     <section className={styles.postsSection}>
    //       <h2 className={styles.postsTitle}>Posts</h2>
    //       <section>
    //         <ul className={styles.postsContainer}>
    //           { author.posts && author.posts
    //             .filter(post => !post.postDisabled)
    //             .sort((a, b) => new Date(b.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime() - new Date(a.createdAt.replace(/(\.\d{3})\d+/, "$1")).getTime())
    //             .map((post, index) => (
    //             <li key={`post-${index}`} className={styles.postItem}>
    //                 <Link href={`/post/${post.slug}`}>
    //                   <PostList key={`post-${index}`} post={post} />
    //                 </Link>
    //             </li>
    //           )) }
    //         </ul>
    //       </section>
    //     </section>
    //   </section>
    // </>
  )
}

export default AutorTemplate;