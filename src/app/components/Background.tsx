// components/Background.tsx
import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center">
      {children}
    </div>
  );
};


// components/TextContent.tsx
export const TextContent = () => {
  return (
    <div className="flex flex-col items-center justify-center text-white p-6 space-y-4 mt-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center">Welcome To MNM Technology</h1>
    </div>
  );
};
