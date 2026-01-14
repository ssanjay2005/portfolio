"use client";
import  {useRouter} from 'next/navigation';
import { Menu, X } from "lucide-react";
import { useState } from "react";


export function MobileNav() {
  const [open, setOpen] = useState(false);
      const router = useRouter();
       
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

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden w-[92%]">
      <div className="
        flex items-center justify-between
        px-5 py-4
        bg-[#141414]/90 backdrop-blur-md
        border border-[#2A2A2A]
        rounded-xl
      ">
        <span className="text-[#D6C1A3] font-semibold text-lg">
          Sanjay
        </span>

        <button onClick={() => setOpen(!open)} className="text-[#D6C1A3]">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="
          mt-3
          bg-[#141414]/95
          border border-[#2A2A2A]
          rounded-xl
          px-6 py-6
        ">
          <ul className="flex flex-col gap-6 text-center uppercase tracking-widest text-sm text-[#8E8577]">
            <li>
              <button onClick={() => { home(); setOpen(false); }}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => { project(); setOpen(false); }}>
                Project
              </button>
            </li>
            <li>
              <button onClick={() => { about(); setOpen(false); }}>
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => { contact(); setOpen(false); }}
                className="mt-4 bg-[#D6C1A3] text-black py-3 rounded-md"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
