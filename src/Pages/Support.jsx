import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import SupportTeam from '../Components/SupportTeam'


const Support = () => {
  return (
    <div>
      <div className="mb-8">
      <Navigation />
      <div className="w-10/12 m-auto py-16 text-center">
      <h2 className='text-2xl md:text-4xl text-blue-950'>
       Support
      </h2>
      <p className='md:text-xl'>
        Pericare is dedicated to empowering expectant and new mothers by providing essential resources, expert guidance, and a supportive community to navigate the unique challenges of perinatal health.
      </p>
    

      <div className="bg-gray-300 p-8 my-2">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-700 text-white py-4 text-xl hover:shadow-2xl p-4" >
           <h1 className='font-semibold text-2xl'>
             Friday Sections
           </h1>
           <h3 className='text-gray-400 text-sm py-2'>
            Maternity period tips
           </h3>
           <button className='rounded-lg active:opacity-5 bg-white text-blue-600 active:text-white p-2'>
           <a href='https://meet.google.com'>
           8:00pm-10:00pm
           </a>
            </button>
          </div>

          <div className="bg-blue-700 text-white py-4 text-xl hover:shadow-2xl p-4" >
           <h1 className='font-semibold text-2xl'> 
            Monday Sections
           </h1>
           <h3 className='text-gray-400 text-sm py-2'>
            How to Handle Child Birth Anxiety 
           </h3>
           <button className='rounded-lg active:opacity-5 bg-white text-blue-600 active:text-white p-2'>
           <a href='https://meet.google.com'>
           6:00pm-8:00pm
           </a>
           </button>
          </div>
          
          <div className="bg-blue-700 text-white py-4 text-xl hover:shadow-2xl p-4" >
           <h1 className='font-semibold text-2xl'>
            Saturday Sections
           </h1>
           <h3 className='text-gray-400 text-sm py-2'>
            Antinatal Education
           </h3>
           <button className='p-2 rounded-lg active:opacity-5 bg-white text-blue-600 active:text-white'>
           <a href='https://meet.google.com'>
           8:00am-10:00am
           </a>
            </button>
          </div>
         
        </div>
      </div>
      </div>
     </div>

       <div className="">
        <SupportTeam />
       </div>
      <Footer/>
    </div>
  )
}

export default Support