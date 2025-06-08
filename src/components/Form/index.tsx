import { zodResolver } from '@hookform/resolvers/zod'
import { Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { Button } from '../Button'
import { useWindowWidth } from '@/hooks/useWindowWidth'

const HeroSchema = z.object({
  email: z
    .string()
    .email('E-mail inválido')
    .min(8, 'E-mail com menos de 8 caracteres'),
})

export type HeroSchemaType = z.infer<typeof HeroSchema>

interface FormProps {
  btn: boolean
  setBtn: () => void
  setShow: () => void
}

export function Form({ btn, setBtn, setShow }: FormProps) {
  const width = useWindowWidth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<HeroSchemaType>({
    resolver: zodResolver(HeroSchema),
  })

  async function handleSubscribe() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setBtn()
    reset()
  }
  return (
    <div className="relative mt-5">
      <form
        action=""
        className={
          'focus-within:ring-principal relative mx-auto flex h-10 w-full max-w-md items-center overflow-hidden rounded-full bg-[#E9F5F3] pr-32 ring-1 ring-gray-300 focus-within:ring-2 md:mx-0'
        }
        onSubmit={handleSubmit(handleSubscribe)}
      >
        <div
          className={`${btn && 'w-0'} fade-in flex items-center bg-[#E9F5F3] pl-3 transition duration-500`}
        >
          <Mail size={18} className="text-gray-500" />
        </div>

        <input
          type="email"
          className={`${btn && 'w-0'} fade-in w-full bg-[#E9F5F3] px-3 text-sm text-gray-700 transition duration-500 outline-none placeholder:text-gray-400`}
          {...(width &&
            (width < 1024 ? '' : { placeholder: 'Digite seu melhor email' }))}
          {...register('email')}
          disabled={btn}
          id="email"
          onFocus={() => setShow()}
          onBlur={() => setShow()}
        />

        <Button
          text={btn ? 'Sua paz está a caminho' : 'Quero minha Paz'}
          className={`fade-in absolute top-0 left-0 h-full w-fit blur-none transition-all duration-500 ${btn ? 'hover:bg-principal disabled:bg-principal w-full hover:text-white disabled:text-white' : 'hover:bg-secondary right-0 ml-auto w-auto hover:text-gray-500'} `}
          disabled={isSubmitting || btn}
        />
      </form>
      {errors.email && (
        <span className="mt-1 ml-[1.25rem] block text-left text-xs font-medium text-red-500 md:ml-0">
          {errors.email.message}
        </span>
      )}
    </div>
  )
}
