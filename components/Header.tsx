import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import NavLogo from "../public/assets/logo.svg";

type Props = {};

export default function Header({}: Props) {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
 
  return (
    <div>
      <header className="sticky top-0 flex justify-between max-w-7xl mx-auto z-20 xl:items-center">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center"
        >
          <div className="flex flex-row items-center">
            <SocialIcon
              url="https://github.com/michael07200"
              fgColor="white"
              bgColor="transparent"
            />

            <SocialIcon url="https://www.instagram.com/" fgColor="white" bgColor="transparent" />
          </div>
          <Link href="/">
            <Image src={NavLogo} alt="/" width="40" height="40" className="cursor-pointer" />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1 }}
          className="flex flex-row items-center"
        >
          <div className="flex flex-row items-center cursor-pointer">
            <ul className="uppercase hidden md:flex text-sm text-white">
              <Link href="#">
                <li className="heroButton">Home</li>
              </Link>
              <Link href="#about">
                <li className="heroButton">About</li>
              </Link>
              <Link href="#experience">
                <li className="heroButton">Experience</li>
              </Link>
              <Link href="#project">
                <li className="heroButton">Projects</li>
              </Link>
              <Link href="#Contact">
                <li className="heroButton">Contact</li>
              </Link>
            </ul>
            {/* Hamburger Icon */}
            <div onClick={handleNav} className="md:hidden text-white">
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f7f4ed] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="50" height="50" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-6">
              <p className="w-[85%] md:w-[90%] pb-4">Michael Tong Portfolio</p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#experience">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Experience
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <div className="flex items-center justify-between my-4 w-[80%] sm:w-[50%]">
                <a
                  href="https://www.linkedin.com/in/clint-briley-50056920a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href="https://github.com/fireclint" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
