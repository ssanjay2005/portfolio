import { Playfair_Display, Inter } from "next/font/google";
import {Github,Instagram,Linkedin,Facebook,ArrowUpRight } from 'lucide-react';

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
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

export default function Contact() {
  return (
    <section className="bg-[#0B0B0B] py-32">
      <div
        className="
          max-w-5xl mx-auto
          px-8 py-16
          border border-[#2A2A2A]
          bg-gradient-to-b from-[#141414] to-[#0B0B0B]
          rounded-xl
        "
      >
        {/* TITLE */}
        <span className="text-[#8E8577] tracking-widest text-sm">
          CONTACT
        </span>

        <h2
          className={`
            ${playfair.className}
            text-[#E6D8C3]
            text-[clamp(2.5rem,4vw,3.5rem)]
            mt-4
          `}
        >
          Let&apos;s get in touch
        </h2>

        {/* FORM */}
        <form className="mt-12 space-y-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            className={`
              ${inter.className}
              w-full
              bg-[#1A1A1A]
              border border-[#2A2A2A]
              px-6 py-4
              rounded-md
              text-[#E6D8C3]
              placeholder-[#8E8577]
              focus:outline-none
              focus:border-[#D6C1A3]
            `}
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className={`
              ${inter.className}
              w-full
              bg-[#1A1A1A]
              border border-[#2A2A2A]
              px-6 py-4
              rounded-md
              text-[#E6D8C3]
              placeholder-[#8E8577]
              focus:outline-none
              focus:border-[#D6C1A3]
            `}
          />

          {/* Message */}
          <textarea
            placeholder="Message"
            rows={5}
            className={`
              ${inter.className}
              w-full
              bg-[#1A1A1A]
              border border-[#2A2A2A]
              px-6 py-4
              rounded-md
              text-[#E6D8C3]
              placeholder-[#8E8577]
              focus:outline-none
              focus:border-[#D6C1A3]
              resize-none
            `}
          />

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              mt-6
              bg-[#D6C1A3]
              text-[#0B0B0B]
              py-4
              rounded-md
              font-medium
              tracking-wide
              hover:bg-[#CBB08F]
              transition
            "
          >
            Send Message
          </button>
        </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
      {socials.map((item, i) => {
        const Icon = item.icon;

        return (
          <a
            key={i}
            href={item.href}
            className="
              flex items-center justify-between
              px-6 py-4
              border border-[#2A2A2A]
              rounded-lg
              bg-gradient-to-r from-[#141414] to-[#0B0B0B]
              text-[#D6C1A3]
              hover:border-[#D6C1A3]/60
              transition
              group
            "
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <Icon size={20} strokeWidth={1.25} />
              <span className="tracking-widest text-sm">
                {item.name}
              </span>
            </div>

            {/* RIGHT ARROW */}
            <ArrowUpRight
              size={18}
              className="
                text-[#D6C1A3]
                group-hover:translate-x-1
                transition-transform
              "
            />
          </a>
        );
      })}
    </div>
      </div>
    </section>
  );
}
