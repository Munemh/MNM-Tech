"use client";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers, FaCodeBranch } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";

const TeamPage = () => {
  const teamMembers = [
    // Senior Unreal Developers
    {
      name: "Alex Chen",
      role: "Lead Unreal Developer",
      department: "Engineering",
      experience: "12 years",
      image: "/team/alex-chen.jpg",
      skills: ["Unreal Engine 5", "C++", "Blueprints", "Multiplayer"],
      isSenior: true
    },
    {
      name: "Sarah Johnson",
      role: "Senior Unreal Engineer",
      department: "Engineering",
      experience: "8 years",
      image: "/team/sarah-johnson.jpg",
      skills: ["VR Development", "Physics Simulation", "Niagara"],
      isSenior: true
    },
    {
      name: "Michael Rodriguez",
      role: "Technical Director",
      department: "Engineering",
      experience: "15 years",
      image: "/team/michael-rodriguez.jpg",
      skills: ["Architecture", "Performance Optimization", "Rendering"],
      isSenior: true
    },

    // Mid-Level Unreal Developers
    {
      name: "David Kim",
      role: "Unreal Developer",
      department: "Engineering",
      experience: "5 years",
      image: "/team/david-kim.jpg",
      skills: ["Gameplay Systems", "AI", "Animation"],
      isSenior: false
    },
    {
      name: "Emma Wilson",
      role: "Unreal Developer",
      department: "Engineering",
      experience: "4 years",
      image: "/team/emma-wilson.jpg",
      skills: ["UI/UX", "Blueprint Communication", "Cinematics"],
      isSenior: false
    },

    // Junior/Intern Unreal Developers
    {
      name: "Ryan Park",
      role: "Junior Unreal Developer",
      department: "Engineering",
      experience: "1 year",
      image: "/team/ryan-park.jpg",
      skills: ["Level Design", "Material Editing", "Basic Blueprints"],
      isIntern: true
    },
    {
      name: "Olivia Martinez",
      role: "Unreal Engine Intern",
      department: "Engineering",
      experience: "6 months",
      image: "/team/olivia-martinez.jpg",
      skills: ["Asset Implementation", "Lighting", "Documentation"],
      isIntern: true
    },

    // Managers
    {
      name: "James Wilson",
      role: "Development Manager",
      department: "Management",
      experience: "10 years",
      image: "/team/james-wilson.jpg",
      skills: ["Project Planning", "Agile Methodologies", "Team Leadership"],
      isManager: true
    },
    {
      name: "Priya Patel",
      role: "Technical Producer",
      department: "Management",
      experience: "7 years",
      image: "/team/priya-patel.jpg",
      skills: ["Pipeline Management", "Risk Assessment", "Coordination"],
      isManager: true
    },

    // HR
    {
      name: "Robert Taylor",
      role: "HR Director",
      department: "Human Resources",
      experience: "9 years",
      image: "/team/robert-taylor.jpg",
      skills: ["Talent Acquisition", "Employee Relations", "Benefits"],
      isHR: true
    },
    {
      name: "Jennifer Lee",
      role: "HR Specialist",
      department: "Human Resources",
      experience: "4 years",
      image: "/team/jennifer-lee.jpg",
      skills: ["Onboarding", "Training Programs", "Culture Development"],
      isHR: true
    },

    // Additional Unreal Developers
    {
      name: "Daniel Brown",
      role: "Unreal Developer",
      department: "Engineering",
      experience: "3 years",
      image: "/team/daniel-brown.jpg",
      skills: ["Procedural Generation", "Shader Programming", "Plugin Development"],
      isSenior: false
    },
    {
      name: "Sophia Garcia",
      role: "Unreal Developer",
      department: "Engineering",
      experience: "2 years",
      image: "/team/sophia-garcia.jpg",
      skills: ["Environment Art", "Landscaping", "Optimization"],
      isSenior: false
    },
    {
      name: "Ethan Wright",
      role: "Unreal Engine Intern",
      department: "Engineering",
      experience: "3 months",
      image: "/team/ethan-wright.jpg",
      skills: ["Bug Testing", "Version Control", "Asset Organization"],
      isIntern: true
    },
    {
      name: "Ava Thompson",
      role: "Junior Unreal Developer",
      department: "Engineering",
      experience: "1.5 years",
      image: "/team/ava-thompson.jpg",
      skills: ["Character Animation", "State Machines", "Sound Integration"],
      isIntern: false
    }
  ];

  const departments = [
    { name: "Engineering", icon: <FaUsers className="text-3xl" />, count: 11 },
    { name: "Management", icon: <FaUserTie className="text-3xl" />, count: 2 },
    { name: "Human Resources", icon: <FaUsers className="text-3xl" />, count: 2 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white">Team</h2>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/team-bg.jpg')] bg-cover opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The talented individuals powering our Unreal Engine projects
          </motion.p>
        </div>
      </div>

      {/* Department Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {departments.map((dept, index) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <div className="flex justify-center text-blue-600 mb-4">
                {dept.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{dept.name}</h3>
              <p className="mt-2 text-gray-600">{dept.count} team members</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 sm:pb-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Our Experts</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unreal Engine Specialists
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.floor(index / 5) * 0.2 }}
              whileHover={{ y: -5 }}
              className={`rounded-lg shadow-md overflow-hidden ${member.isSenior ? "border-t-4 border-blue-500" :
                  member.isIntern ? "border-t-4 border-green-500" :
                    member.isManager ? "border-t-4 border-purple-500" :
                      member.isHR ? "border-t-4 border-amber-500" :
                        "border-t-4 border-gray-300"
                }`}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gray-300">{member.role}</p>
                </div>
                {member.department === "Engineering" && (
                  <div className="absolute top-4 right-4 bg-blue-600 p-2 rounded-full">
                    <SiUnrealengine className="text-white text-xl" />
                  </div>
                )}
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between text-sm text-gray-500 mb-3">
                  <span>{member.department}</span>
                  <span>{member.experience} exp</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Culture Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Our Development Culture
              </h2>
              <p className="text-gray-300 text-lg mb-4">
                We foster an environment of continuous learning and innovation in Unreal Engine development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCodeBranch className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Weekly Unreal Engine tech shares</span>
                </li>
                <li className="flex items-start">
                  <FaCodeBranch className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Mentorship program for junior developers</span>
                </li>
                <li className="flex items-start">
                  <FaCodeBranch className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                  <span>Regular game jams and hackathons</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <Image
                src="/team-culture.jpg"
                alt="Team working together"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;