import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["an Architect", "a Software Engineer", "a Front-end Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <h1>
        <p>
          I am Michael Tong, I am {text}
          <Cursor cursorColor="#F7AB0A" />
        </p>
      </h1>

      <div className="pt-5">
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
      </div>
    </div>
  );
}
