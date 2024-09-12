import React from 'react';
import photo from "../images/photo.jpg"
import logo from "../images/Eatrylogo.svg"

function About() {
  return (
    <div  className='flex items-center justify-center min-h-screen from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
  <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
    <div className='max-w-md mx-auto space-y-6'>
      <img src={logo} className='h-8' />
      
      <h1 className="text-3xl font-bold mb-4">About Foodie Delights</h1>
      <p className="text-lg mb-4">Welcome to Foodie Delights, a leading online food delivery service dedicated to bringing the best culinary experiences to your doorstep.</p>

      <div className='text-base leading-7'>
        <p className='font-medium text-gray-700'>Our Story</p>
        <p>Foodie Delights was founded in 2020 by a team of food enthusiasts who wanted to revolutionize the way people order food online.</p>
      </div>

      <div className='text-base leading-7'>
        <p className='font-medium text-gray-700'>Our Mission</p>
        <p>Our mission is to provide high-quality food delivery services that meet the evolving tastes and preferences of our customers.</p>
        <ul className="list-disc ml-4 mb-4">
          <li>Partnering with top-rated restaurants to offer a diverse range of cuisines</li>
          <li>Fostering a culture of innovation and continuous improvement</li>
          <li>Building strong relationships with our customers, partners, and stakeholders</li>
        </ul>
      </div>

      <div className='text-base leading-7'>
        <p className='font-medium text-gray-700'>Our Team</p>
      </div>

      <div className="text-center grid grid-cols-2 gap-4 mb-4">
        
        <div>
        <img src={photo} alt="Kym Espiritu" className="h-24 w-24 rounded-full mb-2" style={{objectFit:"cover"}} />
          <h3 className="text-lg font-bold mb-1">Kym Espiritu, CTO</h3>
          <p className="text-lg mb-2">Tech expert with a focus on developing seamless user experiences.</p>
        </div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk1u_aMXT4Tt-cmiWwM6MJy5STlxBei7fgVw&s" alt="Kym Espiritu" className="h-24 w-24 rounded-full mb-2" style={{objectFit:"cover"}} />
          <h3 className="text-lg font-bold mb-1">Mosh hamedani, CTO</h3>
          <p className="text-lg mb-2">Tech expert with a focus on developing seamless user experiences. pragmatic software engineer specializing in web application development with ASP.NET MVC, Web API, Entity Framework, Angular, Backbone, HTML5, and CSS</p>
        </div>
        
      </div>

      <h2 className="text-2xl font-bold mb-2">What We Offer</h2>
      <p className="text-lg mb-4">We specialize in food delivery services, offering a range of cuisines that cater to the diverse tastes of our customers. Our services include:</p>
      <ul className="list-disc ml-4 mb-4">
        <li>Food Delivery: Get your favorite food delivered to your doorstep</li>
        <li>Catering Services: Let us handle your catering needs for events and parties</li>
        <li>Meal Kits: Prepare delicious meals at home with our meal kits</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
      <p className="text-lg mb-4">Want to learn more about us or have a question? Contact us at [contact email] or [contact phone number]. You can also follow us on social media:</p>
      <ul className="list-none ml-4 mb-4">
        <li><a href="[Social media link 1]" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i> Facebook</a></li>
        <li><a href="[Social media link 2]" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a></li>
        <li><a href="[Social media link 3]" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
      </ul>      <a target='_blank' href='https://www.creative-tim.com/twcomponents' className='block w-full px-4 py-2 font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-teal-400 rounded-md hover:bg-teal-500 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
        Order Now →
      </a>
    </div>
  </div>
</div>
  );
}

export default About;