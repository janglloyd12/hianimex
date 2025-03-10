import MainWrapper from "@/components/main/layout/main-wrapper";
import Navbar from "@/components/main/ui/navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hianime | Watch Anime Online Free.",
  description:
    "Explore the trending anime, spotlight anime, latest anime & many more.",
  keywords: [
    "Hianime",
    "anime streaming website",
    "trending anime",
    "latest anime",
    "popular anime",
  ],
  openGraph: {
    title: "Hianime | Watch Anime Online Free.",
    description:
      "Explore the trending anime, spotlight anime, latest anime & many more.",
    images: "/og-image.png",
    type: "website",
  },
};

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainWrapper>
      <Navbar />
      {children}
      <footer className="bg-primary-100 px-4 py-10">
        <div className="wrapper-container flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <p>Made with ❤️</p>

          <div className="flex items-center gap-1">
            <p>Hianime does not store any files on our server.
</p>
            <Link
              href="https://www.hianimex.to"
              target="_blank"
              className="text-secondary underline underline-offset-2"
            >
              Hianimex.to
            </Link>
          </div>
        </div>
      </footer>
    </MainWrapper>
  );
}
