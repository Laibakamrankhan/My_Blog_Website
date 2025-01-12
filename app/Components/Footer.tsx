import React from 'react'
import Link from "next/link"
import { IoLogoStencil } from "react-icons/io5";
import { FiFacebook} from "react-icons/fi";
import { CiTwitter  } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="text-[#185519] body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Link
          href="/"
          className="flex title-font font-medium items-center md:justify-start justify-center text-[#185519]"
        >
           <IoLogoStencil className='w-10 h-10'  /> 
          <span className="ml-3 text-xl">My Blogs</span>
        </Link>
        <p className="text-sm text-[#185519] sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-[#185519] sm:py-2 sm:mt-0 mt-4">
          © 2020 My Blogs —
          <a
            href="/"
            className="text-[#185519] ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @My_Blogs
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="/" className="text-[#185519]">
          <FiFacebook className='h-5 w-5' />
          </Link>
          <Link href="/" className="ml-3 text-[#185519]">
          <CiTwitter className='w-5 h-5' />
          </Link>
          <Link href="/" className="ml-3 text-[#185519]">
          <FaInstagram  className='h-5 w-5' />
          </Link>
          <Link href="/" className="ml-3 text-[#185519]">
          <CiLinkedin className='h-5 w-5' />
          </Link>
        </span>
      </div>
    </footer>
  );
};


export default Footer
