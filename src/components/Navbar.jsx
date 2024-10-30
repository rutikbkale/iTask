import React from "react";
import { SiGoogletasks } from "react-icons/si";

export default function Navbar() {
  return (
    <nav className="flex justify-around py-2 bg-violet-800 text-white">
      <div className="brand text-2xl font-bold flex justify-center">
        <SiGoogletasks className="text-4xl" />
        &nbsp; iTask
      </div>
      <ul className="flex gap-7">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">About us</li>
        <li className="cursor-pointer">All task</li>
      </ul>
    </nav>
  );
}
