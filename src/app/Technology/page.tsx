"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const TechnologyPage = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Technology data with slugs
  const technologies = {
    frontend: [
      { 
        name: "React", 
        slug: "react",
        icon: "⚛️", 
        description: "A JavaScript library for building user interfaces" 
      },
      { 
        name: "Next.js", 
        slug: "nextjs",
        icon: "🔄", 
        description: "The React framework for production" 
      },
      { 
        name: "TypeScript", 
        slug: "typescript",
        icon: "📝", 
        description: "Strongly typed JavaScript" 
      },
      { 
        name: "Tailwind CSS", 
        slug: "tailwind-css",
        icon: "🎨", 
        description: "Utility-first CSS framework" 
      },
      { 
        name: "Framer Motion", 
        slug: "framer-motion",
        icon: "✨", 
        description: "Production-ready motion library for React" 
      },
    ],
    backend: [
      { 
        name: "Node.js", 
        slug: "nodejs",
        icon: "🟢", 
        description: "JavaScript runtime built on Chrome's V8 engine" 
      },
      { 
        name: "Express", 
        slug: "express",
        icon: "🚂", 
        description: "Fast, unopinionated web framework for Node.js" 
      },
      { 
        name: "GraphQL", 
        slug: "graphql",
        icon: "📊", 
        description: "Query language for APIs" 
      },
      { 
        name: "PostgreSQL", 
        slug: "postgresql",
        icon: "🐘", 
        description: "Powerful open-source relational database" 
      },
      { 
        name: "MongoDB", 
        slug: "mongodb",
        icon: "🍃", 
        description: "NoSQL document database" 
      },
    ],
    devops: [
      { 
        name: "Docker", 
        slug: "docker",
        icon: "🐳", 
        description: "Containerization platform" 
      },
      { 
        name: "Kubernetes", 
        slug: "kubernetes",
        icon: "☸️", 
        description: "Container orchestration system" 
      },
      { 
        name: "AWS", 
        slug: "aws",
        icon: "☁️", 
        description: "Cloud computing platform" 
      },
      { 
        name: "GitHub Actions", 
        slug: "github-actions",
        icon: "⚙️", 
        description: "CI/CD automation" 
      },
      { 
        name: "Terraform", 
        slug: "terraform",
        icon: "🏗️", 
        description: "Infrastructure as code" 
      },
    ],
    testing: [
      { 
        name: "Jest", 
        slug: "jest",
        icon: "🃏", 
        description: "JavaScript testing framework" 
      },
      { 
        name: "Cypress", 
        slug: "cypress",
        icon: "⌨️", 
        description: "End-to-end testing" 
      },
      { 
        name: "React Testing Library", 
        slug: "react-testing-library",
        icon: "🧪", 
        description: "React component testing" 
      },
      { 
        name: "Storybook", 
        slug: "storybook",
        icon: "📚", 
        description: "UI component explorer" 
      },
      { 
        name: "Playwright", 
        slug: "playwright",
        icon: "🎭", 
        description: "Cross-browser testing" 
      },
    ],
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header with Back Button */}
      <header className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold text-white">Technology Stack</h2>
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

      <div className="p-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Technology</h1>
          <p className="text-xl text-gray-300 mb-8">
            Comprehensive overview of modern web development technologies we use
          </p>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {Object.keys(technologies).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-gray-300"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Technology cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technologies[activeCategory as keyof typeof technologies].map((tech) => (
              <motion.div
                key={tech.name}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{tech.icon}</span>
                  <h3 className="text-2xl font-semibold">{tech.name}</h3>
                </div>
                <p className="text-gray-300">{tech.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <Link 
                    href={`/Technology/Learn-more/${tech.slug}`}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 bg-gray-800 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold mb-6">Why This Stack?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">⚡ Performance</h3>
                <p className="text-gray-300">
                  Optimized for fast load times and smooth user experiences with modern tooling.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">🛠️ Maintainability</h3>
                <p className="text-gray-300">
                  TypeScript and modular architecture ensure clean, maintainable code.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">📈 Scalability</h3>
                <p className="text-gray-300">
                  Designed to grow with your user base from prototype to production.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPage;