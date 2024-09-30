import React from 'react'
import { dataInsights } from './CompJav'

const Data = () => {
  /*This is the Data & Insights section */
    const dataInsightComp = dataInsights.map(dataInsight => 
        <div key={dataInsight.id}
            className='p-4 my-4 border shadow-md hover:shadow-2xl'>
                <img src={dataInsight.image} alt='img' className='w-[500px] h-[100px] my-2'/>
              <h3 className=' text-xl'>{dataInsight.title}</h3>
              <p className='text-gray-400'>{dataInsight.description}</p>
        </div>
      )
    
  return (
  <div className="">
    <div className='w-10/12 m-auto text-center'>
        <h1 className="font-semibold text-2xl mb-4">Data & Insights</h1>
        <div className="grid md:grid-cols-4 gap-4">
            {dataInsightComp}
        </div>
        <button className='bg-blue-300 text-blue-950 p-4 md:px-16 my-4'>
          See more 
        </button>
    </div>
    
   <div className="w-9/12 m-auto">
     <div className="Discover flex justify-items-center text-white">
      <div className="w-8/12 m-auto">
       <div className="flex justify-center">
         <img src='/logo.png' alt='img' width='100px' />
       </div>
        <div className="text-center">
          <h2 className='text-3xl md:text-4xl my-3'>
            Discover Your Support Network and Connect with Fellow Moms in Our Community
          </h2>
          <button className='bg-blue-950 text-white uppercase px-8 py-2 rounded-2xl'>
            <a>
              Join the Community
            </a>
          </button>
        </div>
      </div>
     </div>
   </div>
  </div>
  )
}

export default Data