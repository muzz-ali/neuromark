import { Inter, Manrope, JetBrains_Mono } from 'next/font/google';
import './global.css';
import LenisProvider from '@/components/LenisProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata = {
  title: 'NeuroMark | Professional Website Design Agency',
  description: 'NeuroMark builds professional websites for local and growing businesses, helping them establish a strong online presence with modern, high-performance websites.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-white bg-background selection:bg-tech-blue/30 selection:text-white">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}