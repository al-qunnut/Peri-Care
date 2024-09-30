import React from 'react'
import Emily from '../assets/Emily.png'
import Maya from '../assets/Maya.png'

const SupportTeam = () => {
  return (
    <div className='bg-blue-600 text-white py-8 my-8'>
      <div className="w-10/12 m-auto">
      <h1 className='mb-8 text-3xl md:text-4xl text-center font-semibold'>
            Our Support Team
      </h1>
      
        <div className="grid md:grid-cols-3 gap-6 my-4">
          <div className="">
            <img src={Emily} alt='img'/> 
          </div>  
          <div className="md:col-span-2">
            <h2 className='text-xl mb-1 font-semibold'>Dr. Emily Carter, Perinatal Health Therapist</h2>
            <p className='text-sm'> With over 10 years of experience, Dr. Emily Carter is a leading expert in perinatal mental health. Holding a Doctorate in Clinical Psychology, she specializes in helping mothers navigate the challenges of pregnancy and postpartum. Known for her compassionate, evidence-based approach, Dr. Carter also contributes to research and speaks at conferences, while mentoring emerging therapists in the field. Her dedication to improving maternal mental health and supporting families has earned her widespread respect and recognition.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="">
            <img src={Maya} alt='img'/> 
          </div>  
          <div className="md:col-span-2">
            <h2 className='text-xl mb-1 font-semibold'>Dr. Maya Patel, Clinical Psychologist</h2>
            <p className='text-sm'>Dr. Maya Patel is a seasoned clinical psychologist with over 15 years of experience in treating mental health disorders. She specializes in cognitive-behavioral therapy (CBT) and dialectical behavior therapy (DBT) for conditions like depression, anxiety, and bipolar disorder. Dr. Patel is recognized for her evidence-based, personalized treatment approach and is also a published researcher and conference speaker. In addition to her clinical practice, she mentors upcoming psychologists and contributes to community mental health efforts.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportTeam