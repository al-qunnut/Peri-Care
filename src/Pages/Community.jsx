import React from 'react'
import { useState } from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import { communityGuidelines } from '../Components/CompJav.js'

const initialState = {
  name: '',
  phone: '',
  gender: '',
  topic: '',
  message: '',
}
const Community = () => {
  const guidelines = communityGuidelines.map(communityGuideline =>
    <li key={communityGuideline.id}  className='list-disc'>
      <h1 className='text-xl font-semibold'>{communityGuideline.title}</h1> 
      <span>{communityGuideline.description}</span>
    </li>
  )

  const [change, setChange] = useState(initialState);

  const { name, phone, gender, topic, message } = change

 const handleOnChange = (e) => {
  setChange({ ...change, [e.target.name]: e.target.value})
 }

 const submission = () =>{
   setChange({
    name: "",
    phone: "",
    gender: "",
    topic: "",
    message: "",
   })
 }
 const [sucessful, setSuccessful] = useState(false);
 const [loading, setLoading] = useState(false);

  const handleSubmission = (e) => {
    e.preventDefault()
    
    submission()
    console.log(change)

    setLoading(true);

    setTimeout(() => {
      setSuccessful(true);
      setLoading(false);
   
    setTimeout(() => {
      setSuccessful(false);
    }, 5000);
  }, 5000);
  }
  

  return (
    <div className=''>
      <div className="Commun mb-8">
       <Navigation />
       <div className="absolute top-[35%]">
      <div className="w-10/12 m-auto text-white text-center">
     <h1 className='text-3xl md:text-5xl py-2'>Discover Your Support Network and Connect with Fellow Moms in Our Community</h1>
      <button className='px-8 py-2 bg-blue-950 text-white rounded-2xl active:bg-blue-400 shadow-md text-xl '>
        <a href='https://chat.whatsapp.com/FUQxCbwZBX0GZvNrwRceDY'>
          Join the whatsapp community
        </a>
      </button>
      </div>
     </div>
      </div>

      <div className="w-10/12 m-auto">
        <div className="bg-gray-100 my-8 py-8">
          <h1 className='text-center text-2xl md:text-4xl font-bold'>Community Guidelines</h1>
          <ul className='p-8 px-16'>
            {guidelines}
          </ul>
        </div>
      </div>

      <div className="w-10/12 m-auto">
        <h1 className='text-center text-3xl'>Community Concerns</h1>
        <p className='text-center text-gray-500'>For Community Concerns, please leave a message</p>
        <form className='my-16' onSubmit={handleSubmission}>
          <div className="grid md:grid-cols-2 gap-4 my-6">
         <div className="">
         <label htmlFor='name'>Name:</label>
          <input type='text' name='name' 
                 id='name'
                 placeholder='Please enter your name' 
                 onChange={handleOnChange} 
                 value={name}
                 className='p-2 border my-2 w-full' 
                 required/>
         </div>
         <div className="">
         <label htmlFor='phone'>Phone Number</label>
          <input type='number' name='phone' 
          id='phone'
                 placeholder='Please enter a phone number' 
                 onChange={handleOnChange} 
                 value={phone}
                 className='p-2 border my-2 w-full' 
                 required/>
         </div>
         <div className="">
         <label htmlFor='gender'>Gender</label>
          <select name='gender' required onChange={handleOnChange} value={gender}  className='w-full border p-2 my-2'>
            <option value=''>Select a gender</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='prefer not to say'>Prefer not to say</option>
          </select>
         </div>
         <div className="">
         <label htmlFor='topic'>Topic</label>
          <input type='text' name='topic' 
          id='message'
                 placeholder='Enter a topic(Concern)' 
                 onChange={handleOnChange} 
                 value={topic}
                 className='p-2 my-2 border w-full' 
                 required/>
         </div>
         </div>
         <div className="">
         <label htmlFor='message'>Message</label>
          <textarea type='text' name='message' 
          id='message'
                 placeholder='Leave your message' 
                 onChange={handleOnChange} 
                 value={message}
                 className='p-2 my-2 border w-full'
                 rows={10} 
                 cols={10}
                 required/>
         </div>

          <div className="">
              {
                sucessful && (
                  <div className=' w-full p-4 my-4 text-center text-xl text-white bg-blue-950 shadow-lg'>
                  Your message was successfully sent!✔
                  </div>
                )
              }
            </div>
            
            <button 
              className='bg-blue-500 text-white p-2 rounded-md my-4 w-full md:w-4/12  active:bg-blue-950 shadow-lg'
              type='submit'
              disabled = {loading}
            >
                 { loading ? 'Sending...' : 'Send'} 
            </button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Community