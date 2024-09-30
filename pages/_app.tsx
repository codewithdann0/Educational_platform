// pages/_app.tsx
import { AppProps } from 'next/app';
import '../app/globals.css'; // Import your global CSS here

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
