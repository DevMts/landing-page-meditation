'use client'
import { useWindowWidth } from '@/hooks/useWindowWidth'
import { PT_Serif, Roboto } from 'next/font/google'
import Image from 'next/image'
import heroImg from '@/assets/imgHero.svg'
import { Form } from '../../Form'
import { useState } from 'react'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
})

interface HeroProps {
  btn: boolean
  setBtn: () => void
}
export function Hero({ btn, setBtn }: HeroProps) {
  const width = useWindowWidth()
  const [show, setShow] = useState(false)
  const innerWidth = width != null && width < 1024

  function handleClick() {
    setShow(!show)
    if (show) {
      const element = document.getElementById('email')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="mx-auto flex h-[calc(100dvh-80px)] w-4/5 items-center justify-center">
      <article className="w-full items-center md:items-start">
        <h1
          className={` ${ptSerif.className} font-bold text-[#0A0A22] transition-all duration-150 ease-in-out${
            innerWidth
              ? `text-center text-4xl/[1.1] ${show && 'hidden'}`
              : 'text-left text-[2.5rem]/[1.1]'
          } `}
        >
          Encontre a calma
          <br /> em <span className="text-principal">5 minutos</span>
        </h1>{' '}
        <p
          className={` ${roboto.className} ${innerWidth && `${show && 'hidden'} `} mt-3 text-left text-xs/[1.3] text-[#808080] lg:w-3/4 lg:text-sm`}
        >
          Meditações guiadas para acalmar a mente e trazer um sono tranquilo.
          Deixe seu e-mail e seja o primeiro a saber do lançamento.
        </p>
        <Form btn={btn} setBtn={setBtn} setShow={handleClick} />
      </article>
      <article className="hidden w-full md:block">
        <Image src={heroImg} alt="Vercel Logo" className="w-full" />
      </article>
    </section>
  )
}
