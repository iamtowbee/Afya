import React from 'react'
import medical_information from "../assets/medical_information.svg"

const Offer = () =>
{
  return (
    <>
      {/* What We Offer Section */}
      <section className='bg-white'>
        <div className='container flex flex-col px-6 mx-auto lg:pt-32 mt-2 md:mt-4 space-y-0 md:space-y-0 md:space-x-10'>
          {/* Section Title */}
          <div className="flex flex-col space-y-6 md:space-y-10 my-8 md:my-16 items-center">
            <h2 className='max-w-lg text-3xl md:text-5xl font-semibold text-center'>What We Offer</h2>
            <p className="max-w-3xl text-center text-dark text-lg md:text-xl leading-6 font-Work-Sans font-normal">
              A decentralized healthcare platform where you can control and manage your medical data with ease and complete privacy.</p>
          </div>

          width: 98.125rem;
          height: 23.3125rem;
          <div className='flex justify-center items-start gap-7 shrink-0'>
            <div className='flex flex-col items-center justify-center w-96 h-auto shrink-0 bg-secondary'>
              <img src={medical_information} alt="" />
              <div>
                <p className="font-semibold text-md"></p>
              </div>
            </div>
          </div>



        </div>
      </section>
    </>
  )
}

export default Offer