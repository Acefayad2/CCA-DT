import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CCA - Turning Awareness Into Action | Devyn Thompson - Life Insurance & Financial Services',
  description: 'Devyn Thompson helps families and individuals secure their financial future with IULs, annuities, whole life, and term life insurance policies. Free financial breakdowns available. CCA — Consistent, Compassionate Activists.',
  keywords: ['life insurance', 'IUL', 'annuities', 'whole life insurance', 'term life insurance', 'financial planning', 'Devyn Thompson', 'CCA', 'Consistent Compassionate Activists'],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
