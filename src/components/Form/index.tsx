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

export function Form() {
  const width = useWindowWidth()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<HeroSchemaType>({
    resolver: zodResolver(HeroSchema),
  })

  async function handleSubscribe(data: HeroSchemaType) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data.email)
  }
  return (
    <div className="mt-5">
      <form
        action=""
        className="focus-within:ring-principal relative mx-auto flex h-10 w-full max-w-md items-center overflow-hidden rounded-full bg-[#E9F5F3] ring-1 ring-gray-300 focus-within:ring-2 md:mx-0"
        onSubmit={handleSubmit(handleSubscribe)}
      >
        <div
          className={`${isSubmitSuccessful && 'w-0'} fade-in flex items-center bg-[#E9F5F3] px-3 transition duration-500`}
        >
          <Mail size={18} className="text-gray-500" />
        </div>

        <input
          type="email"
          className={`${isSubmitSuccessful && 'w-0'} fade-in placeholder:text-gray- 400 w-2 flex-1 bg-[#E9F5F3] px-3 text-sm text-gray-700 transition duration-500 outline-none`}
          {...(width &&
            (width < 1024 ? '' : { placeholder: 'Digite seu melhor email' }))}
          {...register('email')}
          disabled={isSubmitting}
          id="email"
        />

        <Button
          text={
            isSubmitSuccessful ? 'Sua paz está a caminho.' : 'Quero minha Paz'
          }
          className={`fade-in absolute top-0 left-0 h-full w-fit transition-all duration-500 ${isSubmitSuccessful ? 'hover:bg-principal w-full hover:text-white' : 'hover:bg-secondary right-0 ml-auto w-auto hover:text-gray-500'} `}
          disabled={isSubmitting}
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
