import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import QueryProvider from "./providers/QueryProvider";
import AuthProvider from "./providers/AuthProvider";
const yekanBakh = localFont({
  src: [
    {
      path: "./fonts/yekan/woff/YekanBakh-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/yekan/woff/YekanBakh-Bold.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/yekan/woff/YekanBakh-ExtraBold.woff",
      weight: "600",
      style: "normal",
    },
    // {
    //   path: "/fonts/yekan/woff/YekanBakh-ExtraBlack.woff",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-yakan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "میزکد",
  description: "وب سایت میزکد",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className={`${yekanBakh.variable} ${yekanBakh.variable} bg-background antialiased font-[family-name:var(--font-yakan)] `}
      >
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
