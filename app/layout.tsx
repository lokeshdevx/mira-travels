import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Meera Travels",
  description: "Meera Travels",
  generator: "Lokesh Sharma",
  keywords: ["Meera Travels", "Rajasthan", "Tourism", "Travel"],
  authors: [{ name: "Lokesh Sharma" }],
  openGraph: {
    title: "Meera Travels",
    description: "Meera Travels",
    type: "website",
    locale: "en",
    siteName: "Meera Travels",
    url: "https://Meera-travels.vercel.app",
    images: [
      {
        url: "/image.png?height=400&width=600&query=logo Meera travels",
        height: 400,
        width: 600,
        alt: "Meera Travels Logo",
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
