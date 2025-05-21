import Image from "next/image";
import Link from "next/link";
import { ABOUT_US, COMPANY_INFO } from '@/app/utils/constants'

export const AboutUsCard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white p-6 md:p-10">
      <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
        <h2 className="text-3xl md:text-4xl font-bold">{ABOUT_US.title}</h2>
        <p className="mt-4 text-gray-300">
          {ABOUT_US.description.replace("{year}", COMPANY_INFO.foundedYear)}
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
            {ABOUT_US.ctaText}
          </span>
          <span className="relative invisible">{ABOUT_US.ctaText}</span>
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center relative mb-6 lg:mb-0 order-1 lg:order-2">
        <div className="relative z-10 w-full max-w-md">
          <Image
            src={require("../img/about.png")}
            alt={ABOUT_US.title}
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};