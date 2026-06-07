import Footer from '@/components/Global/Footer'
import Hero from '@/components/Hero/Hero'
import ServiceSection from '@/components/serviceSection/ServiceSection'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <main>
        <Hero/>
        <ServiceSection/>
        <WhyChooseUs/>
      </main>
    </div>
  )
}

export default page