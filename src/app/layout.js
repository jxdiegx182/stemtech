import { Montserrat } from "next/font/google";
import { brandLogo, brandName, metadataContent } from "./components/landing/landingData";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: metadataContent.title,
  description: metadataContent.description,
  icons: {
    icon: brandLogo.src,
    apple: brandLogo.src,
  },
  openGraph: {
    title: brandName,
    description: metadataContent.description,
    type: "website",
    images: [
      {
        url: brandLogo.src,
        width: brandLogo.width,
        height: brandLogo.height,
        alt: brandLogo.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description: metadataContent.description,
    images: [brandLogo.src],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
