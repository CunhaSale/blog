import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Post } from "@/templates/Post";

interface SecondaryPostProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  createdAt: string;
  readingTime?: string;
  category?: string;
}

const SecondaryPostCard = ({
  title,
//   excerpt,
  slug,
  coverImage,
  createdAt,
//   readingTime,
  subCategories,
}: Post) => {
  return (
    <Link href={`/post/${slug}`} className="group block">
      <article className="flex gap-4 rounded-xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md p-4">
        {/* Thumbnail */}
        {coverImage && (
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={coverImage.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        )}

        {!coverImage && (
          <div className="w-24 h-24 flex-shrink-0 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            <span className="text-2xl text-primary/40">✦</span>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between min-w-0 flex-1">
          <div>
            {subCategories[0].category && (
              <span className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-1 block">
                {subCategories[0].category.name}
              </span>
            )}
            <h3 className="text-sm font-bold text-foreground leading-snug line-clamp-2 transition-colors duration-200">
              {title}
            </h3>
            {/* <p className="text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
              {excerpt}
            </p> */}
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(createdAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                })}
              </span>
              {/* {readingTime && (
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {readingTime}
                </span>
              )} */}
            </div>
            {/* <ArrowRight className="w-3.5 h-3.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" /> */}
          </div>
        </div>
      </article>
    </Link>
  );
};

interface SecondaryPostsColumnProps {
  posts: SecondaryPostProps[];
}

export const SecondaryPostsColumn = ({ posts }: any) => {
  return (
    <div className="flex flex-col gap-4 h-full justify-between">
      {posts.slice(0, 3).map((post: Post) => (
        <SecondaryPostCard key={post.slug} {...post} />
      ))}
    </div>
  );
};