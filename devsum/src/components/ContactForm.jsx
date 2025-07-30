import React,{ useState } from 'react';
import {MapPin, Mail, Phone, Clock} from 'lucide-react';
import { Rocket } from "lucide-react";

const ContactForm = () =>{
    const [form,setForm] = useState({
        name:'',
        email:'',
        phone:'',
        company:'',
        inquiryType:'',
        subject:'',
        message:''
    });
    const [errors,setErrors] =useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e)=>{
        // setForm({ ...form, [e.target.name]: e.target.value });
        const {name,value}=e.target;
        setForm((prev)=>({...prev, [name]: value}));
        if(errors[name]){
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    const validate = () =>{
        const newErrors ={};
        if(!form.name) newErrors.name="Full name is required";
        if (!form.email) newErrors.email="Email is required";
        if(!form.inquiryType) newErrors.inquiryType="Select an inquiry type";
        if (!form.subject) newErrors.subject="Subject is required";
        if(!form.message) newErrors.message="Message is required";
        return newErrors;
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationErrors=validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors)
            setSuccessMessage(''); 
        } 
        else{
            setErrors({});
            setSuccessMessage("Your message has been sent successfully!");

            setForm({
                name:'',
                email:'',
                phone:'',
                company:'',
                inquiryType:'',
                subject:'',
                message:'',
            });
        }

    };
    return (
        <section className='py-12 px-4 md:px-20'>
              <div className="flex flex-col md:flex-row bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden">

            {/* left side bg-[#0f2338]*/}
            <div className='md:w-[30%] bg-gradient-to-b bg-[#0f2338] p-6 flex flex-col justify-center items-start space-y-6 '>
            <div className="flex items-center gap-2">
            <Rocket className="text-white" size={20} />
            <h2 className="text-3xl font-bold text-white">Why Devsum?</h2>
            </div>
            <p className="text-sm italic">"At Devsum, we believe in building future-ready talent through real-world experiences."</p>
            <p className="text-sm italic">"Empowering developers to turn ideas into impact."</p>
           <p className="text-sm italic">"Innovation, Collaboration, Excellence — That’s Devsum."</p>
            </div>
            {/* right side */}
            <div className='md:w-[70%] p-6 md:p-10 bg-[#021322]'>
            <h2 className='text-3xl font-bold mb-6 text-white-800'>Contact <span className="text-orange-600">DEVSUM</span></h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                {/* name */}
                <div className="flex flex-col md:flex-row gap-6">

                <div className='w-full'>
                    <label className="block font-medium">Full Name</label>
                    <input 
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    className='w-full p-2 mt-1 border rounded-md'
                    type='text'
                    placeholder="Your full name"
                     />
                     {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                </div>
                {/* Email */}
                <div className='w-full'>
                    <label className="block font-medium">Email Address</label>
                    <input 
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    className='w-full p-2 mt-1 border rounded-md'
                    type='email'
                    placeholder="your@gmail.com"
                     />
                     {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                </div>
                </div>
                {/* phone */}
              <div className="flex flex-col md:flex-row gap-6">

                 <div className='w-full'>
                    <label className="block font-medium">Phone Number</label>
                    <input 
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    className='w-full p-2 mt-1 border rounded-md'
                    type='tel'
                    placeholder="+92 383 7834461"
                     />
                </div>
                {/* company */}
                 <div className='w-full'> 
                    <label className="block font-medium">Company / Organization</label>
                    <input 
                    name='company'
                    value={form.company}
                    onChange={handleChange}
                    className='w-full p-2 mt-1 border rounded-md'
                    type='text'
                    placeholder="Your company name (optional)"
                     />
                </div>
                </div>
                {/* inquirytype */}
             <div className="flex flex-col md:flex-row gap-6">

                <div className='w-full'>

                    <label className='block font-medium'>Type of Inquiry</label>
                    <select
                     name="inquiryType" 
                     value={form.inquiryType}
                     onChange={handleChange}
                     className=' text-white bg-[#021322] w-full p-2 mt-1 border rounded-md'
                     >
                        <option value="">--Select--</option>
                        <option value="IT Services">IT Services</option>
                        <option value="Training Program">Training Program</option>
                        <option value="Internship">Internship</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                     </select>
                     {errors.inquiryType && <p className='text-red-500 text-sm'>{errors.inquiryType}</p>}
                </div>
                 {/* Subject */}
                <div className='w-full'>
                    <label className="block font-medium">Subject *</label>
                    <input
                     name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border rounded-md"
                    type="text"
                    placeholder="E.g. Need MERN Stack Training"
                    />
                    {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                 </div>
                  {/* Message */}
                  </div>
        <div className='w-full'>
          <label className="block font-medium">Message *</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-2 mt-1 border rounded-md"
            placeholder="Describe your project, question, or request..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

           {/* Submit */}
           <div className='flex justify-center mt-6"'>
        <button
          type="submit"
          className="text-center bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-800 transition"
        >
          Send Message
        </button>
        </div>
        {successMessage && (
         <p className="mt-4 text-green-700 bg-gray-100 border border-gray-400 px-4 py-2 rounded-md">
       {successMessage}
       </p>
        )}
        </form>
        </div>
        </div>
        </section>
    );
};
export default ContactForm;