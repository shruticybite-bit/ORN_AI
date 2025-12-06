import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../pages/Components/Navbar";
import Footer from "../Components/Footer";
import HeroBanner from "./Banner";

export const cyberLabs = [
  {
    id: 1,
    slug: "certified-network-defender",
    title: "Certified Network Defender",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/668baff40b223db5311c7fda_network-connections.png",

    overview: `The Certified Network Defender program is meticulously crafted to provide you with a comprehensive understanding of network security. Through this program, you will gain in-depth knowledge of network defense fundamentals, security threats and vulnerabilities, and advanced protective measures. Prepare to become a proficient network defender equipped with the skills to secure modern networks effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This program is ideal for Network Administrators, IT Security Professionals, Security Analysts, Network Engineers, and individuals seeking to specialize in network security.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Grasp the essentials of network defense, including security architecture and practical configurations.",
      "Understand network security, vulnerabilities, and penetration testing methodologies.",
      "Implement advanced network security protocols and design comprehensive security policies.",
      "Explore unified security frameworks, host security, and secure firewall management.",
      "Develop skills in VPN, IDS configuration, wireless network defense, and traffic monitoring.",
      "Prepare for effective incident response and management."
    ],

    skills: [
      "Through this Skill Quest, you will develop expertise in:",
      "Network Defense",
      "Threat Analysis",
      "Penetration Testing",
      "Security Policy Design",
      "Intrusion Detection",
      "VPN Security",
      "Wireless Security"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Network Security Specialist",
      "Security Administrator",
      "Network Defense Technician",
      "IT Security Consultant",
      "Incident Response Analyst"
    ],

    requirements: [
      "Solid understanding of networking concepts.",
      "Experience with operating systems such as Windows and Linux.",
      "A proactive interest in network security and continuous learning."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Gain a Certificate of Achievement that validates your expertise as a Network Defender. This certification is a testament to your skills, enhancing your credibility and marketability in the cybersecurity field."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by experts with extensive experience in network security and defensive technologies."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Structured to provide a deep dive into network security, this Skill Quest ensures you gain specialized knowledge that directly translates to skills needed in the cybersecurity workforce."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Computer Network & Defense Fundamentals — 6 hrs",
      "Network Security: Threats & Vulnerabilities — 6 hrs",
      "Advanced Network Security — 3 hrs",
      "Network Security Policy Design — 3 hrs",
      "Unified Security Framework — 3 hrs",
      "Host Security — 3 hrs",
      "Secure Firewall Configuration — 3 hrs",
      "Secure IDS Configuration — 3 hrs",
      "Secure VPN Configuration — 3 hrs",
      "Wireless Network Defense — 3 hrs",
      "Network Traffic Monitoring — 3 hrs",
      "Risk & Vulnerability Management — 3 hrs",
      "Data Backup & Recovery — 3 hrs",
      "Network Incident Response — 3 hrs"
    ],
    vedio:"",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },

  // ---------------- ID = 2 (SOC Analyst) ----------------
  {
    id: 2,
    slug: "soc-analyst",
    title: "SOC Analyst",
    subtitle: "Secure & manage cybersecurity operations with real-world SOC techniques.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665848ffb866f7a06e845357_SOC%20ANA-p-500.png",

    overview: `The SOC Analyst program is expertly designed to equip you with essential skills needed for Security Operations Centers. You will explore SOC operations, utilize advanced security tools, and understand the role of a SOC Analyst in combating cybersecurity threats.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment."
    ],
    targetAudienceTex:"This course is ideal for budding SOC Analysts, Security Analysts, Network Security Professionals, and IT Professionals who are aiming to enhance their expertise in cybersecurity operations.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Pemium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate Included", value: "Yes" }
    ],

    learningOutcomes: [
      "Gain a thorough understanding of SOC operations and their significance in cybersecurity.",
      "Set up and operate a virtual penetration testing lab.",
      "Utilize tools like Wireshark, Tshark, and Metasploitable for network security and malware analysis.",
      "Develop expertise in advanced network security, threat detection, and mitigation techniques.",
      "Acquire skills in Linux toolsets for ethical hacking and security monitoring."
    ],

    skills: [
      "This course will enhance your proficiency in:",
      "SOC Operations",
      "Cybersecurity Monitoring",
      "Ethical Hacking",
      "Network Security",
      "Malware Traffic Analysis",
      "Threat Detection",
      "Advanced Security Protocols"
    ],

    careerRoles: [
      "Prepare for roles such as:",
      "SOC Analyst",
      "Network Security Analyst",
      "Cybersecurity Monitor",
      "Threat Detection Specialist",
      "Ethical Hacker"
    ],

    requirements: ["Basic understanding of computer networks and hardware.", "Familiarity with common cybersecurity practices and Linux systems.","Interest in deepening knowledge of security operations."],

    infoCards: [
      {
        icon: "📊",
        title: "Skill Quest Certification Benefits",
        text: "Obtain a Certificate of Achievement that bolsters your professional profile and proves your capabilities in SOC operations and cybersecurity defense."
      },
      {
        icon: "🔍",
        title: "Instructors",
        text: "Our structured Skill Quests are designed to fast-track your professional growth in cybersecurity, particularly in SOC operations."
      },
      {
        icon: "🔥",
        title: "Accelerate Your Career",
        text: "Courses conducted by industry veterans specializing in cybersecurity and SOC operations."
      }
    ],
    vedio:"https://www.youtube.com/embed/PwFkaC1X69o",

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Understanding SOC Operations in Cybersecurity — 2 hrs",
      "Building and Mastering Security Environments: From Virtual Setup to Linux Tools — 4 hrs",
      "Strategic Approaches to Malware Traffic Analysis  — 3 hrs",
      "Advanced Network Analysis and Security Techniques — 3 hrs",
      "Advanced Cyber Threat Detection Techniques — 3 hrs",
      "Detecting Beaconing in Cybersecurity — 3 hrs",
      "Advanced Network Security and Threat Mitigation with Suricata   — 2 hrs",
      "Mastering DetectionLab   — 2 hrs",
      "Advanced Security Tools and Techniques   — 3 hrs"
    ],

    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 3,
    slug: "CYBER DEFENDER",
    title: "Information Security and Ethical Hacking Course",
    subtitle: "Secure & manage cybersecurity operations with real-world SOC techniques.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66584925cdee6b58f49bed23_information%20security-p-500.png",

    overview: `The Cyber Defender program is meticulously crafted to arm you with robust skills for protecting and securing digital environments. You will learn advanced ethical hacking techniques, network security, malware analysis, and more. Equip yourself to stay ahead of cyber threats and safeguard systems effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment."
    ],
    targetAudienceTex:"Ideal for aspiring Cybersecurity Experts, Ethical Hackers, Penetration Testers, Security Analysts, IT Professionals, Network Engineers, and those aiming to escalate their career in cybersecurity.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Pemium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate Included", value: "Yes" }
    ],

    learningOutcomes: [
      "Master cybersecurity concepts, threats, and defenses.",
      "Navigate and harness Kali Linux for ethical hacking.",
      "Execute vulnerability assessments and penetration testing with tools like Metasploit and Nmap.",
      "Learn advanced network security, anonymity techniques, and the legal aspects of cybersecurity.",
      "Handle web server hacking, wireless attacks, and build a robust skilled portfolio with real-world projects."
    ],

    skills: [
      "This Skill Quest enhances your capability in:",
      "Cybersecurity",
      "Ethical Hacking",
      "Network Security",
      "Malware Analysis",
      "Digital Forensics",
      "Information Gathering",
      "Legal and Regulatory Compliance"
    ],

    careerRoles: [
      "Prepares you for roles such as:",
      "Ethical Hacker",
      "Penetration Tester",
      "Security Analyst",
      "Cybersecurity Consultant",
      "Network Security Engineer",
      "Forensic Analyst"
    ],

    requirements: ["Basic understanding of computer hardware and software.", "Familiarity with the Linux operating system.","A keen interest in cybersecurity and problem-solving."],

    infoCards: [
      {
        icon: "📊",
        title: "Skill Quest Certification Benefits",
        text: "Successfully completing the course awards you a Certificate of Achievement. Flaunt your certificate to potential employers and your network, enhancing your professional visibility and competitive edge."
      },
      {
        icon: "🔍",
        title: "Instructors",
        text: "Our skill-based Skill Quests are structured to accelerate your career growth in cybersecurity, focusing on skills that employers value the most."
      },
      {
        icon: "🔥",
        title: "Accelerate Your Career",
        text: "Courses led by seasoned industry professionals, deep-rooted in the cybersecurity landscape."
      }
    ],
    
    vedio:"https://www.youtube.com/embed/otXVo-Jjamk?si=7yaGLhvxVMn_GjI1",

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Cybersecurity Basics   — 2 hrs",
      "Introduction to Ethical Hacking   — 2 hrs",
      "Hands-on Ethical Hacking   — 3 hrs",
      "Advanced Security Techniques   — 3 hrs",
      "Specialized Areas in Cybersecurity   — 3 hrs",
      "Building a Professional Portfolio   — 2 hrs"
    ],

    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 4,
    slug: "CYBER FORENSICS",
    title: "Information Security and Ethical Hacking Course",
    subtitle: "Secure & manage cybersecurity operations with real-world SOC techniques.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66584925cdee6b58f49bed23_information%20security-p-500.png",

    overview: `The Cyber Forensics program is intricately designed to provide you with extensive skills in digital investigation and security. Learn to conduct thorough digital forensic investigations, manage digital evidence, and apply advanced security techniques to protect and analyze digital information effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment."
    ],
    targetAudienceTex:"Ideal for budding Digital Forensic Analysts, Cybersecurity Professionals, Law Enforcement Officers, IT Security Consultants, and anyone looking to specialize in the field of digital forensics.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Pemium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate Included", value: "Yes" }
    ],

    learningOutcomes: [
      "Understand the foundations, practices, and challenges of digital forensics.",
      "Master evidence handling, from preservation to analysis.",
      "Navigate complex forensic tools and techniques for operating system and multimedia analysis.",
      "Gain practical skills through setting up virtual labs for ethical hacking and penetration testing."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Digital Forensics",
      "Evidence Management",
      "Operating System Analysis",
      "Multimedia Forensics",
      "Ethical Hacking Environments",
      "RAM and Image Analysis",
      "Browser and Network Forensics"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Forensic Analyst",
      "Cybersecurity Forensic Consultant",
      "Digital Evidence Specialist",
      "Incident Response Team Member",
    ],

    requirements: ["Solid understanding of IT systems and networks.", "Familiarity with basic cybersecurity concepts.","Eagerness to research into forensic analysis and investigations."],

    infoCards: [
      {
        icon: "📊",
        title: "Skill Quest Certification Benefits",
        text: "Earning this certificate showcases your advanced capabilities in handling and analyzing digital forensic data, significantly boosting your employability and professional stature."
      },
      {
        icon: "🔍",
        title: "Instructors",
        text: "This structured Skill Quest fast-tracks your ability to handle complex forensic challenges, making you a sought-after professional in the booming field of cybersecurity forensics."
      },
      {
        icon: "🔥",
        title: "Accelerate Your Career",
        text: "Led by experts in digital forensics, each with extensive experience in both the field and instructional delivery."
      }
    ],
    
    vedio:"https://www.youtube.com/embed/FN5FpHcb9gU?si=xrE0JkIj86Jzv-kv",

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Digital Forensics in Cybersecurity   — 4 Chapters",
      "Digital Forensics: Investigation Techniques   — 5 Chapters",
      "Foundations of Evidence Handling in Digital Forensics   — 2 Chapters",
      "Advanced Techniques in Operating System Forensics   — 2 Chapters",
      " Setting Up and Mastering Your Ethical Hacking Environment   — 7 Chapters",
      "Digital Forensic Analysis of Acquired Images   — 3 Chapters",
      "Comprehensive Guide to Browser Forensics   — 2 Chapters",
      "Advanced Multimedia Forensics and Digital Security Techniques   — 8 Chapters",
      "Digital Image Analysis and Forensics   — 2 Chapters",
      "RAM Dump Analysis Techniques   — 1 Chapter",
      " Comprehensive Data Security   — 11 Chapters",
      "Autopsy Overview and Key Features   — 2 Chapters"
    ],

    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
   {
    id: 5,
    slug: "BUG BOUNTY",
    title: "BUG BOUNTY",
    subtitle: "Secure & manage cybersecurity operations with real-world SOC techniques.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/6658494cab129396f38d3925_BIG%20BUNTY-p-500.png",

    overview: `The Bug Bounty program is designed to provide you with comprehensive skills in identifying, analyzing, and exploiting software vulnerabilities. Learn to use advanced tools and techniques to uncover and address security flaws, contributing to software integrity and resilience against attacks.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment."
    ],
    targetAudienceTex:"This program is ideal for Security Researchers, Bug Bounty Hunters, Ethical Hackers, Security Consultants, Software Developers, and IT Security Professionals who are focused on application and system security.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Pemium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate Included", value: "Yes" }
    ],

    learningOutcomes: [
      "Master the techniques for effective vulnerability discovery and exploitation.",
      "Understand the methodologies for securing applications against common and advanced security threats.",
      "Develop proficiency in tools like Burp Suite, SQLmap, and Kali Linux for security testing.",
      "Learn to conduct advanced web application penetration tests and network security assessments.",
      "Acquire skills in report writing for bug bounty submissions and ethical disclosure."
    ],

    skills: [
      "This Skill Quest will enhance your capability in:",
      "Vulnerability Assessment",
      "Security Audits",
      "Exploit Development",
      "Report Writing",
      "Ethical Hacking"
    ],

    careerRoles: [
      "Prepares you for roles such as:",
      "Bug Bounty Hunter",
      "Security Researcher",
      "Penetration Tester",
      "Ethical Hacker",
      "Security Consultant"
    ],

    requirements: ["Intermediate knowledge of networking and web technologies.", "Experience with Linux and basic scripting languages.","Strong analytical skills and a keen interest in cybersecurity."],

    infoCards: [
      {
        icon: "📊",
        title: "Skill Quest Certification Benefits",
        text: "Gain a Certificate of Achievement that enhances your credibility in the field of security testing and demonstrates your expertise in practical bug hunting."
      },
      {
        icon: "🔍",
        title: "Instructors",
        text: "Courses led by experienced professionals and seasoned bug hunters who bring real-world scenarios and hands-on expertise to the learning environment."
      },
      {
        icon: "🔥",
        title: "Accelerate Your Career",
        text: "Leverage this skill-focused program to enhance your practical skills, making you highly valuable in the fast-evolving field of cybersecurity."
      }
    ],
    
    vedio:"https://www.youtube.com/embed/lqsbhCUPKRk?si=i6-GgookvPQQIm90",

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Cybersecurity Fundamentals — 2 hours",
      "Ethical Hacking Techniques — 3 hours",
      "Setting Up Hacking Labs — 2 hours",
      "Linux Proficiency — 3 hours",
      "Anonymity and Encryption — 3 hours",
      "Penetration Testing — 3 hours",
      "Web Security — 3 hours",
      "Network Security — 2 hours",
      "Advanced Threat Management — 3 hours",
      "Vulnerability Analysis — 3 hours",
      "Regulatory Compliance — 2 hours",
      "Professional Skills Development — 2 hours"
    ],

    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 11,
    slug: "enterprise",
    title: "Data Scientist course",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66581cb090ee1cfb09695c93_Data%20Science%20course-p-500.png",

    overview: `The Data Scientist program is designed to provide deep insights and practical skills in data analytics, machine learning, and advanced data management. This comprehensive course will empower you to analyze, interpret, and leverage data effectively across various business contexts.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This course is perfect for aspiring Data Analysts, Data Scientists, Machine Learning Engineers, and IT Professionals who wish to excel in the field of data science and analytics.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "Comprehensive training through" },
      { icon: "📝", label: "Quizzes & Assessments", value: "" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Database Administrator",
      "Prepare for effective incident response and management."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Data Analytics",
      "Python Programming",
      "Machine Learning",
      "Statistical Analysis",
      "SQL Database Management",
      "Data Visualization with Tableau and Power BI",
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Data Analyst",
      "Data Scientist",
      "Business Intelligence Analyst",
      "Machine Learning Engineer",
      "Database Administrator"
    ],

    requirements: [
      "Basic knowledge of programming.",
      "Familiarity with the fundamentals of databases and data structures.",
      "A strong inclination towards data-driven problem solving."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieve a Certificate of Achievement that demonstrates your expertise in data science and analytics. Use this certification to enhance your job prospects and validate your skills in the competitive tech industry."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Courses are conducted by industry experts with extensive experience in data science and analytics."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "This Skill Quest is structured to provide a solid foundation in data science, accelerating your potential for growth in technology-driven industries."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Note: Full course details available exclusively to enrolled users.",
      "Access restricted to enrolled users only.",
      "Data Analytics Basics   - Including Python, NumPy, and Pandas fundamentals.",
      "Statistical Analysis   - Covering everything from probability to complex statistical methods.",
      "SQL Server Management   - Learn to handle databases with proficiency.",
      "Data Visualization   - Mastering Tableau and Power BI to present data effectively.",
      "Machine Learning   - From theory to practical application using Python."
        ],
    vedio:"https://www.youtube.com/embed/qqpqTltdfGk?si=wKiAM5ib8C9HJr4u",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 12,
    slug: "enterprise",
    title: "Data Insights Architect course",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66581cc83d8701f3c5b26aba_Data%20Insights%20Architect%20course%20wireframe-p-500.png",

    overview: `The Data Insights Architect program is designed to provide you with a comprehensive understanding of data analysis using Python and Tableau. This course covers everything from basic programming in Python to advanced data manipulation and visualization in Tableau, equipping you with the necessary tools to analyze and interpret complex datasets effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This course is perfect for Data Analysts, Business Analysts, Aspiring Data Scientists, and anyone interested in gaining deep insights from data using Python and Tableau.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "Business Intelligence Developer"
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Python Programming",
      "Statistical Analysis",
      "Data Manipulation and Visualization",
      "SQL Data Management",
      "Tableau Expertise"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Data Analyst",
      "Business Analyst",
      "Data Scientist",
      "Business Intelligence Developer"
    ],

    requirements: [
      "Basic knowledge of programming concepts.",
      "Interest in data and analytics."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Complete this course to earn a Certificate of Achievement that showcases your expertise in data analytics to potential employers and your professional network."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry veterans with extensive experience in data science and business analytics."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Focused and structured learning to quickly elevate your skills in data analytics, making you a valuable asset to any organization."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Note: Full course details available exclusively to enrolled users.",
      "Data Analytics with Python:",
      "Basics of Python Programming   - Introduction, Operators, Conditional Statements, Loops, Functions, Data Structures",
      "Data Science Libraries   - Numpy, Pandas, Visualization with Matplotlib",
      "Statistics for Data Science   - Descriptive Statistics, Probability Distributions, Inferential Statistics",
      "Data Handling and Preparation   - Data Wrangling, Preparation Techniques",
      "SQL Server   - SQL Basics, Advanced SQL Techniques, Database Management",
      "Mastering Tableau:",
      "Introduction to Tableau   - Basics, Data Management, Advanced Features",
      "Data Visualization with Tableau   - Creating Charts and Graphs, Advanced Visualization Techniques",
      "Tableau in Depth   - Dashboard Design, Sharing and Publishing Insights"
        ],
        
    vedio:"https://www.youtube.com/embed/6eZ6QYcMc2c?si=NqIPYY_q7Rj5BMkD",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 13,
    slug: "enterprise",
    title: "Data Analytics with power BI and Tableau",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665848d21867a287a679da4f_Data%20Analytics%20with%20powerbi%20and%20tableau-p-500.png",

    overview: `The Data Analyst program is designed to equip you with critical data analytics skills using popular tools like Python, SQL Server, and Tableau. This comprehensive course covers everything from Python programming basics to advanced data visualization techniques, providing you with the knowledge needed to make data-driven decisions effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This Skill Quest is perfect for Data Analysts, Business Analysts, Data Science Enthusiasts, and IT Professionals who are looking to enhance their analytical skills and advance in the field of data analytics.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "150" },
      { icon: "📝", label: "Quizzes & Assessments", value: "100" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "50 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Data Analyst",
      "Business Analyst",
      "SQL Developer",
      "Tableau Specialist",
      "Business Intelligence Analyst"
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Python Programming",
      "SQL Data Management",
      "Data Visualization with Tableau and Power BI",
      "Statistical Analysis",
      "Data Science Libraries Utilization",
      "Advanced Data Handling Techniques"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Data Analyst",
      "Business Analyst",
      "SQL Developer",
      "Tableau Specialist",
      "Business Intelligence Analyst"
    ],

    requirements: [
      "Basic understanding of computer operations.",
      "Familiarity with any programming language (preferable but not mandatory).",
      "A strong analytical mindset and a passion for data."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Successfully completing the course awards you a Certificate of Achievement**. Display your certificate to potential employers to enhance your job prospects and professional credibility."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "This structured Skill Quest is tailored to help you quickly acquire in-demand skills in data analytics, positioning you for success in a variety of industries."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Courses conducted by industry experts with extensive experience in data analytics and business intelligence."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Note: Full course details available exclusively to enrolled users.",
      "Basics of Python Programming   — 10 hrs",
      "Data Science Libraries   — 8 hrs",
      "Statistics   — 6 hrs",
      "Data Analysis Foundations   — 10 hrs",
      "SQL Server   — 20 hrs",
      "Tableau   — 12 hrs",
      "POWER BI   — 10 hrs"
        ],
        
    vedio:"https://www.youtube.com/embed/IPhFcJEwucY?si=QKJIaapVKMYVahcy",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 21,
    slug: "Scrum Master",
    title: "Scrum Master",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66974e1d0dd16de716d5b90e_New%20Project%20(6)-p-500.png",

    overview: `The Scrum Master program is expertly designed to equip you with essential skills to lead and facilitate project teams in Agile environments. This course delves into the history, methodologies, and practical tools like JIRA, preparing you to handle real-world challenges and drive project success in any dynamic business setting.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for aspiring Scrum Masters, Agile Coaches, Project Managers, Team Leads, IT Professionals, and anyone interested in mastering Scrum practices to enhance their project management skills and career.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Understand the historical context and evolution of Scrum.",
      "Explore why Scrum is the preferred Agile methodology.",
      "Gain proficiency in using JIRA and interpreting Agile charts.",
      "Prepare thoroughly for Scrum Master interviews with extensive question sets.",
      "Learn effective conflict resolution within sprints and maximize team productivity."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest boosts your proficiency in:",
      "Scrum Methodologies",
      "Agile Practices",
      "Project Facilitation",
      "Team Leadership",
      "Conflict Resolution",
      "JIRA Tool Utilization",
      "Effective Communication"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Equips you for professional roles such as:",
      "Scrum Master",
      "Agile Coach",
      "Project Manager",
      "Team Leader",
      "Agile Project Facilitator"
    ],

    requirements: [
      "Basic understanding of project management principles.",
      "Familiarity with Agile and Scrum concepts.",
      "A strong commitment to developing leadership and facilitation skills."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieve a Certificate of Achievement upon course completion. Display your certification to potential employers and your professional network to elevate your career."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry experts with extensive experience in Agile methodologies and Scrum leadership."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our structured Skill Quests are designed to fast-track your growth in the field of project management, focusing on Agile and Scrum methodologies which are highly sought after by employers."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
      "Note: Full course details available exclusively to enrolled users.",
      "SCRUM MASTER - History of Scrum   — 2 hrs",
      "Why Scrum? - Way of Scrum Working   — 2 hrs",
      "JIRA Tool Overview – Charts   — 3 hrs",
      "Interview Questions on Scrum (Part 1 & 2)   — 4 hrs",
      "Conflict Resolution and Effective Team Management   — 3 hrs",
      "Scrum Master Panel Questions and Answers   — 2 hrs",
      "Impediments for Scrum Masters   — 2 hrs",
      "Differences Between Scrum Masters and Project Managers   — 2 hrs"
        ],
        
    vedio:"https://www.youtube.com/embed/IPhFcJEwucY?si=QKJIaapVKMYVahcy",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 22,
    slug: "Salesforce Specialist",
    title: "Salesforce Specialist",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/6697516f868f313a406d70ca_New%20Project%20(7)-p-500.png",

    overview: `The Salesforce Specialist program is expertly designed to guide you through the intricacies of Salesforce, from basic navigation to complex functionalities. Gain practical skills in Salesforce architecture, data management, automation tools, and more, enabling you to maximize CRM efficiency and support enterprise needs effectively.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for CRM Analysts, Salesforce Administrators, Developers, IT Managers, and business professionals who aim to leverage Salesforce in their operations or career.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Grasp the basics of Salesforce, including its ecosystem and architecture.",
      "Learn to manage user security and access settings effectively.",
      "Master data management and automation within Salesforce.",
      "Develop proficiency in Salesforce’s reporting and analytics capabilities.",
      "Execute data migration and integrate Salesforce with other systems."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest empowers you with essential Salesforce skills:",
      "Salesforce Navigation and Setup",
      "Data Management and Security",
      "Automated Workflow Creation",
      "CRM Reporting and Analytics",
      "System Integration and Deployment"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Equip yourself for roles such as:",
      "Salesforce Administrator",
      "CRM Analyst",
      "Salesforce Developer",
      "IT System Manager",
      "Business Solutions Consultant"
    ],

    requirements: [
      "Basic understanding of CRM concepts.",
      "Familiarity with database systems and cloud computing.",
      "A driven mindset focused on enhancing business processes through technology."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Completing this course awards a Certificate of Achievement , showcasing your Salesforce expertise to potential employers and your professional network."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Learn from industry leaders with extensive experience in implementing and managing Salesforce solutions across various sectors."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "This structured Skill Quest is designed to fast-track your proficiency in Salesforce, making you a valuable asset to any technology-driven business."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to Salesforce   — 5 hrs",
          "Salesforce Objects and Data Management   — 5 hrs",
          "Security and Access   — 5 hrs",
          "Automation Tools   — 4 hrs",
          "Data Modeling and Management   — 4 hrs",
          "Salesforce Reporting and Analytics   — 4 hrs",
          "Salesforce Chatter and Collaboration   — 3 hrs",
          "Data Migration and Integration   — 3 hrs",
          "Deployment and Maintenance   — 3 hrs",
          "Advanced Topics   — 4 hrs"
        ],
        
    vedio:"https://www.youtube.com/embed/IPhFcJEwucY?si=QKJIaapVKMYVahcy",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
   {
    id: 23,
    slug: "Python Full Stack",
    title: "Python",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/668e2b7cf55408a8b7ce83d6_html-css-collage-concept-with-person-p-500.png",

    overview: `The Python Full Stack program is designed to transition you from a novice to a professional Python developer. You'll begin with the fundamentals of Python programming and progress through more complex topics, such as web development with Python, database management, and building real-world projects.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for aspiring software developers, system architects, backend developers, and programming enthusiasts looking to build a career in Python development.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Master Python syntax and script writing basics.",
      "Understand and implement Python's data structures like lists, tuples, and dictionaries.",
      "Develop skills in web development frameworks like Django or Flask.",
      "Gain proficiency in database management and file handling in Python.",
      "Complete hands-on projects, including a Python-based e-commerce system and an interactive message saver using Tkinter."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest enhances your capability in:",
      "Python Programming",
      "Web Development with Python",
      "Database Management",
      "File Handling",
      "Object-Oriented Programming",
      "Software Development Best Practices",
      "Project Deployment"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Equip yourself for roles such as:",
      "Python Developer",
      "Backend Developer",
      "Software Engineer",
      "Data Analyst",
      "System Architect"
    ],

    requirements: [
      "Basic understanding of programming concepts.",
      "Familiarity with any programming language is beneficial, but not required.",
      "A strong desire to learn and problem-solve in the programming field."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Successfully completing the course awards you a Certificate of Achievement . Utilize this certificate to enhance your professional profile and demonstrate your programming skills."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Courses led by seasoned software developers and educators with extensive experience in Python and web development."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our structured Skill Quests are designed to quickly escalate your skills in Python programming, preparing you for high-demand jobs in the tech industry."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to Python Programming   — 2 hrs",
          "Setting Up Your Development Environment   — 1 hr",
          "Variables and Data Types   — 2 hrs",
          "Working with Numeric Data   — 2 hrs",

          "Conditional Statements and Control Flow   — 2 hrs",
          "Loops and Iterations   — 2 hrs",
          "String Manipulation   — 2 hrs",

          "Regular Expressions   — 2 hrs",
          "Introduction to Lists   — 1 hr",
          "Functions and Modules   — 2 hrs",
          "Exception Handling   — 1 hr",
          "File Handling   — 2 hrs",
          "Object-Oriented Programming   — 2 hrs",
          "Advanced Topics   — 2 hrs",
          "Python Projects  : - Project 1: A Python-based e-commerce system,- Project 2: Tkinter Interactive Message Saver"
        ],
        
    vedio:"https://www.youtube.com/embed/IPhFcJEwucY?si=QKJIaapVKMYVahcy",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise Customized solutions for team training.", highlight: false }
    ]
  },
  {
    id: 24,
    slug: "Manual Tester",
    title: "Manual Tester",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66964116434d4121d8b600ba_man-working-energy-innovations-his-laptop-p-500.png",

    overview: `The Manual Tester program is intricately designed to develop your proficiency in validating software quality manually. Through this course, you will understand the core principles of manual testing, delve into different testing methodologies, and learn about the software development life cycle and software testing life cycle (STLC).`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for aspiring Software Testers, QA Analysts, Manual Test Engineers, and IT Professionals looking to enhance their testing skills and understanding of software quality assurance.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Grasp the essentials of the Manual Testing process.",
      "Understand the Software Development Life Cycle (SDLC) and its significance in testing.",
      "Explore various Software Testing Methodologies.",
      "Learn about Static Techniques and their application in quality assurance.",
      "Examine different Levels of Testing to ensure comprehensive software quality.",
      "Dive into the Software Testing Life Cycle (STLC) and its phases.",
      "Understand the roles and responsibilities in Quality Assurance (QA) and Quality Control (QC)."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest equips you with essential skills in:",
      "Manual Testing",
      "Software Quality Assurance",
      "Test Planning and Execution",
      "Defect Management",
      "Static Testing Techniques",
      "QA and QC Fundamentals"

    ],

    careerRoles: [
      "Equip yourself for roles such as:",
      "Equip yourself for roles such as:",
      "Manual Tester",
      "QA Analyst",
      "Test Engineer",
      "Software Quality Inspector"
    ],

    requirements: [
      "Basic IT literacy.",
      "Understanding of software development fundamentals.",
      "Keen attention to detail and a methodical approach to problem-solving."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieve a Certificate of Completion to demonstrate your expertise in Manual Testing to potential employers and enhance your career prospects."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry experts with extensive experience in software testing and quality assurance."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "This structured Skill Quest focuses on practical skills and theoretical knowledge to fast-track your career in software testing."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Manual Testing   — 2 hrs",
          "Software Development Life Cycle   — 3 hrs",
          "Software Testing Methodologies   — 3 hrs",
          "Static Techniques   — 3 hrs",

          "Levels of Testing   — 2 hrs",
          "Software Testing Life Cycle (STLC)   — 3 hrs",
          "QA & QC   — 2 hrs",
        ],
        
    vedio:"",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 25,
    slug: "Java Fullstack Development",
    title: "Java Fullstack",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66964163fe8db45492817727_programming-background-with-person-working-with-codes-computer-p-500.png",

    overview: `The Java Fullstack program is carefully designed to take you from Java fundamentals to advanced full-stack development. Learn to build robust backend systems and engaging front-end interfaces. Prepare to master frameworks like Spring and front-end technologies such as ReactJS, ensuring comprehensive skills in web development.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for aspiring Developers, Software Engineers, IT Professionals, and anyone interested in becoming proficient in both backend and frontend Java development.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Develop a strong foundation in Java programming and setup.",
      "Apply Object-Oriented Programming (OOP) principles in real-world scenarios.",
      "Manage database operations using Java with SQL.",
      "Explore web development fundamentals including JavaScript, HTML, and CSS.",
      "Harness Spring Framework for backend operations and RESTful services.",
      "Dive into modern front-end technologies and security practices in web development."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest sharpens your expertise in:",
      "Java Programming",
      "Web Development",
      "Spring Framework",
      "Database Management",
      "Front-End Technologies",
      "Software Architecture",
      "Security Practices"

    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Prepares you for diverse roles in software development:",
      "Java Developer",
      "Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "Web Developer"
    ],

    requirements: [
      "Basic knowledge of programming concepts.",
      "Familiarity with database operations.",
      "An eagerness to master full-stack development."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Obtain a Certificate of Achievement to enhance your professional credibility and showcase your comprehensive skills in Java full-stack development to potential employers."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry experts with extensive experience in Java and full-stack technologies."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Engage in a structured learning journey to fast-track your career in software development, focusing on high-demand skills across industries."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Java Programming Foundations: From Setup to Development   — 4 Chapters - Duration: 2 hrs",
          "Object-Oriented Programming and Practical Design   — Duration: 3 hrs",
          "Java Fundamentals and Basic Database Operations   — 4 Chapters - Duration: 3 hrs",
          "Web Development Fundamentals and Java Web Development Basics   — Duration: 4 hrs",
          "Spring Framework and Database Connectivity   — Duration: 3 hrs",
          "Front-End Development and Security in Web Development   — Duration: 2 hrs",
          "RESTful Web Services and Version Control   — Duration: 2 hrs",
          "Spring Boot Microservices and DevOps   — Duration: 3 hrs"
        ],
        
    vedio:"",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 26,
    slug: "Informatica Cloud Services",
    title: "Informatica Cloud Services",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66974d2d484c24ec11c2a9dc_New%20Project%20(5)-p-500.png",

    overview: `Informatica Cloud Services are designed to provide comprehensive data integration solutions that facilitate the connection, synchronization, and management of data across diverse platforms. You will explore key components like architecture, secure agent functionality, connectors, and task configuration to effectively manage data workflows.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Ideal for IT Professionals, Cloud Architects, Data Integration Specialists, and Data Engineers interested in mastering cloud data management and integration.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Gain a comprehensive understanding of Informatica Cloud Services architecture.",
      "Learn to configure and manage Secure Agents, connectors, and cloud components.",
      "Master data synchronization, replication, and masking tasks.",
      "Explore advanced features like Mass Ingestion, Taskflow, and Cloud Application Integration."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "This Skill Quest sharpens your expertise in:",
      "Cloud Data Integration",
      "Web Development",
      "Data Management",
      "Informatica Architecture",
      "Task Configuration",
      "Exception Handling"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "This training prepares you for roles such as:",
      "Cloud Data Integrator",
      "Informatica Developer",
      "Cloud Architect",
      "Data Integration Specialist"
    ],

    requirements: [
      "Basic knowledge of data management principles.",
      "Familiarity with cloud computing concepts.",
      "A strong foundation in database systems."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieve a Certificate of Achievement upon completion. Utilize this certification to demonstrate your capabilities in cloud data integration and boost your professional standing."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Courses delivered by industry professionals with extensive experience in Informatica Cloud Services and cloud data integration."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "This structured Skill Quest is designed to fast-track your growth in the field of cloud data management, aligning with skills sought by employers globally."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Informatica Cloud Basics   — Architecture, Secure Agent, Connectors — 3 hrs",
          "Cloud Data Integration Services   — Setting up Integration Tasks — 4 hrs",
          "Synchronization and Replication Tasks   — Configuring and Running Tasks — 3 hrs",
          "Mapping and Masking Tasks   — Setup and Execution — 3 hrs",
          "Mass Ingestion and Taskflow   — Advanced Integration Techniques — 3 hrs",
          "Cloud Application Integration   — Exception Handling, Advanced Configurations — 4 hrs",
        ],
        
    vedio:"",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 27,
    slug: "SQL Server Course",
    title: "SQL Server Mastery",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66570bbe27b7dbfb0951d630_New%20Project-p-500.png",

    overview: `The SQL Server Mastery program is meticulously designed to provide you with a deep understanding of SQL Server database management and optimization. Learn SQL Server setup, database design, query management, and more. Equip yourself with essential skills to efficiently handle and optimize databases.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Ideal for Database Administrators, Data Analysts, IT Professionals, and those looking to specialize in database management using SQL Server.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Set up SQL Server and manage database environments.",
      "Develop and manage databases, mastering DML and DDL SQL commands.",
      "Understand and implement table structures, SQL alterations, and database constraints.",
      "Design efficient databases and perform advanced SQL operations and functions.",
      "Optimize database performance through indexing, views, and stored procedures."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "SQL Server Setup",
      "Database Management",
      "SQL Query Optimization",
      "Data Schema Design",
      "Performance Tuning",
      "Transactional Control"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Database Administrator",
      "SQL Developer",
      "Data Analyst",
      "Systems Architect",
      "Performance Tuner"
    ],

    requirements: [
      "Basic understanding of database concepts.",
      "Familiarity with any programming language.",
      "A keen interest in data management and software development."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Successfully completing the course awards you a Certificate of Achievement . Use your certification to demonstrate your SQL Server expertise to potential employers and enhance your career prospects."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Courses led by seasoned SQL Server experts, each with extensive experience in database technologies."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our structured Skill Quests are designed to propel your career in database management, emphasizing skills that are crucial in the tech industry."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "SQL Server Setup & Basics   — 3 hrs",
          "Database Development and Management   — 3 hrs",
          "Mastering Table Structures and SQL Alterations   — 4 hrs",
          "Database Design and Environment Awareness   — 2 hrs",
          "Database Constraints and SQL Query Management   — 3 hrs",
          "Data Management and Query Techniques   — 3 hrs",
          "Data Operations and Functions in SQL   — 3 hrs",
          "Mastering SQL Joins and Queries   — 3 hrs",
          "Optimizing Database Performance with SQL Views   — 2 hrs",
          "Mastering SQL Indexing: Retrieval and Query Optimization   — 2 hrs",
          "Mastering Stored Procedures for Efficient SQL Management   — 3 hrs",
          "SQL Transactions: Control Actions and Query Operations   — 2 hrs",
          "SQL Triggers and Queries for Online Shopping Data   — 2 hrs",
          "Performance Tuning   — 2 hrs",
          "Database Backup and Restore Fundamentals   — 2 hrs",
          "SQL Server Comprehensive Q&A   — 2 hrs",
          "Data Management and Schema Design in Enterprise Applications   — 3 hrs"
        ],
    vedio:"https://www.youtube.com/embed/GcscaneDmxg?si=efLjwjYK0Go4G7Xi",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 28,
    slug: "Rabbit MQ Course",
    title: "RabbitMQ Mastery",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665813830f5cb46af22d2a69_Flutter%20(1)-p-500.png",

    overview: `The RabbitMQ Mastery program is expertly designed to teach you the intricacies of RabbitMQ, a critical component in modern software architecture. This course covers everything from AMQP fundamentals to advanced integration techniques with Docker and Kubernetes, equipping you with the skills needed to develop, maintain, and scale robust messaging solutions.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This course is ideal for Software Developers, System Architects, DevOps Engineers, IT Professionals, and anyone interested in mastering message queue systems for scalable software solutions.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Deep dive into AMQP fundamentals and RabbitMQ anatomy.",
      "Learn to integrate RabbitMQ with Spring Boot and manage consumer implementations.",
      "Develop real-time applications utilizing RabbitMQ.",
      "Conduct unit testing with JUNIT in RabbitMQ environments.",
      "Understand and implement HA clustering to ensure high availability in production.",
      "Compare Kafka and RabbitMQ for better architectural decisions.",
      "Prepare for job interviews with comprehensive RabbitMQ knowledge."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "AMQP Protocols",
      "RabbitMQ Implementation",
      "Real-Time Application Development",
      "Unit Testing with JUNIT",
      "High Availability Systems",
      "Software Architecture",
      "Docker and Kubernetes Integration"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "System Architect",
      "Messaging System Developer",
      "DevOps Engineer",
      "Software Tester",
      "Cloud Solutions Architect"
    ],

    requirements: [
      "Basic programming knowledge in Java or similar languages.",
      "Familiarity with Spring Boot and basic software architecture concepts.",
      "Interest in messaging systems and software scalability."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Earn a Certificate of Achievement to showcase your newfound expertise in RabbitMQ to potential employers, bolstering your professional credentials and marketability."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by professionals with extensive experience in software architecture and message queue systems."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our structured Skill Quests fast-track your career progression in software development and system architecture, focusing on in-demand skills."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "AMQP Fundamentals & Anatomy   — Comprehensive exploration through six parts.",
          "RabbitMQ with Spring Boot   — Detailed integration and consumer implementation.",
          "Real-Time Application Development with RabbitMQ   — Practical application development.",
          "Unit Testing with JUNIT   — Testing practices in RabbitMQ environments.",
          "HA Clustering RabbitMQ   — Production-ready application setups.",
          "Kafka vs RabbitMQ   — Comparative analysis.",
          "RabbitMQ Interview Preparation   — Key concepts and common questions.",
          "AWS SQS Programming with RabbitMQ and Spring Boot   — Cloud messaging solutions.",
          "Advanced Docker & Kubernetes Concepts   — Enhancing deployment and scalability.",
          "Advanced Messaging with RabbitMQ   — Integration, comparison, and testing insights.",
        ],
        
    vedio:"https://www.youtube.com/embed/vKqYZmqDMI4?si=tpOCIuNb4mq2AT4a",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 29,
    slug: "PHP Programming Course",
    title: "PHP Programming Course",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665719488610bdc9a10acd20_PHP%20Course-p-500.png",

    overview: `The PHP Programming course is expertly designed to teach you the fundamentals and advanced concepts of PHP. From setting up environments to mastering object-oriented programming, you will acquire the skills needed to develop robust web applications and services.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This course is perfect for Web Developers, Backend Developers, Software Engineers, and aspiring programmers who wish to gain a deep understanding of PHP and its applications in web development.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Gain a solid understanding of PHP syntax, variables, and control structures.",
      "Learn to configure development environments across different operating systems.",
      "Master PHP functions, error handling, and exception management.",
      "Explore object-oriented programming, including classes, inheritance, and polymorphism.",
      "Integrate PHP with MySQL for database operations and management."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "PHP Programming",
      "Web Application Development",
      "Database Integration",
      "Object-Oriented Programming",
      "Error Management"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Web Developer",
      "Backend Developer",
      "PHP Programmer",
      "Software Engineer"
    ],

    requirements: [
      "Basic programming knowledge.",
      "Familiarity with web technologies (HTML/CSS).",
      "Enthusiasm for learning web development."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Complete the course to earn a Certificate of Achievement . This certification can significantly boost your professional profile and open new career opportunities in web development and programming."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry experts with extensive experience in PHP and web technologies."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our structured Skill Quest is designed to fast-track your growth in the field of web development, focusing on practical skills and comprehensive understanding."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to PHP   — 4 Modules",
          "Setting Up PHP Development Environments   — 8 Modules",
          "PHP Fundamentals: Syntax, Variables, and Control Structures   — 8 Modules",
          "Fundamentals of PHP Functions   — 6 Modules",
          "PHP and Web Forms   — 5 Modules",
          "PHP Arrays   — 5 Modules",
          "PHP String Manipulation   — 4 Modules",
          "Fundamentals of Object-Oriented Programming   — 8 Modules",
          "Integrating PHP with MySQL   — 7 Modules",
          "Error Handling and Exceptions   — 6 Modules",
          "Advanced PHP: Techniques, Integration, and Security   — 7 Modules",
          "Modern PHP Practices and Tools   — 5 Modules",
          "Extending PHP   — 4 Modules",
          "Future of PHP   — 4 Modules",
          "PHP Function Reference   — 2 Modules"
        ],
        
    vedio:"https://www.youtube.com/embed/6eZ6QYcMc2c?si=LtJWVTuxuP_H5jz1",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 30,
    slug: "Laravel course",
    title: "Laravel Architect",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/66581391cebe5e7a47e0a5f3_laraval-p-500.png",

    overview: `The Laravel Architect program is designed to guide you through every aspect of Laravel, from basic setup to advanced application techniques. This course is structured to help you build sophisticated web applications using Laravel, enhancing your skills in modern web development.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for Web Developers, PHP Programmers, Backend Developers, and aspiring Full-Stack Developers interested in mastering Laravel for professional application development.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Gain a comprehensive understanding of Laravel’s structure and its role in modern web development.",
      "Set up a development environment and configure Laravel for different projects.",
      "Master routing, middleware, controllers, and advanced backend techniques.",
      "Develop proficiency in database management, Eloquent ORM, and authentication methods.",
      "Implement testing, deployment, and security best practices."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Laravel Development",
      "Web Application Architecture",
      "Backend Programming",
      "Database Management",
      "Authentication and Security",
      "Testing and Deployment"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Laravel Developer",
      "Backend Developer",
      "Full-Stack Developer",
      "Web Application Architect",
      "PHP Developer"
    ],

    requirements: [
      "Fundamental knowledge of PHP and web development.",
      "Basic understanding of MVC architecture.",
      "Eagerness to learn advanced web development techniques."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Earn a Certificate of Achievement to bolster your resume and showcase your advanced Laravel skills to potential employers and peers."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by experienced developers and Laravel experts with in-depth knowledge and industry experience."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Structured to fast-track your growth in web development, focusing on comprehensive Laravel techniques and industry practices."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to Laravel   — Essentials and Setup — 2 hrs",
          "Setting Up and Installation   — Configuration and Environment — 3 hrs",
          "Routing in Laravel   — From Basics to Advanced — 2 hrs",
          "Middleware and Controllers   — Implementation and Usage — 3 hrs",
          "Views and Blade Templating   — Building Dynamic UI — 3 hrs",
          "Database Management   — Techniques and Optimization — 2 hrs",
          "Eloquent ORM   — Data Manipulation and ORM Techniques — 3 hrs",
          "Authentication and Security   — Secure Web Applications — 2 hrs",
          "Testing in Laravel   — Ensuring Code Quality — 2 hrs",
          "Advanced Laravel Topics   — APIs and Real-Time Applications — 3 hrs",
          "Deployment and Best Practices   — Going Live with Applications — 2 hrs",
          "Capstone Project   — Comprehensive Application Development — 3 hrs",
          "Additional Resources and Continued Learning   — Engaging with the Laravel Community — 1 hr",
        ],
        
    vedio:"https://www.youtube.com/embed/iXbBpr4SbMA?si=IXmm5f8gAVS_lPDn",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 31,
    slug: "Golang Masterclass",
    title: "Golang Masterclass",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/6658139d8a99149c8af3ac6d_golang%20Course-p-500.png",

    overview: `The Golang Masterclass program is designed to thoroughly instruct you in the Go programming language. From foundational concepts to advanced programming techniques, this course ensures you become proficient in creating efficient, scalable, and powerful applications using Go.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This course is perfect for software developers, IT professionals, and computer science students who are eager to expand their programming skills or specialize in Go for professional advancement.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Grasp the syntax, data handling, and control structures in Go.",
      "Explore advanced features like concurrency models, memory management, and robust error handling.",
      "Develop practical skills in web development, testing, benchmarking, and more.",
      "Engage with real-world projects to apply your learning practically."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Go Programming Fundamentals",
      "Concurrent and Parallel Programming",
      "System and Network Programming",
      "Web Development with Go",
      "Software Testing and Benchmarking",
      "Package and Dependency Management"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Go Developer",
      "Systems Programmer",
      "Back-End Developer",
      "DevOps Engineer",
      "- Software Tester"
    ],

    requirements: [
      "Understanding of basic programming concepts.",
      "Familiarity with command-line interfaces and software development principles.",
      "An enthusiasm for learning new programming languages."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Upon completing this extensive Golang course, receive a Certificate of Achievement that enhances your resume and showcases your expertise in Go programming to potential employers."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by experienced professionals renowned in the software development industry, particularly skilled in Go."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Structured to fast-track your career in technology, this Skill Quest prepares you to meet the demands of modern software development and technology jobs focusing on Go."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          " Introduction to Go   – 4 hrs",
          "Basics, history, advantages, and setting up",
          "Fundamentals of Go Programming   – 6 hrs",
          "-Syntax, data handling, control flow, and functions",
          "Data Structures and Type Systems in Go   – 6 hrs",
          "- Structures, maps, slices, arrays, and type systems",
          "Advanced Golang   – 6 hrs",
          "- Methods, memory management, error handling",
          "Mastering Concurrency in Go   – 6 hrs",
          "- Goroutines, channels, select statements",
          "Managing Packages and Workspaces   – 4 hrs",
          "- Package management, custom packages, dependency management",
          "Testing and Benchmarking   – 4 hrs",
          " - Writing tests, mocking, dependency injection",
          " Networking and Web Development   – 5 hrs",
          " Networking basics, RESTful APIs, web sockets",
          "Persistence and Databases   – 5 hrs",
          "- File IO, JSON/XML, database integration",
          "Advanced Go Programming   – 6 hrs",
          " Optimization, secure coding, CI/CD integration",
          " Community and Ecosystem   – 1 hr",
          "Conclusion and Future Prospects   – 2 hrs",
          "Troubleshooting Common Go Errors   – 3 hrs",
          "Golang with AI   – 2 hrs"
        ],
        
    vedio:"https://www.youtube.com/embed/pXOLnxlyOoU?si=CBoRyuuWdwrv15fW",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 32,
    slug: "Flutter Developer Course",
    title: "Flutter Developer",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665813af3a156fbcededbaa0_Flutter-p-500.png",

    overview: `The Flutter Developer program is designed to provide a thorough understanding of Flutter and Dart, enabling you to build high-quality applications for mobile, web, and desktop. From setting up your development environment to deploying your apps, this course covers everything you need to become a proficient Flutter developer.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Ideal for Software Developers, Mobile App Developers, UI/UX Designers, and aspiring programmers who wish to master cross-platform development using Flutter.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Gain a solid foundation in Flutter and Dart fundamentals.",
      "Learn to set up a development environment for Flutter projects.",
      "Understand and implement state management techniques.",
      "Master building UI components and managing layouts in Flutter.",
      "Explore advanced topics like networking, persistent storage, and animations.",
      "Develop and deploy full-fledged applications for Android and iOS."
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Flutter Development",
      "Dart Programming",
      "UI/UX Design",
      "State Management",
      "Data Storage Solutions",
      "Application Deployment"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Flutter Developer",
      "Mobile Application Developer",
      "Frontend Developer",
      "Cross-platform Developer"
    ],

    requirements: [
      "Basic programming knowledge.",
      "Familiarity with object-oriented programming concepts.",
      "Enthusiasm for mobile and web application development."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Obtain a Certificate of Achievement upon completion, showcasing your expertise in Flutter development to potential employers and your professional network."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Led by industry veterans specializing in mobile and web development technologies."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Our Skill Quest is designed to provide you with industry-relevant skills that are highly sought after in the tech industry, speeding up your career progression."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to Flutter",
          "- Flutter Fundamentals and Dart Overview",
          "Flutter Development Setup and Initialization",
          "- Setting up the development environment, Installing Flutter SDK",
          "Fundamentals of Dart Programming",
          "- Basics of Dart, Variables, Data Types, Control Flow",
          "Foundations of Flutter Widgets",
          " - Basic and Commonly Used Widgets, Stateless vs. StatefulWidget",
          "Fundamentals of State Management in Flutter",
          "Techniques and Tools for Effective State Management",
          " UI Components and Navigation Techniques",
          "- Advanced Widgets, Routes, Navigation Bar, Forms",
          "Networking, Fetching data from APIs, Data Parsing",
          "Mobile Data Storage Techniques",
          "- Persistent Storage with SQLite, CRUD operations",
          "Package Management and Publishing",
          "- Using and publishing packages on `pub.dev`",
          "Flutter Testing Fundamentals",
          "- Testing and Debugging Techniques",
          "Flutter App Development Lifecycle",
          "- Deploying Apps, App Signing, Publishing to App Stores",
          "Advanced Flutter Development Techniques",
          "- Flutter for Web and Desktop, Integrating Firebase",
          "Web Development and Multithreading with Flutter",
          "- Building websites and webservices using Flutter"
        ],
        
        
    vedio:"https://www.youtube.com/embed/d4FFoO52vFY?si=6I5YOWdeN7nLocRV",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
  {
    id: 33,
    slug: "Django Course",
    title: "Django Developer",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665813bfed43dc6037008fa4_Django%20Course-p-500.png",

    overview: `The Django Developer program is expertly crafted to equip you with the skills necessary to build, deploy, and manage robust web applications using Django. Learn from the ground up: from basic concepts and environment setup to advanced features like REST API integration and deployment strategies.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"This program is perfect for aspiring Web Developers, Python Programmers, Back-end Developers, IT Professionals, and students looking to build practical, scalable web applications using Django.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Grasp the foundational concepts of Django, including its MVT architecture and core principles.",
      "Set up a Django development environment and create your first Django project.",
      "Explore Django models and database management with ORM.",
      "Implement Django forms, authentication systems, and REST APIs.",
      "Master deployment strategies involving Gunicorn, Nginx, and security practices.",
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "Web Development with Django",
      "Python Programming",
      "Database Management",
      "REST API Development",
      "Web Application Deployment",
      "Security Implementation"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "Django Developer",
      "Full-stack Developer",
      "Back-end Developer",
      "Web Application Developer",
      "Python Programmer"
    ],

    requirements: [
      "Proficient in Python programming.",
      "Understanding of web development basics.",
      "Eagerness to develop complex web applications."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieve a Certificate of Completion to boost your career prospects and showcase your expertise in Django development to potential employers."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Guided by professionals with years of experience in web development and teaching Python and Django."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "Fast-track your web development career with practical, hands-on knowledge and technical skills that are in high demand."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Foundations of Django   — Architecture, Principles",
          "Setting Up Django   — Environment and Basic Project Configuration",
          "Mastering Django Models   — Database Design and ORM",
          "Web Routing and View Management   — URL Configuration and Views",
          "Web Template Design   — Creating and Managing Templates",
          "Mastering Django Forms   — Form Handling and Customizations",
          "User Management and Authentication   — Secure User Operations",
          "Advanced Database Management   — Complex Relationships and Efficiency",
          "Effective Testing Strategies   — Ensuring Robust Applications",
          "Advanced API Development   — REST Framework Techniques",
          "Advanced Deployment and Security   — Deployment Strategies for Production",
          "Optimizing Django   — Enhancing Performance and Security",
        ],
        
        
    vedio:"https://www.youtube.com/embed/tiYpQjmXFz0?si=pruJ-GTyQDX4N2-M",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
   {
    id: 34,
    slug: "Base SAS and Advance SAS course",
    title: "SAS Mastery",
    subtitle: "Master the art of protecting networks with comprehensive defense strategies.",
    bannerImage:
      "https://cdn.prod.website-files.com/664b240b7fabdc2000ff433a/665813d90838c9f8bb3a3c27_SAAS-p-500.png",

    overview: `The SAS Mastery program is designed to guide you through Base SAS and Advanced SAS programming, focusing on comprehensive data manipulation, analysis, and reporting. Gain in-depth knowledge on how to leverage SAS in varied scenarios from academic environments to advanced business applications.`,

    targetAudience: [
      "Courses Included in This Skill Quest",
      "Note: Detailed syllabus available post-enrollment.",
    ],
    targetAudienceTex:"Perfect for Data Analysts, Statisticians, Business Analysts, and anyone keen on mastering SAS programming from the ground up.",
    stats: [
      { icon: "💡", label: "Expert Sessions", value: "40" },
      { icon: "📝", label: "Quizzes & Assessments", value: "50" },
      { icon: "🌐", label: "Language", value: "English" },
      { icon: "⏱️", label: "Premium content", value: "20 hours" },
      { icon: "💬", label: "Subtitles", value: "English" },
      { icon: "🏆", label: "Certificate of Completion", value: "" }
    ],

    learningOutcomes: [
      "Navigate the basics of SAS and its environment including SAS OnDemand for Academics.",
      "Understand and utilize SAS programming, libraries, and data management techniques.",
      "Develop skills in data manipulation, merging, and handling complex data structures with SAS.",
      "Learn to apply SAS functions effectively in real-world scenarios.",
      "Prepare for industry needs with advanced reporting, graphing, and statistical analysis using SAS.",
    ],

    skills: [
      "This Skill Quest sharpens your expertise in:",
      "SAS Programming",
      "Data Management",
      "Statistical Analysis",
      "Data Reporting",
      "Advanced SAS Techniques"
    ],

    careerRoles: [
      "Equips you for roles such as:",
      "SAS Programmer",
      "Data Analyst",
      "Statistical Analyst",
      "SAS Data Consultant"
    ],

    requirements: [
      "Basic understanding of programming concepts.",
      "Interest in data analysis and statistical methods.",
      "Eagerness to develop advanced SAS programming skills."
    ],

    infoCards: [
      {
        icon: "🛡️",
        title: "Skill Quest Certification Benefits",
        text: "Achieving this certification demonstrates your ability to handle sophisticated data analysis and reporting tasks using SAS. Show off this credential to enhance your professional credibility and marketability."
      },
      {
        icon: "👨‍🏫",
        title: "Instructors",
        text: "Learn from industry leaders and experienced professionals who bring a wealth of practical knowledge and insights in SAS programming.."
      },
      {
        icon: "📈",
        title: "Accelerate Your Career",
        text: "This structured, skill-focused program is designed to accelerate your progression in data-driven industries, making you a valuable asset to any analytics team."
      }
    ],

    certificateImage:
      "https://cdn.prod.website-files.com/66446d71a3755a2d4e53fe14/666fbffc03a209c0ded9bc07_Cyber%20Security%20Certificate-p-1080.png",

    syllabus: [
          "Note: Full course details available exclusively to enrolled users.",
          "Introduction to SAS",
          "  - Getting Started with SAS: Basics to OnDemand for Academics",
          "SAS Programming Essentials",
          "  - Mastering SAS Basics: Environment, Syntax, and Data Handling",
          "Advanced Data Management",
          "- Techniques for Advanced Data Structuring and Management",
          "SAS Reporting and Graphics",
          "- Mastering Reporting and Data Visualization with SAS",
          "SAS for Statistical Analysis",
          "- Utilizing SAS for Complex Statistical Analysis"
        ],
        
        
    vedio:"https://www.youtube.com/embed/V7_18_Xg7uw?si=Qa6JpVmQqhRvHWId",
    pricing: [
      { title: "Access Only This Skill Quest", highlight: false },
      { title: "Skill Quest + ORN-AI Career LaunchPad", highlight: true },
      { title: "ORN-AI Enterprise", highlight: false }
    ]
  },
];

