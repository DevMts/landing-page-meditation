'use client'
import { Poppins, PT_Serif, Roboto } from 'next/font/google'
import Image from 'next/image'
import img from '@/assets/imgFive.svg'
import { Check } from 'lucide-react'
import { Form } from '@/components/Form'
import { useState } from 'react'
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
})

interface FiveProps {
  btn: boolean
  setBtn: () => void
}
export function FiveSection({ btn, setBtn }: FiveProps) {
  const [show, setShow] = useState(false)
  function handleClick() {
    setShow(!show)
  }

  return (
    <section className="mx-auto flex gap-10 px-10 pt-15 md:max-w-4/5 md:flex-row md:justify-between md:px-0">
      <article className="hidden md:block">
        <Image src={img} alt="Vercel Logo" />
      </article>
      <article className="flex flex-col">
        <span
          className={`${poppins.className} text-principal text-sm font-bold`}
        >
          {' '}
          Ainda não está convencido?
        </span>
        <strong
          className={`${ptSerif.className} text-[2.5rem]/[1.1] font-bold`}
        >
          Benefícios
        </strong>
        <p
          className={`${roboto.className} mt-2.5 text-left text-xs/[1.3] text-[#525252] md:max-w-115 md:text-sm`}
        >
          Cuidar da sua mente não precisa ser difícil. Com pequenas pausas
          guiadas, você pode sentir a diferença no corpo, no foco e nas emoções
          — sem esforço e no seu tempo.
        </p>
        <div className="mt-12 mb-2.5 flex max-w-115 flex-wrap items-center justify-between gap-y-7 md:gap-x-4">
          {[
            'Menos ansiedade no dia a dia',
            'Qualidade no sono',
            'Mais clareza mental',
            'Bem-estar que cabe na rotina',
          ].map((item, index) => (
            <div className="flex items-center gap-2.5" key={index}>
              <div className="bg-principal flex size-8 items-center justify-center rounded-full">
                <Check size={16} color="#167D62" />
              </div>
              <span
                className={` ${poppins.className} max-w-32 text-sm/[1.3] font-semibold`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <Form btn={btn} setShow={handleClick} setBtn={setBtn} />
      </article>
    </section>
  )
}
