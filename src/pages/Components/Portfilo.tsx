import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stories = [
  {
    category: "Our Mission",
    labelColor: "text-purple-400",
    cardBg: "bg-gradient-to-br from-[#2B234A] to-[#232942]",
    title: "Skill Acceleration",
    description: "Deliver job-ready training with hands-on learning.",

    title1: "Career Confidence",
    description1: "Turn knowledge into practical competence.",

     title2: "Access for All",
    description2: "Provide quality education globally and affordably.",

    stat: "450%",
    statLabel: "ROI Increase",
    gradient: "from-secondary/20 to-cyan-500/20",
  },
  {
    category: "Our Vision",
    labelColor: "text-purple-400",
    cardBg: "bg-gradient-to-br from-[#241C38] to-[#18233B]",
    title: "Ethical Growth",
    description: "Promote transparent, secure, and fair career pathways.",

    title1: " Global Impact",
    description1: "Support learners and expats across worldwide markets.",

     title2: "Future Talent",
    description2: "Build a confident, industry-ready workforce.",

    stat: "2.3M",
    statLabel: "New Followers",
    gradient: "from-secondary/20 to-cyan-500/20",
  },
//   {
//     category: "Brand Strategy",
//     labelColor: "text-purple-400",
//     cardBg: "bg-gradient-to-br from-[#32204F] to-[#231635]",
//     title: "StartupX Launch Campaign",
//     description: "Successful product launch reaching 40M+ audience",
//     stat: "40M+",
//     statLabel: "Reach",
//     gradient: "from-secondary/20 to-cyan-500/20",
//   },
//   {
//     category: "Performance Marketing",
//     labelColor: "text-blue-400",
//     cardBg: "bg-gradient-to-br from-[#142536] to-[#222F47]",
//     title: "EcommPlus Conversion Boost",
//     description: "Increased conversion rates by 85% through optimization",
//     stat: "85%",
//     statLabel: "Conversion Lift",
//     gradient: "from-secondary/20 to-cyan-500/20",
//   },
];

const Portfilo = () => (
  <section className="bg-[#0E0A1F] text-white py-24 px-2 md:px-6" id="Portfilo" >
    <div className=" mb-12">
      {/* <h5 className="text-sm font-semibold text-purple-400 tracking-wider mb-2">PORTFOLIO</h5> */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
        About ORN-AI E-Learning
with 
{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Expert Training
        </span>
      </h2>
      <p className="text-gray-400 max-w-7xl mx-auto text-justify">
ORN-AI is a boutique training platform dedicated to transforming careers through personalized, high-quality learning. We offer cross-technology training, tailored CV writing, interview preparation, and ethical placement services. With expert-led sessions and AI-powered content, we deliver practical, career-focused education for underserved regions, expats, and niche markets.      </p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {stories.map((item, idx) => (
           <motion.div
  key={idx}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6, delay: idx * 0.1 }}
  whileHover={{ scale: 1.03, y: -5 }}
  className={`relative w-full rounded-2xl p-8 min-h-[220px] ${item.cardBg} shadow-lg flex flex-col justify-between border-2 border-transparent transition-all duration-300 group`}
>
  {/* Content */}
  <div>
    <div className={`text-4xl font-bold mb-2 ${item.labelColor}`}>
      {item.category}
    </div>
    <h3 className="text-xl font-bold mb-2">{item.title}</h3> {/* static color */}
    <p className="text-gray-300 mb-6 text-sm">{item.description}</p>

    <h3 className="text-xl font-bold mb-2">{item.title1}</h3> {/* static color */}
    <p className="text-gray-300 mb-6 text-sm">{item.description1}</p>


    <h3 className="text-xl font-bold mb-2">{item.title2}</h3> {/* static color */}
    <p className="text-gray-300 mb-6 text-sm">{item.description2}</p>
    
  </div>

  {/* <div>
    <div className={`text-3xl font-extrabold ${item.gradient}`}>{item.stat}</div>
    <div className="text-sm text-gray-400 font-medium">{item.statLabel}</div>
  </div> */}

  <button className="absolute top-7 right-7 bg-[#262143] rounded-full p-1.5 hover:bg-[#31286A] transition-colors">
    <ArrowUpRight className="w-4 h-4 text-gray-300" />
  </button>

  {/* Only border changes on hover */}
  <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-transparent group-hover:border-purple-400 transition-all duration-300" />
</motion.div>


      ))}
    </div>

    {/* <div className="flex justify-center mt-14">
      <button className="border border-purple-400 rounded-full px-8 py-3 text-purple-400 font-semibold text-base hover:bg-purple-400 hover:text-white transition-colors">
        View All Case Studies
      </button>
    </div> */}
  </section>
);

export default Portfilo;
