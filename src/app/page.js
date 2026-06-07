import Footer from '@/components/Global/Footer'
import Hero from '@/components/Hero/Hero'
import ServiceSection from '@/components/serviceSection/ServiceSection'
import ServiceSkeleton from '@/components/Skeleton/ServiceSkeleton'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <main>
        <Hero />
        <Suspense fallback={<ServiceSkeleton />}>
          <ServiceSection />
        </Suspense>
        <WhyChooseUs />
      </main>
    </div>
  );
}

export default page