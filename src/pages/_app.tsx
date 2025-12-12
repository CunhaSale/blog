import '../styles/burger.css'
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from "next/app";
import NextNProgress from 'nextjs-progressbar';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          storageKey="theme">
        <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
