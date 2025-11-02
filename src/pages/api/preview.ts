/* eslint-disable @typescript-eslint/no-explicit-any */
import client from '@/graphql/client';
import { GetPageBySlugQuery } from '@/graphql/generated/graphql';
import { GET_PAGE_BY_SLUG } from '@/graphql/queries';

export default async function handler(req: any, res: any) {
   if (req.query.secret !== process.env.GRAPHCMS_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  async function getPageBySlug() {
    const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
        slug: `${req.query.slug}`
    })

    if (!page) return { notFound: true };
  
    return page
  };

  const page = await getPageBySlug();

  res.setPreviewData({})
  res.end(`Preview mode enabled for page: ${page}`);
  // res.redirect(`/${page.slug}`)
}