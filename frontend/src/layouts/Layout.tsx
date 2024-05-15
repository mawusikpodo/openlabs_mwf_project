import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

interface Props {
  children : React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <div className='container mx-auto py-10 flex-1'>{children}</div>
      <Footer />
    </div>
  )
}
