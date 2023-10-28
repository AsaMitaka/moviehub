import Layout from '@/components/layout';
import LoginModal from '@/components/modal/loginModal';
import SignupModal from '@/components/modal/signupModal';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SignupModal />
      <LoginModal />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
