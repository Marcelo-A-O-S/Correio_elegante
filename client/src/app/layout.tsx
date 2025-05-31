import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://correio-elegante-gastao.vercel.app'),
  title: {
    default: "Correio Elegante",
    template: "%s | Correio Elegante Gastão Valle",
  },
  applicationName: "Correio Elegante",
  description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores na Escola Estadual Professor Gastão Valle.",
  authors: [{
    name: "Marcelo Augusto", url: 'https://github.com/Marcelo-A-O-S'
  },
  {
    name: "Daniel"
  }
  ],
  generator: 'Next.js',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  referrer: 'origin-when-cross-origin',
  keywords:
    ['correio elegante',
      'escola estadual professor gastão valle',
      'cartas',
      'amizade',
      'romance',
      'carinho',
      'correio elegante gastão',
      'correioelegantegastao',
      'incentivo',
      'correio elegante no gastão valle',
      'correio elegante na escola estadual professor gastão valle',
      'correio elegante gastão valle',
      'correio elegante escola estadual professor gastão valle',
      'correio elegante no colégio',
      'correio elegante na escola',
      "correio elegante noturno",
      'noturno',
      'correio elegante noturno gastão valle',
      'correio elegante gastão noturno',
      'correio elegante gastão valle noturno',
    ],
  alternates: {
    canonical: "https://correio-elegante-gastao.vercel.app/",
    languages: {
      pt: "https://correio-elegante-gastao.vercel.app/",
    }
  },
  openGraph: {
    siteName: "Correio Elegante",
    locale: 'pt_BR',
    title: "Correio Elegante",
    description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores na Escola Estadual Professor Gastão Valle.",
    images: [
      {
        url: "https://correio-elegante-gastao.vercel.app/2.jpg",
        width: 800,
        height: 600,
        alt: "Correio Elegante Hero Image",
      },
    ],
    type: 'website',
  },
  category: 'education',
  creator: "Marcelo Augusto",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
      <meta name="google-site-verification" content="Q65mQCs6BwMUrVYfGpq88PI_sJE5A40xSLusYRF6EGQ" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
