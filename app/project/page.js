import Image from "next/image";
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
export default function Home() {
  return (
    <div >
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
    
    </div>
  );
}
