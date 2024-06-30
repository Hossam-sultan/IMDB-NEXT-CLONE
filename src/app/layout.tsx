import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./component/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IMDB CLONE",
  description: "Generated by create Sultan",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
