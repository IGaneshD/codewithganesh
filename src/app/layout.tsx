import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodeWithGanesh - Learn Coding with CodeSpire',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-inter antialiased bg-white text-slate-800 dark:bg-tech-dark dark:text-slate-200 transition-theme ${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}