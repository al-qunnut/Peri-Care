import React from 'react'
import logo from '../assets/logo.png'
import { navLinks } from './CompJav';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const today = new Date();

  const navigation = navLinks.map(navLink => 
    <li key={navLink.id}
        className='text-white list-none my-2 
                   uppercase pb-1  active:opacity-5 
                   hover:underline transition-0.5s text-xl'>
          <Link to={navLink.to}>
            { navLink.name}
          </Link>
    </li>
  )

  return (
    <div className="">
    <div className='Footer_img'>
      <div className="w-10/12 m-auto  text-white">
        <div className="grid md:grid-cols-3 py-8 gap-8">
           <div className="">
            <img src={logo} alt='img' className='w-[100px]'/>
            <h2 className='text-xl md:text-2xl font-bold py-2'>Empowering Parents, Enriching Families</h2>
            <p>Building resilience, one family at a time.</p>
            <button className='bg-blue-400 text-blue-950 p-3 
            px-8 rounded-full font-semibold hover:text-blue-600 hover:bg-blue-950 my-2'>
              <a href='../Pages/Support.jsx'>
                Get Support
              </a>
            </button>
           </div>
           
           <div className="">
            <h2 className='text-2xl underline py-2'>Useful Links</h2>
            <ul>
              {navigation}
            </ul>
           </div>
           <div className="text-2xl">
          <h2> Discover Your Support Network and Connect with Fellow Moms in Our Community</h2>
           <button className='bg-blue-950 text-blue-400 py-3 text-xl
            px-5 rounded-full font-semibold hover:text-blue-950 hover:bg-blue-400 my-2'>
            <a href='../Pages/Community.jsx'>
              Join Our Community
            </a>
           </button>
           <div className="flex gap-2  justify-between my-2">
            <a href='https://www.facebook.com'>
            <FaFacebookF />
            </a>
            <a href='https://www.whatsapp.com/'>
            <FaWhatsapp />
            </a>
            <a href='https://www.twitter.com/'>
            <FaTwitter />
            </a>
            <a href='https://www.instagram.com/'>
            <FaInstagram />
            </a>
           </div>
           </div>
        </div>
      </div>
      </div>
      <div className="bg-blue-950 text-white md:text-xl text-center">
        ALL RIGHTS RESERVED  &copy; PERICARE {today.getFullYear()}
      </div>
    </div>
  )
}

export default Footer