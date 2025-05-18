// components/Background.tsx
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
    <div className="text-center text-white p-6">
      <h1 className="text-5xl font-bold">Welcome To MNM Technology</h1>
    </div>
  );
};
