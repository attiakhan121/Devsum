import React, {useState} from 'react';

const faqs=[
    {
        question:"Where is your office located?",
        answer:"We are located in Ghauri Town, Phase 1 Islamabad."
    },
    {
        question:"How can I apply for an Internship?",
        answer:"Visit our Careers page or email your CV to devsumhr@gmail.com."
    },
    {
        question:"What IT courses and training programs does Devsum offer?",
        answer:"We provide expert-led training in Frontend, Backend, Full Stack Development, UI/UX design, E-commerce, Digital Marketing, and Video Editing."
    },
    {
        question:"What type of software solutions do you provide?",
        answer:"We specialize in custom software development,web and mobile apps, and enterprise solutions tailored to our business needs."
    },
    {
        question:"Who are the instructors for the IT courses?",
        answer:"All our courses are taught by industry professionals with real world project experience."
    },
]
const FAQ = () =>{
    const [openIndex,setOpenIndex] = useState(0);
    const toggle = (index) =>{
        setOpenIndex(openIndex === index ? null:index)
    };
    return (
        <div className='bg-[#002147] p-6 rounded-2xl shadow-lg w-full mx-auto my-10'>
            <h2 className='text-3xl font-bold text-white-600 text-center mb-6 border-b pb-2'>Frequently Asked Questions</h2>

            {faqs.map((faq,index)=>(
                <div key={index} className="mb-4 border-b">
                    <button
                    className='flex justify-between w-full text-left font-medium text-lg py-3 text-gray-300'
                    onClick={()=>toggle(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">{openIndex === index ? '-' : '+'}</span>

                    </button>
                    {openIndex === index && (
                      <p className="text-gray-400 pb-4">{faq.answer}</p>
                      )}

                </div>
            ))}
            
        </div>
    );
};
export default FAQ;