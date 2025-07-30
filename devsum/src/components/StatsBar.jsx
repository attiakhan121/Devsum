import  React from 'react';
import {motion} from 'framer-motion';

const stats=[
    {
        label: 'Years of Excellence', value: '10+', highlight: 'Impact' 
    },
    {
        label: 'Projects Delivered', value: '400+'
    },
    {
        label:'Professionals', value:'200+'
    },
    {
        label:'Countries served', value:'10+'
    }
];
const StatsBar = () =>{
    return (
        <section className='bg-[#021322] py-7 rounded-2xl shadow-lg px-6 mt-16'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-1'>
                
                <motion.h3
                initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className=" text-2xl md:text-3xl font-bold text-white-800 "
                
                >
                    Our Global <span className="text-orange-600">Impact</span>
                </motion.h3>
                <div className='flex flex-wrap items-center justify-center gap-6'>
                    {stats.map((item,index)=>(
                        <motion.div
                        key={index}
                        initial={{opacity:0, y:20}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className=" shadow-md rounded-xl p-6 text-center hover:shadow-lg transition"
                        >
                             <div className="text-3xl font-bold text-white-600 mb-2">{item.value}</div>
                            <div className="text-gray-700 text-sm font-medium">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default StatsBar;