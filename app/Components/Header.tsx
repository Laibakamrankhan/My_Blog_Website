import React from 'react'
import { IoLogoStencil } from "react-icons/io5";
import Link from "next/link"

const Header = () => {
  return (
    <div>
      <header className="text-[#185519] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-[#185519] mb-4 md:mb-0">
    <IoLogoStencil className='w-10 h-10'  /> 
      <span className="ml-3 text-xl">My Blogs </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium bg-[#185519] text-white h-8 w-80 rounded-md">
      <Link href="/"  className="mr-5 hover hover:underline cursor-pointer">Home</Link>
      <Link href="/Blogs"  className="mr-5  hover hover:underline cursor-pointer">Blog</Link>
      <Link href="/"  className="mr-5  hover hover:underline cursor-pointer">Contact Us</Link>
      
    </nav>
    <button className="inline-flex items-center hover:bg-[#355F2E] border-0 py-1 px-3 focus:outline-none bg-[#A8CD89] rounded text-base mt-4 md:mt-0 text-black">Login
     </button>
  </div>
</header>
    </div>
  )
}

export default Header
