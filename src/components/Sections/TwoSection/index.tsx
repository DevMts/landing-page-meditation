import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Image from 'next/image'
import clock from '@/assets/clock.svg'
import focus from '@/assets/focus.svg'
import sleep from '@/assets/sleep.svg'
import { Poppins, Roboto, PT_Serif } from 'next/font/google'

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

interface CardProps {
  image: string
  title: string
  description: string
}

const Card = ({ image, title, description }: CardProps) => (
  <div className="mx-auto mb-8 flex w-fit flex-col items-center justify-center gap-4">
    <Image
      src={image}
      alt={title}
      className={`${image === clock && 'mt-3.5'} ${image === focus && 'ml-3'}`}
    />
    <strong className={`${poppins.className} text-sm/[1.1]`}>{title}</strong>
    <p
      className={`${roboto.className} max-w-25 text-center text-xs/[1.1] md:max-w-30 md:text-sm`}
    >
      {description}
    </p>
  </div>
)

export function TwoSection() {
  return (
    <section className="-[#00f0c8] h-[calc(100dvh-80px)] w-full pt-20">
      <div className="mx-auto mb-16 flex w-4/5 flex-col items-center gap-2">
        <span className="text-principal mx-auto text-center text-sm/[1.1] font-bold">
          Sua mente não desliga?
        </span>
        <h2
          className={`${ptSerif.className} text-center text-2xl/[1.1] font-bold text-[#0A0A22] md:text-[2.5rem]/[1.1]`}
        >
          Seu descanso está aqui
        </h2>
        <p
          className={`${roboto.className} text-center text-xs/[1.3] text-[#525252] md:max-w-xl md:text-sm`}
        >
          Um espaço criado para ajudar sua mente a desacelerar, seu corpo a
          relaxar e sua energia a se renovar. Você não precisa fazer muito — só
          apertar o play e deixar a calma entrar.
        </p>
      </div>
      <div>
        {/* Swiper - visível só no mobile */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <Card
                image={clock}
                title="Sessões Rápidas"
                description="Melhore seu dia com apenas 5 minutos"
              />
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <Card
                image={focus}
                title="Foco e Silêncio"
                description="Áudio para se desconectar do mundo"
              />
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <Card
                image={sleep}
                title="Sono Reparador"
                description="Exercícios que preparam para um sono profundo"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Cards lado a lado - visível em telas maiores */}
        <div className="mx-auto my-8 hidden w-fit justify-center gap-50 md:flex">
          <Card
            image={clock}
            title="Sessões Rápidas"
            description="Melhore seu dia com apenas 5 minutos"
          />
          <Card
            image={focus}
            title="Foco e Silêncio"
            description="Áudio para se desconectar do mundo"
          />
          <Card
            image={sleep}
            title="Sono Reparador"
            description="Exercícios que preparam para um sono profundo"
          />
        </div>
      </div>
    </section>
  )
}
