// components/Comment.tsx
'use client'

import Image, { StaticImageData } from 'next/image'
import { IoIosStar } from 'react-icons/io'
import aspas from '@/assets/aspas.svg'
import { Poppins, Roboto } from 'next/font/google'

interface CommentProps {
  textoDestaque: string
  textoComplementar: string
  nota: number
  autor: string
  avatar: StaticImageData
  data: string
}

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

export function Comment({
  textoDestaque,
  textoComplementar,
  nota,
  autor,
  avatar,
  data,
}: CommentProps) {
  return (
    <div className="relative max-w-115 pt-6 pl-10">
      <div className="absolute top-0 left-0">
        <Image src={aspas} alt="aspas" />
      </div>

      <p
        className={`${poppins.className} text-left text-xs/[1.3] text-[#000] md:max-w-xl md:text-xl`}
      >
        {textoDestaque}
      </p>

      <p
        className={`${roboto.className} mt-4 mb-5 text-left text-sm/[1.3] text-[#525252]`}
      >
        {textoComplementar}
      </p>

      <div className="flex items-center gap-2">
        <Image
          src={avatar}
          alt={`Avatar de ${autor}`}
          className="size-10 rounded-full"
        />
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1">
            <span className="text-[#7d7d7d]">{data}</span>
            {[...Array(nota)].map((_, i) => (
              <IoIosStar key={i} fill="#000" size={16} />
            ))}
          </div>
          <span className="text-[#7d7d7d]">{autor}</span>
        </div>
      </div>
    </div>
  )
}
