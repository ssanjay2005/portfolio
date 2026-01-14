
import { Playfair_Display, Inter } from "next/font/google";
import { ArrowDown,ArrowUpRight, Github,Instagram,Linkedin,Facebook } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});
const socials = [
  { name: "INSTAGRAM", icon: Instagram, href: "https://www.instagram.com/freak_of_master/" },
  { name: "GITHUB", icon: Github, href: "https://github.com/ssanjay2005" },
  { name: "FACEBOOK", icon: Facebook, href: "https://www.facebook.com/sanjays2005" },
  { name: "LINKEDIN", icon: Linkedin, href: "https://www.linkedin.com/in/sanjay2005/" },
];
export default function HeroAbout() {
  return (
   <section className="bg-[#0B0B0B] mt-30 md:mt-30 text-[#E6D8C3]">

  {/* HERO */}
  <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 text-center">

    {/* NAME */}
    <h1
      className={`
        ${playfair.className}
        text-4xl
        sm:text-5xl
        md:text-[clamp(3.5rem,6vw,5.5rem)]
        leading-tight
      `}
    >
      Sanjay S
    </h1>

    {/* SHORT INTRO */}
    <p
      className={`
        ${inter.className}
        mt-6
        text-[#A89274]
        text-base
        sm:text-lg
        max-w-sm sm:max-w-xl
      `}
    >
      A passionate web developer and Computer Science engineering
      student based in Chennai, India.
    </p>

    {/* ABOUT BUTTON */}
    <div className="flex items-center gap-3 mt-8 text-[#D6C1A3]">
      <div className="
        w-10 h-10 sm:w-12 sm:h-12
        rounded-full
        border border-[#2A2A2A]
        flex items-center justify-center
      ">
        <ArrowDown size={16} />
      </div>
      <span className="tracking-widest text-xs sm:text-sm">
        ABOUT ME
      </span>
    </div>

    {/* LONG ABOUT TEXT */}
    <div className="mt-10 max-w-full sm:max-w-3xl text-left">
      <p
        className={`
          ${inter.className}
          text-[#A89274]
          text-sm sm:text-base
          leading-relaxed
          bg-[#2B261E]
          p-4 sm:p-6
          rounded-lg
        `}
      >
        I have a strong foundation in Java programming and enjoy solving
        logical and algorithmic problems using Java. I focus on writing
        clean, structured code and understanding core programming concepts,
        especially Object-Oriented Programming (OOPS).
        <br /><br />
        Along with Java, I work with Python and modern web technologies like
        React, Tailwind CSS, and JavaScript to build responsive and interactive
        user interfaces. I also have experience working with MySQL for handling
        data and performing database operations.
        <br /><br />
        I enjoy combining problem-solving skills with frontend development
        to create applications that are both functional and user-friendly.
        I am constantly learning, practicing, and improving through hands-on
        projects and real-world scenarios.
      </p>
    </div>

    {/* SOCIAL LINKS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 w-full max-w-xl">
      {socials.map((item, i) => {
        const Icon = item.icon;

        return (
          <a
            key={i}
            href={item.href}
            className="
              flex items-center justify-between
              px-5 py-4
              border border-[#2A2A2A]
              rounded-lg
              bg-gradient-to-r from-[#141414] to-[#0B0B0B]
              text-[#D6C1A3]
              hover:border-[#D6C1A3]/60
              transition
              group
            "
          >
            <div className="flex items-center gap-3">
              <Icon size={18} strokeWidth={1.25} />
              <span className="tracking-widest text-xs sm:text-sm">
                {item.name}
              </span>
            </div>

            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        );
      })}
    </div>

  </div>
</section>

  );
}
