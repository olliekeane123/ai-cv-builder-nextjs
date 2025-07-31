import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: {template: "%s - AI CV Builder", absolute: "AI CV Builder"},
    description: "AI CV Builder is a tool that helps you create professional CVs using AI.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
