import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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

          <SocialIcon
            url="https://www.instagram.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
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
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:flex text-sm text-white">
            Get In Touch
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>
            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>
            <Link href="#skill">
              <button className="heroButton">Skill</button>
            </Link>
            <Link href="#project">
              <button className="heroButton">Projects</button>
            </Link>
            <Link href="#Contact">
              <button className="heroButton">Contact</button>
            </Link>
          </p>
          <div className="md:hidden text-white">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </motion.div>
    </header>
  );
}
