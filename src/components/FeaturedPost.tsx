import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Post } from "@/templates/Post";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: string;
  createdAt: string;
  readingTime?: string;
  category?: string;
  author?: string;
}

export const FeaturedPost = ({
  title,
//   excerpt,
  slug,
  coverImage,
  createdAt,
//   readingTime,
  subCategories,
  author,
}: Post) => {
  return (
    <Link href={`/post/${slug}`} className="group block h-full">
      <article className="relative h-full min-h-[420px] rounded-2xl overflow-hidden border border-border bg-card shadow-md hover:shadow-xl transition-all duration-500">
        {/* Background image */}
        {coverImage ? (
          <div className="absolute inset-0">
            <Image
              src={coverImage.url}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
          </div>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-card" />
        )}

        {/* Badge */}
        {/* <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow">
            ✦ Último Post
          </span>
        </div> */}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-8">
          {subCategories[0].category && (
            <span className="text-xs font-semibold uppercase tracking-widest text-white mb-2 block">
              {subCategories[0].category.name}
            </span>
          )}

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3 transition-colors duration-300 line-clamp-3">
            {title}
          </h2>

          {/* <p className="text-sm text-white/70 mb-5 line-clamp-2 leading-relaxed">
            {excerpt}
          </p> */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-white/60 text-xs">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(createdAt).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
              {/* {readingTime && (
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime}
                </span>
              )} */}
            </div>

            {/* <span className="flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
              Ler post
              <ArrowRight className="w-4 h-4" />
            </span> */}
          </div>
        </div>
      </article>
    </Link>
  );
};