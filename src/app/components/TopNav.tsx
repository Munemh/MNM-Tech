import React from "react";
import { FaCalendarAlt, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { COMPANY_INFO } from '@/app/utils/constants'

export function TopNav() {
  return (
    <div className="bg-black text-white py-3 px-4 flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm gap-2">
      <div className="flex items-center gap-2">
        <FaPhoneAlt size={14} />
        <span>Call us for Free Consultancy {COMPANY_INFO.phone}</span>
      </div>
      <div className="hidden md:flex items-center gap-2">
        <FaCalendarAlt size={14} />
        <span>{COMPANY_INFO.workingHours}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaEnvelope size={14} />
        <span className="hidden sm:block">{COMPANY_INFO.email}</span>
      </div>
      <div className="flex items-center gap-2">
        <FaMapMarkerAlt size={14} />
        <span className="hidden sm:block">{COMPANY_INFO.address}</span>
      </div>
    </div>
  );
}