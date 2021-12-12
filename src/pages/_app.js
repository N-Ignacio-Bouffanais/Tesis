import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Tesis Nicolas</title>
      </Head>
      <div>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
