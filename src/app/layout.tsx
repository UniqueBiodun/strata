import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './containers/navbar/Navbar';
import Footer from './containers/footer/Footer';

const kumbhSans = Kumbh_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Crunch by Strata',
  description: 'Crunch by Strata',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${kumbhSans.className}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
