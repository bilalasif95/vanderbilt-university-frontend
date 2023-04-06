import "../styles/globals.css";
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import Layout from "../Layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
