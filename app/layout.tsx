import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GRABACOR | Corte y Grabado Láser en Metal en Ecuador",
  description:
    "Servicio profesional de corte y grabado láser en metal. Grabado MOPA, acero inoxidable, placas industriales, señalética y personalización metálica.",
  keywords:
    "corte laser metal, grabado laser metal, grabado laser Ecuador, corte laser Ecuador, grabado MOPA, acero inoxidable, placas industriales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
