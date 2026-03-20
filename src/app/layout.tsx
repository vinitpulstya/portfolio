import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { SideContact } from "@/components/side-contact";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { CursorTracker } from "@/components/cursor-tracker";

export const metadata: Metadata = {
  title: "Vinit Sharma | Portfolio",
  description: "Software engineer portfolio",
  icons: {
    icon: "/images/pic.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <CursorTracker />
          <Header />
          <SideContact orientation="left" emailOnly={false} />
          <SideContact orientation="right" emailOnly />
          <main className="w-full">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
