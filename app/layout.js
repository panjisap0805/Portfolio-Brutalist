import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://panjisaputro.id"),
  title: {
    default: "Panji Saputro, Product Designer who ships",
    template: "%s, Panji Saputro",
  },
  description:
    "Product designer in Jakarta turning messy operational reality into working systems: research, flows, and code deployed by the same pair of hands.",
  icons: {
    icon: "/asset-favicon.png",
    shortcut: "/asset-favicon.ico",
  },
  openGraph: {
    siteName: "Panji Saputro",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#main"
          className="t-label sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
