import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


export default function App({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient()
  return(
      <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" enableSystem={true}>
       <Component {...pageProps} />
    </ThemeProvider>
        </QueryClientProvider>
  )
}
