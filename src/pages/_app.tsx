import '../styles/burger.css'
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { generateDefaultSeo } from 'next-seo/pages';
import type { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';
import { defaultSeo } from '@/lib/seo';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          storageKey="theme">
        <Head>{generateDefaultSeo(defaultSeo)}</Head>
        <NextNProgress color="#7C6FEC" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
