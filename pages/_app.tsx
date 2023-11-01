import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout';
import LoginModal from '@/components/modal/loginModal';
import SignupModal from '@/components/modal/signupModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <SignupModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
