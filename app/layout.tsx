import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PasswordProtection } from "@/components/password-protection"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MedicareAdvantage.org by OptumNow",
  description: "Find the right Medicare plan for your needs with MedicareAdvantage.org by OptumNow.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <PasswordProtection>{children}</PasswordProtection>
        </ThemeProvider>
      </body>
    </html>
  )
}
