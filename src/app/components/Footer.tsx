import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";
import { COMPANY_INFO, FOOTER } from '@/app/utils/constants'

export const Footer = () => {
  return (
    <div className="flex bg-black text-white p-10">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl font-bold" style={{ color: "white" }}>
          {FOOTER.contactTitle}
        </h2>
        <div className="bg-black text-white py-10 px-6 flex justify-between text-sm">
          <div>
            <h4 className="font-semibold">Find Us</h4>
            <p>{COMPANY_INFO.name}</p>
          </div>
          <div>
            <h4 className="font-semibold">Call us</h4>
            <p>{COMPANY_INFO.phone}</p>
          </div>
          <div>
            <h4 className="font-semibold">Mail us</h4>
            <p>{COMPANY_INFO.email}</p>
          </div>
        </div>

        <footer className="bg-black text-white p-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold">{COMPANY_INFO.name}</h2>
              <p className="mt-4 text-sm text-gray-300">
                {FOOTER.companyDescription}
              </p>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold">{FOOTER.linksTitle}</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                {FOOTER.links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="hover:text-white">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold">{FOOTER.socialTitle}</h3>
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