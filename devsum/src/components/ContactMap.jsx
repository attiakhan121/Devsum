
import {motion} from 'framer-motion';


const ContactMap = () =>{
    return (
        <motion.div
        whileHover={{
            y:-10,
            transition: { duration: 0.15, ease: "easeOut" }
        
       }}
        
        
        className='w-full md:w-1/2 p-6 bg-[#002148] shadow-lg rounded-2xl'
            >
            <h2 className='text-3xl font-bold text-white-800 text-center border-b pb-4 mb-4'>Our Location</h2>
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "66.25%" }}>
            <iframe 
            title='Devsum Location'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7696.642025051624!2d73.12336646631252!3d33.621191802110495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb72fc856f75%3A0xe5512daf2fdd43aa!2sGhauri%20Town%20Phase%20I%20Ghauri%20Town%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1753803488101!5m2!1sen!2s" 
            width="100%" 
            height="100%"
            style={{border:0}} 
            allowFullScreen=""
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
        
        </motion.div>
    )
}
export default ContactMap;