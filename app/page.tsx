import Image from "next/image";
import { ArrowDown,ArrowUpRight,Instagram,Linkedin,Facebook } from 'lucide-react';
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
});
const works = [
  {
    title: "Shopping Website",
    category: "React JS && tailwind CSS",  
    //Flipkart Website (UI Project)
    image: "/image1.png",
  },
  {
    title: "Fabula",
    category:"Word press && elementor",
    image: "/image2.png",
  },
];

const services = [
  {
    id: "01",
    title: "Web Development",
    desc: "I build modern and responsive websites using React and Tailwind CSS, focusing on clean UI, performance, and usability.",
    link: "ABOUT WEB DESIGN",
  },
  {
    id: "02",
    title: "UI / UX Design",
    desc:"I design clean and intuitive user interfaces with a strong focus on layout, color balance, and user experience for web applications.",
    link: "ABOUT DEVELOPMENT",
  },
  {
    id: "03",
    title: "Website Customization & Optimization",
    desc: "I customize existing websites and improve performance, responsiveness, and overall design to deliver a better user experience.",
    link: "ABOUT Optimization",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0B0B0B] min-h-screen mt-10 flex flex-col items-center text-center">

     
      <div className="mt-24">
        <div
          className="
            w-[500px] h-[500px]
            rounded-full
            overflow-hidden
            border border-[#D6C1A3]/40
            bg-[#0B0B0B]
            flex items-center justify-center
          "
        >
          <Image
            src="/weblogo.png"
            alt="Sanjay Logo"
            width={500}
            height={500}
            className="object-cover"
            priority
          />
        </div>
      </div>

    
      <h1
        className={`
          ${playfair.className}
          mt-8
          text-[#E6D8C3]
          text-[clamp(3rem,7vw,6.5rem)]
          leading-[1.05]
          font-normal
        `}
      >
        Web Designer <br />
        <span className="italic">&amp; Developer</span>
      </h1>

      <p
        className={`
          ${inter.className}
          mt-4
          text-[#A89274]
          text-lg
          max-w-xl
        `}
      >
        Premium Web Design, Development, and SEO services
        to help your business stand out.
      </p>
      <div className="mt-12 flex items-center gap-2 text-[#A89274] hover:text-[#D6C1A3] cursor-pointer transition">
       <div className="  w-10 h-10
                  rounded-full
                  border border-[#3A3A3A] flex justify-center items-center">   <ArrowDown size={20}
                  className="text-[#D6C1A3]"/></div>
     
        <button>MY SERVICE</button>
      </div>
      <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="
              relative
              p-10
              min-h-[360px]
              bg-gradient-to-b from-[#141414] to-[#0B0B0B]
              border border-[#2A2A2A]
              rounded-xl
              flex flex-col justify-between
              transition-all duration-500
              hover:border-[#D6C1A3]/40
            "
          >
    
            <div>
              <span className="text-[#8E8577] tracking-widest">
                {service.id}
              </span>

              <h3 className="mt-4 text-[#E6D8C3] text-2xl tracking-wide">
                {service.title}
              </h3>

              <p className="mt-4 text-[#A89274] leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <div
                className="
                  w-10 h-10
                  rounded-full
                  border border-[#3A3A3A]
                  flex items-center justify-center
                "
              >
                <ArrowUpRight
                  size={16}
                  className="text-[#D6C1A3]"
                />
              </div>

              <span className="text-sm tracking-widest text-[#D6C1A3]">
                {service.link}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
   
    <section className="bg-[#0B0B0B] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-[#A89274] text-4xl mb-12">
          Project Work
        </h2>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {works.map((work, index) => (
            <div
              key={index}
              className="
                relative
                rounded-xl
                overflow-hidden
                border border-[#2A2A2A]
                group
              "
            >
              {/* Image */}
              <Image
                src={work.image}
                alt={work.title}
                width={1200}
                height={800}
                className="
                  object-cover
                  w-full
                  h-[420px]
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              {/* Bottom Overlay */}
              <div
                className="
                  absolute bottom-0 left-0 w-full
                  bg-black/70 backdrop-blur-md
                  px-6 py-4
                  flex items-center justify-between
                "
              >
                <span className="text-[#E6D8C3] text-lg">
                  {work.title}
                </span>

                <span className="text-[#A89274] text-sm tracking-widest">
                  {work.category}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

   <section className="bg-[#0B0B0B] py-32">
  <div className="max-w-5xl mx-auto px-6 text-center">

    {/* Title */}
    <h2
      className={`
        ${playfair.className}
        text-[#E6D8C3]
        text-[clamp(2.5rem,4vw,3.5rem)]
        leading-tight
      `}
    >
      Skills & Focus Areas
    </h2>

    {/* Subtitle */}
    <p
      className={`
        ${inter.className}
        text-[#A89274]
        max-w-2xl
        mx-auto
        mt-6
        leading-relaxed
      `}
    >
      Clean problem solving with Java and OOPS, combined with modern
      frontend development and practical database knowledge.
    </p>

    {/* Skill Pills */}
    <div className="flex flex-wrap justify-center gap-4 mt-14">
      {[
        "Java Problem Solving",
        "OOPS Concepts",
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Python",
        "MySQL",
      ].map((skill, i) => (
        <span
          key={i}
          className="
            px-6 py-3
            border border-[#2A2A2A]
            rounded-full
            text-sm tracking-wide
            text-[#D6C1A3]
            hover:border-[#D6C1A3]/50
            hover:bg-[#141414]
            transition
          "
        >
          {skill}
        </span>
      ))}
    </div>

  </div>
</section>


   
      

    </main>
  );
}
