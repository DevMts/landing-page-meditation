import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export function Button({
  text,
  className,
  disabled,
}: {
  text: string
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      disabled={disabled}
      className={` ${poppins.className} ${className} bg-principal rounded-full px-4 py-2.5 text-xs font-medium text-white uppercase transition duration-300 disabled:bg-[#e0e0e0] disabled:text-[#42b093]`}
    >
      {text}
    </button>
  )
}
