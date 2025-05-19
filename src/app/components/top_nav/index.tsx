import Image from "next/image";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Link from "next/link";
export function TopNav() {
  return (
    <div className="bg-black text-white py-3 px-4 flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm gap-2">
      <div className="flex items-center gap-2">
        <FaPhoneAlt size={14} />
        <span>Call us for Free Consultancy +92 316 5338040</span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <FaCalendarAlt size={14} />
        <span>Mon – Fri 09:00 – 17:00 / Sat 09:00 – 14:00</span>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope size={14} />
        <span className="hidden sm:block">munem.habib1@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt size={14} />
        <span className="hidden sm:block">Rawalpindi, Pakistan</span>
      </div>
    </div>
  );
}

export const HomeSection = () => {
  return (
    <section className="flex flex-col items-center text-center ">
      <div className="max-w-4xl">
        {/* <h1 className="text-4xl font-bold text-white mb-6">MNM TECHNOLOGIES</h1> */}
        <p className="text-lg text-white mb-6">
          Empowering businesses through custom software solutions, MNM Technologies helps startups and enterprises alike
          build scalable, efficient, and modern digital products. From web and mobile development to cloud integration and DevOps,
          we’ve got you covered.
        </p>
        <Image
          src={require("../../img/banner_intro-1024x622.png")}
          alt="MNM Technologies Software Solutions"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-lg text-white mb-6">
          At MNM Technologies, we believe in agile, client-first development. We partner closely with our clients to understand
          their needs, define scalable architectures, and deliver reliable digital solutions that stand the test of time.
        </p>
        <h2 className="text-2xl font-semibold text-white mt-6">How We Work</h2>
        <p className="text-lg text-white mt-4">
          Our approach centers on long-term partnerships built on trust and transparency. We leverage the latest technologies,
          industry best practices, and a dedicated development team to help our clients succeed in the digital space.
        </p>
      </div>
    </section>
  );
};

export const AboutUsCard = () => {
  return (
    <div className="flex bg-black text-white p-10">
      <div className="w-1/2 flex flex-col justify-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="mt-4 text-gray-300">
          MNM Technologies is a Pakistan-based software house focused on delivering robust web, mobile, and cloud-based
          solutions to clients across the globe. Founded in 2023, we strive to build innovative digital products that solve
          real-world problems and drive growth.
        </p>

        <Link
          href="/contact"
          className="mt-5 group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-lg shadow-lg bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
        >
          <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 bg-blue-700/30">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full">
            Get in Touch
          </span>
          <span className="relative invisible">Get in Touch</span>
        </Link>

      </div>
      <div className="w-1/2 flex justify-center relative">
        <div className="relative z-10">
          <Image
            src={require("../../img/about.png")}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

interface ServiceCard {
  image: string;
  title: string;
  description?: string;
}

export const ServiceCard = ({ image, title, description }: ServiceCard) => {
  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-lg">
      <Image
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
  );
};

const services = [
  {
    image: require("../../img/article1.jpg"),
    title: "Web Development",
    description:
      "We build responsive, fast, and scalable websites using modern stacks like MERN, Next.js, and more tailored to your business goals.",
  },
  {
    image: require("../../img/article2.jpg"),
    title: "Mobile App Development",
    description:
      "Our team crafts intuitive Android and iOS apps using React Native and Flutter, ensuring smooth user experiences across devices.",
  },
  {
    image: require("../../img/article3.jpg"),
    title: "Cloud & DevOps",
    description:
      "We help businesses scale with CI/CD pipelines, containerization, and cloud-native solutions on AWS, Azure, and GCP.",
  },
];

// export const ServicesSection = () => {
//   return (
//     <div className="flex bg-black text-white p-10">
//       <div className="flex flex-col justify-center">
//         <h2 className="text-4xl font-bold" style={{ color: "white" }}>
//           Services
//         </h2>
//         <div className="bg-black text-white py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <ServiceCard key={index} {...service} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
export const ServicesSection = () => {
  return (
    <div className="flex flex-col bg-black text-white px-10 py-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-8">Services</h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <Link href="/Service">
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};


export const Footer = () => {
  return (
    <div className="flex bg-black text-white p-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold" style={{ color: "white" }}>
          Contact Us
        </h2>
        <div className="bg-black text-white py-10 px-6 flex justify-between text-sm">
          <div>
            <h4 className="font-semibold">Find Us</h4>
            <p>MNM Technologies</p>
          </div>
          <div>
            <h4 className="font-semibold">Call us</h4>
            <p>+92 316 5338040</p>
          </div>
          <div>
            <h4 className="font-semibold">Mail us</h4>
            <p>munem.habib1@gmail.com</p>
          </div>
        </div>

        <footer className="bg-black text-white p-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold">MNM Technologies</h2>
              <p className="mt-4 text-sm text-gray-300">
                MNM Technologies is a modern software house committed to delivering high-quality digital products. With
                expertise in full-stack development, DevOps, and cloud solutions, we help startups and enterprises innovate
                faster and smarter.
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="/contact" className="hover:text-white">Contact</a></li>
                <li><a href="/experties" className="hover:text-white">Our Experties</a></li>
                <li><a href="#services" className="hover:text-white">Services</a></li>
                <li><a href="/Technology" className="hover:text-white">Technology Stack</a></li>
                <li><a href="/Team" className="hover:text-white">Meet Our Team</a></li>
                <li><a href="/privacy-policy" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold">Social Media</h3>
              <div className="mt-4 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaEnvelope /></a>
                <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
