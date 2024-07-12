import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className='w-full h-20 bg-gray-300 bg-opacity-50 backdrop-blur-sm flex items-center justify-between px-10 border-b-[1px] border-gray-800'>
            <div className="logo text-4xl font-bold text-blue-900">
                <h1>Snip_Cart</h1>
            </div>
            <div className="nanOptions px-5 ">
                <ul className="flex gap-6 h-11 text-[1.7rem] font-semibold whitespace-nowrap">
                    {["HOME", "CART" , "LOGIN", "SIGN-UP"].map((item, index) => (
                        <div className={`w-[6.5rem] text-center  ${index === 1 && "mr-[15rem]"} `} key={index}>
                            <li className={`hover:text-blue-900 hover:font-bold hover:-translate-y-[0.2rem] hover:text-[1.8rem]`} >
                                <NavLink
                                    className={({isActive}) => `${isActive ? "text-blue-900" : null}`}
                                    to={`${item === "HOME" ? `/` : `/${item.toLowerCase()}`}`}>
                                    {item}
                                </NavLink>
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
