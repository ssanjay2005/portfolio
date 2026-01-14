"use client";
import  {useRouter} from 'next/navigation';
export default function Navbar() { 
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
    return(

          <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <div className="
    flex items-center gap-10
    px-10 py-4
    bg-[#141414]/80 backdrop-blur-md
    border border-[#2A2A2A]
    rounded-xl
  ">
    <ul className='list-none'> <li>
    <button
      type="button" onClick={home}
      className="
     text-[#D6C1A3] text-xl font-semibold tracking-wide 
      "
    >Sanjay</button>
  </li></ul>
   

    {/* Nav Links */}
   <ul className="flex gap-8 text-sm uppercase tracking-widest text-[#8E8577]">
  <li>
    <button
      type="button" onClick={project}
      className="
        uppercase
        tracking-widest
        text-sm
        hover:text-[#D6C1A3]
        transition
      "
    >
      Project
    </button>
  </li>

  <li>
    <button
      type="button" onClick={about}
      className="
        uppercase
        tracking-widest
        text-sm
        hover:text-[#D6C1A3]
        transition
      "
    >
      About
    </button>
  </li>
</ul>


    {/* CTA Button */}
    <button onClick={contact} className="
      ml-4 px-6 py-2
      bg-[#D6C1A3]
      text-[#0B0B0B]
      text-sm uppercase tracking-widest
      rounded-md
      hover:bg-[#CBB08F]
      transition
    ">
      Contact 
    </button>
  </div>
</nav>
    )
 }
 