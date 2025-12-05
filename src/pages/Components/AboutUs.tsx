import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, Rocket, Server, CheckCircle } from 'lucide-react';
import Navbar from "../../pages/Components/Navbar";
import Footer from "../Components/Footer";


const AboutUs = () => {
  const features = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Hands-On Learning",
      description: "Work directly on Red Hat Linux servers with real clustering setups"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-World Practice",
      description: "Practice with shared storage, fencing, failover, and cluster components"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Step-by-Step Guidance",
      description: "Well-structured instructions to learn at your own pace"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Production Environment",
      description: "Experience real production-like environments"
    }
  ];

  const features_new = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "1. Misleading Training Promises",
      description: "Many learners are misled by unrealistic guarantees and high fees without real career outcomes.:",
      sub:['Overpromised job placements without real proof','Expensive courses that don’t deliver practical value','Marketing claims that don’t match actual training quality'],
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "2.  Lack of Real Skill Preparation",
      description: "Graduates struggle because training often lacks practical, industry-aligned learning.",
      sub:['Minimal hands-on practice or real-world labs','Outdated course material not aligned with job roles','Focus on theory instead of employable skills'],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "3.  Unsafe Job Channels",
      description: "Fraudulent agencies, risky backdoor hiring, and roles without proper contracts are common.",
      sub:['Fake consultancies charging illegal “placement fees','Non-compliant hiring pathways that risk career credibility.','Candidates left without proper contracts or employer clarity.'],
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "4. No Post-Placement Support",
      description: "Most institutions leave students after placement—with no long-term guidance.",
      sub:['No follow-up for career growth or job stability','TLack of support in adapting to workplace challenges','No help with future upskilling or role transitions']
    }
  ];

  const labs = [
    "Red Hat Cluster Lab",
    "Linux Lab",
    "Docker Lab",
    "Kubernetes Lab",
    "And many more coming soon..."
  ];
  const whyschoos = [
    "Ethical & Transparent Placement Process",
    "Practical, Industry-Aligned Training.",
    "Region-Specific CV & Interview Guidance",
    "Support for Expats & International Job Seekers",
    "Continuous Career Mentoring" ,
    "100% Job-Guaranteed Programs (Merit-Based)"
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
     <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
             ABOUT US
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
           Welcome to ORN-AI E-Learning
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
            Your Destination for Professional Upskilling and Career Growth
          </p>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Practical, hands-on learning environment for mastering high-availability clusters and enterprise Linux systems
          </p>
        </motion.div>

        {/* Company History */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">About ORN-AI E-Learning</h2>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                ORN-AI is a boutique training platform dedicated to transforming careers through personalized, high-quality learning. We specialize in cross-technology training, tailored CV writing, interview preparation, and ethical placements. With expert-led sessions and AI-powered content, we bring practical, career-focused education to underserved regions, expats, and niche markets—building real confidence and real competence.
                {/* OnRequestLab was founded in 2020 and later became a part of <span className="text-purple-400 font-semibold">NERD KNOWLEDGE IT Solutions Pvt Ltd</span>. We provide a practical and easy-to-use Red Hat Cluster Lab where you can learn and practice real clustering setups. */}
              </p>
              <p>To empower learners worldwide with ethical, career-focused education and guaranteed job placements—creating equal opportunities and shaping the future workforce.              </p>
              <p>To unlock global potential by delivering accessible, industry-aligned, and future-ready training. Whether starting a career or upgrading skills, ORN-AI supports learners at every step.</p>
            </div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          {/* <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Our Services</h2>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our main aim is to help <span className="text-blue-400 font-semibold">students</span>, <span className="text-blue-400 font-semibold">Linux administrators</span>, and <span className="text-blue-400 font-semibold">IT professionals</span> understand how high availability clusters work in real life. The lab is simple to access, well-structured, and guided with step-by-step instructions so you can learn at your own pace.
            </p>
          </div> */}
        </motion.div>

        {/* Features Grid */}
       <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }}
  variants={staggerContainer}
  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
>
  {features_new.map((feature, idx) => (
    <motion.div
      key={idx}
      variants={fadeUp}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl text-purple-400">
          {feature.icon}
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            {feature.title}
          </h3>

          <p className="text-gray-400">{feature.description}</p>

          {/* 📌 SUB POINTS RENDERING */}
          {feature.sub && (
            <ul className="mt-3 space-y-1 text-gray-300 text-sm">
              {feature.sub.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >
                  <span>•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  ))}
</motion.div>


        {/* Available Labs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose ORN-AI</h2>
              <p className="text-gray-400 text-lg">
                {/* OnRequestLab provides multiple hands-on labs for comprehensive learning */}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whyschoos.map((lab, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{lab}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-violet-500/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Global Expansion
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
ORN-AI is expanding across European regions to support expats with localized CVs, market-specific job prep, and career advancement pathways.            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
            >
              Step into your future with ORN-AI — where your growth is our priority.
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
     <Footer />
    </>
    
  );
};

export default AboutUs;