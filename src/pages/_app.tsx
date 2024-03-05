import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Layout from "./Layout";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (<ThemeProvider enableSystem={true} attribute="class">
    <Layout>
    <Component {...pageProps} />
    <Script src="https://kit.fontawesome.com/7eb1147bee.js" crossOrigin="anonymous"/>
    </Layout>
  </ThemeProvider>);
}
