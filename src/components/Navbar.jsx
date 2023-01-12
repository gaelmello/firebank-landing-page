import React from 'react'
import { useState } from 'react'
import { navLinks } from '../constants'
import logo from '../assets/logo.svg'
import MobileMenu from './MobileMenu'


const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">

            <img src={logo} alt="FireBank"  className='w-[300px] h-[32px]'/>

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>

                {navLinks.map((nav, index) => (
                    <li
                        key={nav.id}
                        className={`font-poppins font-normal cursor-pointer text-[16px] text-white hover:text-yellow-400

                        ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`} /* Applies the margin to all navbar menu items. The margin will not be applied only to the last navbar menu item */
                    >   
                        <a href={`#${nav.id}`}> {nav.title} </a>
                    </li>
                ))}

            </ul>
            
            {/*mobile navigation menu*/}
            <div className="sm:hidden flex flex-1 justify-end  items-center z-10">

                <button alt="menu" 
                    className='text-white text-xl'
                    onClick={() => setToggle(!toggle)}
                    >

                    <MobileMenu toggle={toggle}/>
                    
                </button>

                <div
                    className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex justify-end items-start flex-1 flex-col'>

                        {navLinks.map((nav, index) => (

                            <li
                                key={nav.id}
                                className={`font-poppins font-medium cursor-pointer text-[16px] text-white
                                
                                ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`} /* Applies the margin to all navbar menu items. The margin will not be applied only to the last navbar menu item */
                                >   
                                    <a href={`#${nav.id}`}> {nav.title} </a>
                            
                            </li>
                        ))}

                    </ul>
                    
                </div>

            </div>

        </nav>
    )
}

export default Navbar