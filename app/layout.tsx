import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mira Travels | Rajasthan Tour Packages, Taxi Services & Holiday Trips in India",
  description:
    "Plan your perfect Rajasthan trip with Mira Travels – a leading travel agency offering customized Rajasthan tour packages, private taxi services, heritage tours, desert safaris, and all-inclusive holiday packages across India. Book affordable, reliable, and comfortable travel experiences with expert local guides.",
  generator: "Lokesh Sharma",
  keywords: [
    "Mira Travels",
    "Rajasthan tour packages",
    "Rajasthan travel agency",
    "Jaipur Udaipur Jodhpur tour",
    "Desert safari Rajasthan",
    "India holiday packages",
    "Taxi service Rajasthan",
    "Private cab Jaipur",
    "Affordable tour packages India",
    "Travel agency Rajasthan",
    "Custom travel packages India",
  ],
  authors: [{ name: "Lokesh Sharma" }],
  openGraph: {
    title:
      "Mira Travels | Best Rajasthan Tour Packages & Travel Services in India",
    description:
      "Explore Rajasthan with Mira Travels – book customized tours, taxi services, and unforgettable travel experiences across Jaipur, Udaipur, Jodhpur, and more.",
    type: "website",
    locale: "en",
    siteName: "Mira Travels",
    url: "https://mira-travels.vercel.app/",
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
