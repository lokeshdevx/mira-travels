import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mira Travels",
  description: "Mira Travels",
  generator: "Lokesh Sharma",
  keywords: ["Mira Travels", "Rajasthan", "Tourism", "Travel"],
  authors: [{ name: "Lokesh Sharma" }],
  openGraph: {
    title: "Mira Travels",
    description: "Mira Travels",
    type: "website",
    locale: "en",
    siteName: "Mira Travels",
    url: "https://meera-travels.vercel.app/",
    images: [
      {
        url: "/image.png?height=400&width=600&query=logo Mira travels",
        height: 400,
        width: 600,
        alt: "Mira Travels Logo",
      },
    ],
  },
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
