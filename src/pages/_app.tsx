import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Work_Sans, Hanken_Grotesk } from 'next/font/google';

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Sesuaikan dengan kebutuhan
  variable: '--font-work-sans', // Opsional, untuk CSS variable
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '700'], // Sesuaikan dengan kebutuhan
  variable: '--font-hanken-grotesk',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      lang="en"
      className={`${workSans.variable} ${hankenGrotesk.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
