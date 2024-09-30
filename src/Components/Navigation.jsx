import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import { navLinks } from '../Components/CompJav.js'

const Navigation = () => {
  const navigation = navLinks.map(navLink => 
                          <li key={navLink.id}
                              className='text-blue-800 font-semibold list-none my-6 
                                         uppercase border-b-2 md:border-none active:opacity-5 
                                         hover:underline transition-0.5s text-xl'>
                                <Link to={navLink.to}>
                                  { navLink.name}
                                </Link>
                          </li>
                        )

  const [openMenu, setOpenMenu] = useState('true')

  const handleMenu = () => {
    setOpenMenu((prev) => !(prev))
  }

  return (
    <div className='w-10/12 m-auto'>

        <div className="Desktop_Nav hidden md:block">
            <div className="flex justify-between">
              <img src= '/logo.png' alt='img' className='w-[100px]'/>
                <ul className="flex justify-between gap-4">
                  {navigation}
                </ul>
            </div>
         </div>
         

        <div className="Mobile_Nav md:hidden">
         <div className="flex justify-between">
           <img src= '/logo.png' alt='img' className='w-[110px] mb-4'/>
             <button onClick={handleMenu}>
               {openMenu ? (<IoMenu size={35}/>): (<IoMenu size={35}/>)}
             </button>
           </div>
           <div className="">
              {openMenu && <ul className=" my-8 gap-8 bg-blue-500 bg-opacity-75 h-[80vh] w-[100vw] absolute z-20 left-0 p-4 ">
                              {navigation}
                           </ul>}
             </div>
        </div>
    </div>
  )
}

export default Navigation