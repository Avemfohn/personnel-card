import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "next-themes";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from "react-redux";
import { SessionProvider } from "next-auth/react"
export default function App({ Component, pageProps: {session, ...pageProps} }: AppProps) {
    const queryClient = new QueryClient()
  return(
      <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>

    <ThemeProvider attribute="class" enableSystem={true}>
       <Component {...pageProps} />
    </ThemeProvider>

        </QueryClientProvider>
        </SessionProvider>
  )
}
