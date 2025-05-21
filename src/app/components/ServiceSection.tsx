import Image from "next/image";
import Link from "next/link";
import { SERVICES } from '@/app/utils/constants'

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

export const ServicesSection = () => {
  return (
    <div className="flex flex-col bg-black text-white px-10 py-16">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-8">{SERVICES.title}</h2>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {SERVICES.items.map((service, index) => (
            <ServiceCard
              key={index}
              image={require(`../img/article${index + 1}.jpg`)}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <Link href="/Service">
          <button className="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-200 transition">
            {SERVICES.ctaText}
          </button>
        </Link>
      </div>
    </div>
  );
};