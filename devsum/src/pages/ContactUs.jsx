import React from 'react';
import {motion} from "framer-motion";
import Highlights from '../components/Highlights';
import StatsBar from '../components/StatsBar';
import ContactForm from '../components/ContactForm';
import TestimonialSection from '../components/TestimonialSection';
import ContactInfo from '../components/ContactInfo';
import ContactMap from '../components/ContactMap';
import FAQ from '../components/FAQ';
const ContactUs = ()=>{
    return (
        <section className='bg-[#0b1c2d] min-h-screen text-white px-4 py-16 md:px-20 '>
            <div className='text-center max-w-3xl mx-auto'>
                <motion.h1
                 className="text-4xl md:text-5xl font-extrabold mb-4"
                 initial={{ opacity: 0, y: -30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6 }}
                >
                    Get in <span className="text-orange-600">Touch</span> with Us
                </motion.h1>
                 <motion.p
          className="text-lg text-[#959cb1] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Have questions, feedback, or opportunities to discuss? We’re all ears.
          Our team is ready to connect with you and help you move forward.
        </motion.p>
            </div>
            
              <Highlights />
              <StatsBar/>
              <ContactForm/>
              <TestimonialSection/>
              <div className="flex flex-col md:flex-row gap-8 px-6 py-12">
              <ContactInfo />
              <ContactMap />
              </div>
              <FAQ/>
              

        </section>
        
    )
}
export default ContactUs;