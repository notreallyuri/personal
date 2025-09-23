import type { Metadata } from 'next';
import { Figtree, JetBrains_Mono } from 'next/font/google';
import { Header } from '@/components/header';
import { ThemeProvider } from './_provider/next-themes';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'notreallyuri',
  description: "Yuri's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figtree.className} ${jetBrainsMono.variable} relative min-h-screen w-full antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
