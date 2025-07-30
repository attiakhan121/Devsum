import {Mail,Phone,MapPin,Clock} from 'lucide-react';

const ContactInfo = () =>{
    return (
        <div className='w-full md:w-1/2 p-6 bg-[#021322] shadow-lg rounded-2xl space-y-6'>
            <h2 className='text-3xl font-bold text-center text-white-800 border-b pb-4'>Reach Out</h2>

            <div className='flex items-start gap-4'>
                <MapPin className='text-orange-600 mt-1'/>
                <div>
                    <p className='text-gray-300 font-semibold'>Address</p>
                    <p className='text-gray-400'>Ghauri Town Islamabad Phase-1</p>

                </div>
            </div>

            <div className='flex items-start gap-4'>
                <Mail className='text-orange-600 mt-1'/>
                <div>
                    <p className='text-gray-300 font-semibold'>Email</p>
                    <p className='text-gray-400'>infodevsum@gmail.com</p>
                    <p className='text-gray-400'>devsumhr@gmail.com</p>

                </div>
            </div>

            <div className='flex items-start gap-4'>
                <Phone className='text-orange-600 mt-1'/>
                <div>
                    <p className='text-gray-300 font-semibold'>Phone</p>
                    <p className='text-gray-400'>+923301963038</p>

                </div>
            </div>

             <div className='flex items-start gap-4'>
                <Clock className='text-orange-600 mt-1'/>
                <div>
                    <p className='text-gray-300 font-semibold'>Working Hours</p>
                    <p className='text-gray-400'>24/7</p>
                    <p className='text-gray-400'>Sat & Sun - Off</p>

                </div>
            </div>

        </div>
    )
}
export default ContactInfo;