import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SideContact } from "@/components/side-contact";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Vinit Sharma | Portfolio",
  description: "Software engineer portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <SideContact orientation="left" emailOnly={false} />
        <SideContact orientation="right" emailOnly />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
