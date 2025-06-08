'use client'
import Image from 'next/image'
import logo from '@/assets/FIVE.svg'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import blob1 from '@/assets/blob1.svg'
import blob2 from '@/assets/blob2.svg'
import { useWindowWidth } from '@/hooks/useWindowWidth'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
export function Navbar() {
  const width = useWindowWidth()

  return (
    <div className="relative mx-auto flex h-20 w-full items-center justify-between py-5">
      <Image
        src={blob1}
        alt="Vercel Logo"
        className="absolute top-0 left-0 -z-10 w-auto"
      />

      <Image
        src={blob2}
        alt="Vercel Logo"
        className={`${
          width && (width < 1024 ? 'hidden' : '')
        } absolute top-0 right-0 -z-10 w-auto`}
      />

      <div className="mx-auto flex w-4/5 items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Vercel Logo" />
        </Link>
        <div>
          <a
            href="#email"
            className={`${poppins.className} bg-principal hover:bg-secondary trasition rounded-full px-4 py-2.5 text-sm font-medium text-white uppercase duration-300 hover:text-gray-500`}
          >
            Quero minha Paz
          </a>
        </div>
      </div>
    </div>
  )
}
