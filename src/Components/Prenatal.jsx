import React from 'react'
import {details} from './CompJav.js'

const Prenatal = () => {
  const detailComponent = details.map(detail => 
    <details key={detail.id}
        className='p-2'>
          <summary className=' text-xl'>{detail.summary}</summary>
          <p className='text-gray-400 text-xs'>{detail.description}</p>
    </details>
  )

  return (

    <div className=''>
       <div className="w-10/12 m-auto">
         <div className="grid md:grid-cols-3 my-8 gap-2">
          {detailComponent}
         </div>
       </div>
       
        <div className="bg-blue-400 text-blue-900 text-center m-8 p-8 md:p-16">
       <h1 className=' text-3xl font-semibold'>Perinatal Health</h1> 
       <p className='text-xl my-4'>Perinatal health is crucial for ensuring the well-being of both mother and baby during pregnancy, 
        childbirth, and the immediate postpartum period. It impacts immediate and long-term health outcomes, 
        including developmental growth and mental health, and helps prevent complications, making it 
         for overall family and community health.</p>
         </div>
    </div>
  )
}

export default Prenatal