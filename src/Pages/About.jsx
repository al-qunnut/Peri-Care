import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'


const About = () => {
  return (
    <div>
      <Navigation />
      <div className="w-10/12 m-auto">

          <div className='text-center bg-blue-50 p-4 md:p-12 my-8'>
          <h1 className='text-3xl md:text-4xl font-bold my-2'>About</h1>
          <span className='text-gray-500'>
          <p>
            PeriCare is a comprehensive online platform dedicated to overcoming perinatal health challenges. It connects women with medical professionals, providing easy access to expert care throughout pregnancy and the postpartum period. 
           The platform fosters a supportive community where women can engage with peers facing similar experiences, either anonymously or through direct contact. This network encourages sharing and support, making it easier to navigate the emotional and physical challenges of the perinatal phase.
           </p>
           <br/>
           <br/>
           <p>
           PeriCare also prioritizes education, offering resources to help families understand and manage perinatal health effectively. With a dedicated WhatsApp community, users can freely discuss their concerns and share experiences without any listing, ensuring a safe and welcoming space for open dialogue. 
           Together, these features empower women and their families to take charge of their perinatal health, fostering a healthier, more supportive environment.
           </p>
          </span>
          </div>



          <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="">
          <h2 className='text-2xl font-semibold my-2'>Mission</h2>
          <p className='text-gray-500'>
          At PeriCare, our mission is to empower women and their families during the perinatal journey by providing accessible professional healthcare, fostering supportive community connections, and offering comprehensive educational resources. We are dedicated to enhancing perinatal health and well-being through compassionate care and shared experiences.
          </p>
          </div>
          <div className="">
          <h2 className='text-2xl font-semibold my-2'>Vission</h2>
          <p className='text-gray-500'>
          Our vision is to create a world where every woman and family navigates the perinatal period with confidence and support. We envision a future where accessible healthcare, strong community bonds, and informed decision-making ensure optimal health outcomes for mothers and their babies, paving the way for a thriving generation.
          </p>
          </div>
          </div>
          
      </div>
      <Footer/>
    </div>
  )
}

export default About