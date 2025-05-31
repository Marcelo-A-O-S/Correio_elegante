import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
  title: "Correio Elegante",
  description: "Espalhe carinho, admiração e um pouco de mistério pelos corredores na Escola Estadual Professor Gastão Valle.",
  authors:[{
    name: "Marcelo Augusto"
  },
  {
    name: "Daniel"
  }
  ],
  openGraph: {
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
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
