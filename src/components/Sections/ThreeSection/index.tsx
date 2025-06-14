import Image from 'next/image'
import blob from '@/assets/blob3.svg'
import { Roboto, PT_Serif, Poppins } from 'next/font/google'
import meta from '@/assets/meta.svg'
import hadset from '@/assets/hadset.svg'
import play from '@/assets/play.svg'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
interface CardProps {
  image: string
  title: string
  description: string
  link: string
  color: string
}
function Card({ image, title, description, link, color }: CardProps) {
  return (
    <div className="flex w-full flex-col gap-5 rounded-[8px] bg-[#E9F5F3] px-8 py-5 [box-shadow:2px_4px_30.1px_5px_rgba(0,0,0,0.07)] md:max-w-xs">
      <div
        className={'flex size-16 items-center justify-center rounded-full'}
        style={{ backgroundColor: color }}
      >
        <Image src={image} alt="Vercel Logo" />
      </div>
      <strong className={`${poppins.className} font-bold`}>{title}</strong>
      <div className="flex flex-1 flex-col justify-between gap-10">
        <p
          className={`${roboto.className} max-w-5/6 text-left text-xs/[1.3] text-[#525252] sm:text-sm/[1.3]`}
        >
          {description}
        </p>
        <a
          href=""
          className={`${poppins.className} text-principal md:hover:text-principal text-[0.625rem]/[1.1] font-bold transition-all hover:scale-101 md:text-sm`}
        >
          {link}
        </a>
      </div>
    </div>
  )
}

export function ThreeSection() {
  return (
    <section className="relative min-h-[calc(100dvh-80px)] w-full pt-20 md:px-0">
      <div className="absolute top-0 -left-1/2 -z-10 md:left-0">
        <Image src={blob} alt="Vercel Logo" />
      </div>

      <div className="mx-auto w-4/5">
        <h2
          className={`${ptSerif.className} text-[#0A0A22} mb-1.5 text-left text-2xl/[1.1] font-bold md:text-3xl/[1.1]`}
        >
          Comece assim
        </h2>
        <p
          className={`${roboto.className} max-w-3xs text-left text-xs/[1.3] text-[#525252] md:max-w-xl md:text-sm`}
        >
          Pequenos passos, grandes mudanças. Veja como é simples transformar o
          seu dia em poucos minutos.
        </p>
        <article className="mt-9 flex w-full flex-wrap justify-center gap-y-20 md:justify-between">
          <Card
            image={meta}
            title="Meditação"
            description="Defina o que você precisa: foco, calma, sono ou motivação.Temos uma meditação ideal para cada momento."
            link="Saiba Mais"
            color="#C8DBED"
          />
          <Card
            image={hadset}
            title="Coloque seus fones"
            description="Crie seu espaço de silêncio.Conecte-se com você mesmo, sem distrações."
            link="Preparar ambiente"
            color="#EDE6CA"
          />
          <Card
            image={play}
            title="Aperte o play e relaxe"
            description="Defina o que você precisa: foco, calma, sono ou motivação.Temos uma meditação ideal para cada momento."
            link="Começar agora"
            color="#DACEF2"
          />
        </article>
      </div>
    </section>
  )
}
