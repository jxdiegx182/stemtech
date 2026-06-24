import { Montserrat } from "next/font/google";
import { brandName, metadataContent } from "./components/landing/landingData";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: metadataContent.title,
  description: metadataContent.description,
  openGraph: {
    title: brandName,
    description: metadataContent.description,
    type: "website",
    images: [
      {
        url: "/StemBot3D.png",
        width: 1024,
        height: 1024,
        alt: "Logo STEM BOT 3D",
      },
    ],
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