const SkillQuestPage = () => {
  const { id } = useParams();

  const data = cyberLabs.find((item) => item.id === Number(id)) || cyberLabs[0];

  return (
    <div className="w-full">
      <Navbar />

      <HeroBanner
        title={data.title}
        subtitle={data.subtitle}
        image={data.bannerImage}
        height="h-[300px]"
        darkOverlay
      />

      <Section title="Overview">
        <p className="text-gray-700 leading-7 text-lg">{data.overview}</p>
      </Section>
      
      <Section title="Target Audience">
        <p className="text-gray-700 leading-7 text-lg">{data.targetAudienceTex}</p> <br />
       {data.vedio && (
  <iframe
    width="100%"
    height="400"
    src={data.vedio}
    className="rounded-xl shadow-lg"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
)}

      <br />

        <Bullets items={data.targetAudience} />
      </Section>

      <div className="px-4 max-w-[1180px] mx-auto grid md:grid-cols-2 gap-6">
        {data.stats.map((s, i) => (
          <RightStat key={i} {...s} />
        ))}
      </div>

      <Section title="Learning Outcomes">
        <Bullets items={data.learningOutcomes} />
      </Section>

      <Section title="Skills Acquired">
        <Bullets items={data.skills} />
      </Section>

      <Section title="Career Readiness">
        <Bullets items={data.careerRoles} />
      </Section>

      <Section title="Entry Requirements">
        <Bullets items={data.requirements} />
      </Section>

      <Section title="Certificate & Program Details">
        <div className="grid md:grid-cols-2 gap-6">
          {data.infoCards.map((card, i) => (
            <InfoCard key={i} {...card} />
          ))}
          <img src={data.certificateImage} className="rounded-xl border shadow" />
        </div>
      </Section>

      <Section title="Course Syllabus">
        <ol className="list-decimal ml-6 space-y-2 text-lg">
          {data.syllabus.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </Section>

      <Section title="Pricing">
        <div className="grid md:grid-cols-3 gap-6">
          {data.pricing.map((p, i) => (
            <PriceCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
};

/* Utility Components */
const Section = ({ title, children }) => (
  <div className="px-4 max-w-[1180px] mx-auto py-10">
    <h2 className="text-3xl font-bold mb-6">{title}</h2>
    {children}
  </div>
);

const Bullets = ({ items }) => (
  <ul className="space-y-3 text-lg text-gray-700">
    {items.map((i, idx) => (
      <li key={idx}>🟦 {i}</li>
    ))}
  </ul>
);

const RightStat = ({ icon, label, value }) => (
  <div className="flex justify-between px-4 py-3 border rounded-lg bg-[#DDF7D7] shadow">
    <div className="flex items-center gap-2">
      <span>{icon}</span> <span>{label}</span>
    </div>
    <span className="font-semibold">{value}</span>
  </div>
);

const InfoCard = ({ icon, title, text }) => (
  <div className="bg-white rounded-xl p-6 border shadow">
    <div className="text-4xl mb-2">{icon}</div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-700 mt-2">{text}</p>
  </div>
);

const PriceCard = ({ title, highlight }) => (
  <div
    className={`p-6 rounded-xl text-center border shadow ${
      highlight ? "bg-green-500 text-white scale-105" : "bg-[#DDF7D7]"
    }`}
  >
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <button className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold shadow">
      Get Started
    </button>
  </div>
);

export default SkillQuestPage;
