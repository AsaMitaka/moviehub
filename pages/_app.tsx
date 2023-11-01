import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

import '@/styles/globals.css';

import Layout from '@/components/layout';
import LoginModal from '@/components/modal/loginModal';
import SignupModal from '@/components/modal/signupModal';
import EditModal from '@/components/modal/editModal';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <EditModal />
      <LoginModal />
      <SignupModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
