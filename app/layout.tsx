import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], 
 variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Health5 Asia - 2025",
  description: "biggest health expo in asia",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo/favicon-32x32.png",
    apple: "/logo/apple-touch-icon.png",
}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${dmSans.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
