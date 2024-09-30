import React from 'react'
import Navigation from '../Components/Navigation.jsx'

const Home = () => {
  return (
    /*The HomePage of the website*/
    <div className='Home'>
       <Navigation />
        <div className="absolute top-[35%]">
         <div className="w-8/12 m-auto flex-col justify-items-center text-center">
           <h1 className='text-blue-950 text-3xl md:text-5xl lg:text-6xl font-bold italic py-2'>Empowering Parents, Enriching Families</h1>
           <p className='text-blue-500 text-2xl md:text-3xl py-2'>Building resilience, one family at a time.</p>
           <button className='bg-blue-950 text-blue-400 p-3 
            px-8 rounded-full font-semibold hover:text-blue-950 hover:bg-blue-500'>
              <a href='../Pages/Support.jsx'>
                Get Support
              </a>
           </button>
         </div>
         </div>
         </div>
  )
}

export default Home