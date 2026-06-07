import { getServices } from '@/actions/serviceAction'
import React from 'react'
import ServiceCard from '../cards/ServiceCard';
import ViewDetails from '../buttons/ViewDetails';

const ServiceSection = async() => {

  const services = await getServices();


  //console.log(service);
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold">Our Care Services</h2>

        <p className="max-w-2xl mx-auto mt-4" style={{ color: "var(--muted)" }}>
          Trusted and professional caregiving services designed to support
          children, elderly family members, and patients in the comfort of their
          homes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {services?.slice(0, 6).map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className='flex justify-center py-4'>
        <ViewDetails/>
      </div>
    </section>
  );
}

export default ServiceSection;