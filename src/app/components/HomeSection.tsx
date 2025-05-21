import Image from "next/image";
import React from "react";
import { HOME_SECTION, COMPANY_INFO } from '@/app/utils/constants'

export const HomeSection = () => {
  return (
    <section className="flex flex-col items-center text-center ">
      <div className="max-w-4xl">
        <p className="text-lg text-white mb-6">
          {HOME_SECTION.description1}
        </p>
        <Image
          src={require("../img/banner_intro-1024x622.png")}
          alt={`${COMPANY_INFO.name} Software Solutions`}
          width={600}
          height={400}
          className="rounded-lg shadow-lg mb-6"
        />
        <p className="text-lg text-white mb-6">
          {HOME_SECTION.description2}
        </p>
        <h2 className="text-2xl font-semibold text-white mt-6">
          {HOME_SECTION.howWeWorkTitle}
        </h2>
        <p className="text-lg text-white mt-4">
          {HOME_SECTION.howWeWorkDescription}
        </p>
      </div>
    </section>
  );
};