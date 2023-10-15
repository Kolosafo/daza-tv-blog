import './globals.css'
import type { Metadata } from 'next'
// import { Roboto } from 'next/font/google'

// const roboto = Roboto({  weight: '400', // if single weight, otherwise you use array like [400, 500, 700],
// style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
// subsets: ['latin'], })

export const metadata: Metadata = {
  title: 'Daza TV',
  description: 'Home of Arewa News and Movies',
  icons: {
    icon: "/logo.jpg",
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" href="/logo.jpg" />
    </head>
      <body>
        {children}
        </body>
    </html>
  )
}
