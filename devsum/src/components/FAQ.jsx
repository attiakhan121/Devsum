import React, {useState} from 'react';

const faqs=[
    {
        question:"Where is your office located?",
        answer:"We are located in Ghauri Town  Phase 1 Islamabad"
    },
    {
        question:"How can I apply for Internship?",
        answer:"Visit our Careers page or email your CV to careers@devsum.pk"
    },
    {
        question:"What courses do you offer?",
        answer:"We primarily offers Frontend, Backend, UI/UX design"
    },
]
const FAQ = () =>{
    const [openIndex,setOpenIndex] = useState(0);
    const toggle = (index) =>{
        setOpenIndex(openIndex === index ? null:index)
    };
    return (
        <div className='bg-[#021322] p-6 rounded-2xl shadow-lg w-full mx-auto my-10'>
            <h2 className='text-3xl font-bold text-white-600 text-center mb-6 border-b pb-2'>Frequently Asked Questions</h2>

            {faqs.map((faq,index)=>(
                <div key={index} className="mb-4 border-b">
                    <button
                    className='flex justify-between w-full text-left font-medium text-lg py-3 text-gray-400'
                    onClick={()=>toggle(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="text-xl">{openIndex === index ? '-' : '+'}</span>

                    </button>
                    {openIndex === index && (
                      <p className="text-gray-600 pb-4">{faq.answer}</p>
                      )}

                </div>
            ))}
            
        </div>
    );
};
export default FAQ;