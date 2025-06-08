import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Five',
  description: 'Seu novo app de meditação',
  openGraph: {
    images: [
      {
        url: 'https://ibb.co/8DNt5qFM',
        width: 800,
        height: 600,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
