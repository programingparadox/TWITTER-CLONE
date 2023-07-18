import '../styles/globals.css'
import type { AppProps } from 'next/app';

import Layout from '../components/Layout';
import Modal from '../components/Modal';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import LoginModal from '../components/modals/LoginModal';
import RegisterModal from '../components/modals/RegisterModal';
import EditModal from '../components/modals/EditModal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Toaster />
    <RegisterModal />
    <LoginModal />
    <EditModal />
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  )
}

export default MyApp
