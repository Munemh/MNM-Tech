"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaCloud, FaShieldAlt } from "react-icons/fa";

const ExpertisePage = () => {
  const expertiseAreas = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: "We build responsive, accessible, and performant user interfaces using React, Next.js, and modern CSS frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-4xl text-green-500" />,
      description: "Robust server-side solutions with Node.js, Express, and serverless architectures for scalable applications.",
      technologies: ["Node.js", "Express", "NestJS", "Python", "Ruby on Rails"]
    },
    {
      title: "Mobile Development",
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      description: "Cross-platform mobile applications with React Native and Flutter for seamless iOS and Android experiences.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      title: "Database Solutions",
      icon: <FaDatabase className="text-4xl text-yellow-500" />,
      description: "Optimized data storage and retrieval with both SQL and NoSQL database technologies.",
      technologies: ["PostgreSQL", "MongoDB", "Firebase", "MySQL", "Redis"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-4xl text-red-500" />,
      description: "Cloud infrastructure setup, CI/CD pipelines, and containerized deployments for reliable applications.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions"]
    },
    {
      title: "Security",
      icon: <FaShieldAlt className="text-4xl text-indigo-500" />,
      description: "Comprehensive security practices including authentication, authorization, and data protection.",
      technologies: ["OAuth", "JWT", "SSL/TLS", "Penetration Testing", "Security Audits"]
    }
  ];

  const stats = [
    { value: "100+", label: "Projects Completed" },
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Satisfied Clients" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Our Expertise</h1>
          <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Areas */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Excel At</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with industry knowledge to deliver exceptional digital solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((expertise, index) => (
              <motion.div
                key={expertise.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {expertise.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{expertise.title}</h3>
                <p className="text-gray-600 mb-4">{expertise.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-blue-700 rounded-xl p-8 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Leverage Our Expertise?</h2>
            <p className="mb-6">Let's discuss how we can help bring your project to life with our technical skills and industry experience.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-gray-100"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default ExpertisePage;