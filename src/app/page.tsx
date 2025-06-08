'use client'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { useState } from 'react'

export default function Home() {
  const [btn, setBtn] = useState(false)
  function handleClick() {
    setBtn(true)
  }
  return (
    <>
      <Navbar btn={btn} />
      <Hero btn={btn} setBtn={handleClick} />
    </>
  )
}
