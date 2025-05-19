"use client";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaMobileAlt, FaCloud, FaShieldAlt, FaChartLine } from "react-icons/fa";
import Image from "next/image";

const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      icon: <FaCode className="text-4xl text-blue-500" />,
      description: "Custom, responsive websites built with modern frameworks for optimal performance and user experience.",
      features: ["React/Next.js", "TypeScript", "Tailwind CSS", "SEO Optimized", "Web Accessibility"],
      bgColor: "bg-blue-50"
    },
    {
      title: "Backend Solutions",
      icon: <FaServer className="text-4xl text-green-500" />,
      description: "Robust server-side architectures that scale with your business needs.",
      features: ["Node.js", "Express", "RESTful APIs", "Microservices", "Database Design"],
      bgColor: "bg-green-50"
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="text-4xl text-purple-500" />,
      description: "Cross-platform mobile applications for iOS and Android with native performance.",
      features: ["React Native", "Flutter", "App Store Deployment", "Push Notifications", "Offline Support"],
      bgColor: "bg-purple-50"
    },
    {
      title: "Cloud Services",
      icon: <FaCloud className="text-4xl text-red-500" />,
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      features: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD Pipelines"],
      bgColor: "bg-red-50"
    },
    {
      title: "Security Solutions",
      icon: <FaShieldAlt className="text-4xl text-amber-500" />,
      description: "Comprehensive security audits and implementations to protect your digital assets.",
      features: ["Penetration Testing", "JWT/OAuth", "Data Encryption", "Firewalls", "Security Compliance"],
      bgColor: "bg-amber-50"
    },
    {
      title: "Data Analytics",
      icon: <FaChartLine className="text-4xl text-emerald-500" />,
      description: "Turn your data into actionable insights with powerful visualization and analysis tools.",
      features: ["Business Intelligence", "Custom Dashboards", "Predictive Analytics", "ETL Pipelines", "Big Data"],
      bgColor: "bg-emerald-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/services-bg.jpg"
            alt="Digital services background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Our Professional Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive digital solutions tailored to accelerate your business growth
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">What We Offer</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Transformative Digital Solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-xl shadow-lg overflow-hidden ${service.bgColor}`}
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to elevate your digital presence?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto"
          >
            Let's discuss how our services can transform your business operations and customer experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;