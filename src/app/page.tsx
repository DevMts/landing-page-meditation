'use client'
import { Hero } from '@/components/Sections/Hero'
import { Navbar } from '@/components/Navbar'
import { useState } from 'react'
import { TwoSection } from '@/components/Sections/TwoSection'
import { ThreeSection } from '@/components/Sections/ThreeSection'
import { FourSection } from '@/components/Sections/FourSection'
import { FiveSection } from '@/components/Sections/FiveSection'
import { Footer } from '@/components/Sections/Footer'

export default function Home() {
  const [btn, setBtn] = useState(false)
  function handleClick() {
    setBtn(true)
  }
  return (
    <>
      <Navbar btn={btn} />
      <Hero btn={btn} setBtn={handleClick} />
      <TwoSection />
      <ThreeSection />
      <FourSection />
      <FiveSection btn={btn} setBtn={handleClick} />
      <Footer />
    </>
  )
}
