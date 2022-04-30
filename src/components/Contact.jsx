import React from 'react'
import { MdCalendarToday, MdLocationPin, MdMail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'


const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[800px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[800px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='items-center'>
                        <p className='text-xl font-bold'>Josep Andre Ginting</p>
                        <div className='flex items-center whitespace-pre'>
                            <MdCalendarToday size={15} />
                            <p className='font-bold'>  Date of birth : </p>
                            <p> 19 September 1999</p>
                        </div>
                        <div className='lg:flex items-center whitespace-pre'>
                            <div className='flex items-center'>
                                <MdLocationPin size={15} />
                                <p className='font-bold'>  Location : </p>
                            </div>
                            <p>Berastagi, Sumatera Utara, Indonesia</p>
                        </div>
                    </div>
                    <div className='items-center'>
                        <div className='items-center'>
                            <div className='flex items-center whitespace-pre'>
                                <MdMail />
                                <p className='font-bold'>  Email : </p>
                            </div>
                            <ul className=''>
                                <li>josepandregintings@gmail.com</li>
                                <li>josepandreginting1999@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='max-w-[800px] w-full px-4 flex py-12 space-x-6'>
                    <a className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-facebook-f bg-blue-600' href='https://www.linkedin.com/in/josepandreginting/' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30} />
                    </a>
                    <a className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fas fill-current text-white text-xl fa-envelope bg-[#333333]' href='https://github.com/josepandre99' target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={30} />
                    </a>
                    <a className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-mail bg-[#6fc260]' href='mailto:josepandregintings@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <HiOutlineMail size={30} />
                    </a>
                    <a className='flex items-center justify-center h-12 w-12 mx-1 rounded-full fab fill-current text-white text-xl fa-instagram bg-[#e1306c]' href='https://www.instagram.com/josepandre99/' target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={30} />
                    </a>
                </div>
            </div>

        </div >
    )
}

export default Contact