"use client";
import  {useRouter} from 'next/navigation';

import { useState } from 'react';
export default function Navbar() { 
    const router = useRouter();
     const [open, setOpen] = useState(false);
    const home = () => {
      router.push('/');
    }   
    const about = () => {
      router.push('/about');
    }
    const project = () => {
      router.push('/project');
    }   
    const contact = () => {     
        router.push('/contact');    
    }
    return(

         <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
  <div className="
    flex items-center gap-10
    px-10 py-4
    bg-[#141414]/80 backdrop-blur-md
    border border-[#2A2A2A]
    rounded-xl
  ">
    <ul className="list-none">
      <li>
        <button
          type="button"
          onClick={home}
          className="text-[#D6C1A3] text-xl font-semibold tracking-wide"
        >
          Sanjay
        </button>
      </li>
    </ul>

    <ul className="flex gap-8 text-sm uppercase tracking-widest text-[#8E8577]">
      <li>
        <button onClick={project} className="hover:text-[#D6C1A3] transition">
          Project
        </button>
      </li>
      <li>
        <button onClick={about} className="hover:text-[#D6C1A3] transition">
          About
        </button>
      </li>
    </ul>

    <button
      onClick={contact}
      className="
        ml-4 px-6 py-2
        bg-[#D6C1A3]
        text-[#0B0B0B]
        text-sm uppercase tracking-widest
        rounded-md
        hover:bg-[#CBB08F]
        transition
      "
    >
      Contact
    </button>
  </div>
</nav>

    )
 }
 