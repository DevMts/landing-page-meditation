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

export function Navbar({ btn }: { btn: boolean }) {
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
        className={`${width && (width < 1024 ? 'hidden' : '')} absolute top-0 right-0 -z-10 w-auto`}
      />

      <div className="mx-auto flex w-4/5 items-center justify-between">
        <Link href="/">
          <Image src={logo} alt="Vercel Logo" />
        </Link>
        <div>
          <Link
            href="#email"
            className={` ${poppins.className} bg-principal ${btn ? 'hover:bg-principal hover:text-white' : 'hover:bg-secondary hover:text-gray-500'} trasition rounded-full px-4 py-2.5 text-[0.625rem] font-medium text-white uppercase duration-300 sm:text-sm`}
          >
            {btn ? 'Sua paz está a caminho.' : 'Quero minha Paz'}
          </Link>
        </div>
      </div>
    </div>
  )
}
