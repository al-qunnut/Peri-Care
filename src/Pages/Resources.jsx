import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { details } from '../Components/CompJav'
import { dataInsights } from '../Components/CompJav'

const Resources = () => {
  const detailComponent = details.map(detail => 
    <div key={detail.id}
        className='p-2'>
          <h2 className='text-2xl'>{detail.summary}</h2>
          <p className='text-gray-400 text-xl'>{detail.description}</p>
    </div>
  )

  const dataInsightComp = dataInsights.map(dataInsight => 
    <div key={dataInsight.id}
        className='bg-white p-4 my-4 border shadow-md hover:shadow-2xl'>
            <img src={dataInsight.image} alt='img' className='w-[500px] h-[100px] my-2'/>
          <h3 className=' text-xl'>{dataInsight.title}</h3>
          <p className='text-gray-400'>{dataInsight.description}</p>
    </div>
  )
  return (
    <div>
     <Navigation/>
     <div className="w-10/12 m-auto ">
     <h2 className='text-4xl text-center font-semibold my-4'>Resources</h2>
      <div className="my-8">
       {detailComponent}
      </div>
     </div>

     <div className="bg-blue-200 my-4">
     <h1 className='text-4xl text-center font-semibold my-4'>Statistics</h1>
      <div className="grid md:grid-cols-4 gap-4 w-10/12 m-auto">
            {dataInsightComp}
        </div>
     </div>
     <Footer />

    </div>
  )
}

export default Resources