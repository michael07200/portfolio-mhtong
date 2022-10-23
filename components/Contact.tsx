import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="title">Contact</h3>

      <div className="grid grid-cols-2 divide-x bg-[#62973D] w-full max-w-4xl p-8 rounded-xl shadow-lg space-y-6">
        <div className="flex flex-col justify-between">
          <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
          <p className="pt-2 text-cyan-100 text-sm">aaa</p>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-white h-7 w-7 animate-pulse" />
            <p className="text-white text-base">mickmhtong@gmail.com </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-white h-7 w-7 animate-pulse" />
            <p className="text-base"> mickmhtong@gmail.com </p>
          </div>
        </div>

        <form className="bg-white rounded-xl shadow-lg p-8 flex flex-col space-y-8 mx-auto">
          <input placeholder="Name" className="contactInput" type="text" />
          <input placeholder="Email" className="contactInput" type="text" />
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#62973D] py-2 px-10 rounded-md text-white font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
