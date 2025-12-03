import { Calendar, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface BlogPostCardProps {
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

export const BlogPostCard = ({ title, description, coverImage, author, createdAt, slug }: BlogPostCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover border-border">
      <Link href={`/post/${slug}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={coverImage.url}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {(() => {
                    const now = new Date();
                    const postDate = new Date(createdAt.replace(/(\.\d{3})\d+/, "$1"));
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
              </span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author?.name}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};
