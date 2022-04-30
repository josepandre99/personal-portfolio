import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import NodeJS from '../assets/node.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import C from '../assets/c.png'
import CPP from '../assets/cpp.png'
import Python from '../assets/python.png'
import CSharp from '../assets/csharp.png'
import PHP from '../assets/php.png'
import Java from '../assets/java.png'
import Mysql from '../assets/mysql.png'
import Postgresql from '../assets/postgresql.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-5 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={HTML} alt='HTML icon' />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={CSS} alt='CSS icon' />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={JavaScript} alt='JavaScript icon' />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={C} alt='C icon' />
                        <p className='my-4'>C</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={CPP} alt='C++ icon' />
                        <p className='my-4'>C++</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={CSharp} alt='C# icon' />
                        <p className='my-4'>C#</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={Java} alt='Java icon' />
                        <p className='my-4'>Java</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={Python} alt='Python icon' />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={PHP} alt='PHP icon' />
                        <p className='my-4'>PHP</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={ReactImg} alt='React icon' />
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={Github} alt='Github icon' />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={NodeJS} alt='NodeJS icon' />
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={Tailwind} alt='Tailwind icon' />
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12  mx-auto pt-4' src={Mysql} alt='Mysql icon' />
                        <p className='my-4 '>Mysql</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-12 mx-auto pt-4' src={Postgresql} alt='Postgresql icon' />
                        <p className='my-4'>Postgresql</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills