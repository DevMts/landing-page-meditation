import { PT_Serif, Roboto } from 'next/font/google'
import { Comment } from '@/components/Comment'
import leticia from '@/assets/leticia.png'
import camila from '@/assets/camila.png'
import rafa from '@/assets/rafa.png'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export function FourSection() {
  return (
    <section className="mx-auto flex min-h-[calc(100dvh-80px)] w-full flex-col justify-center gap-10 px-10 pt-15 md:max-w-4/5 md:flex-row md:flex-wrap md:justify-between md:px-0">
      <article className="flex flex-col gap-8">
        <strong className={`${ptSerif.className} text-[2.5rem]/[1.1]`}>
          Quem viveu, recomenda
        </strong>
        <p
          className={`${roboto.className} max-w-3xs text-left text-xs/[1.3] text-[#525252] md:max-w-xl md:text-sm`}
        >
          Veja como poucos minutos por dia fizeram diferença na rotina de quem
          confiou na pausa certa.Realidades, sentimentos e transformações — em
          palavras sinceras.
        </p>
      </article>
      <article className="flex flex-col gap-10">
        <Comment
          textoDestaque="Em 5 minutos, encontrei uma calma que eu não sentia há dias."
          textoComplementar="A escolha da meditação certa mudou meu foco completamente. Sinto mais equilíbrio e clareza no dia a dia."
          nota={4}
          autor="Leticia"
          avatar={leticia}
          data="5/4"
        />
        <Comment
          textoDestaque="Parecia só mais um áudio… virou meu ritual de paz."
          textoComplementar="O som, a voz, o tempo: tudo encaixou.Me ajudou a desacelerar sem esforço."
          nota={5}
          autor="Camila"
          avatar={camila}
          data="5/5"
        />
        <Comment
          textoDestaque="Foi a primeira vez que consegui realmente relaxar."
          textoComplementar="Eu sempre achava que meditar não era pra mim.Mas agora não passo um dia sem esse momento comigo."
          nota={5}
          autor="Rafa"
          avatar={rafa}
          data="5/5"
        />
      </article>
    </section>
  )
}
