import React from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  url: string;
  features: string[];
  logo: string;
}

function ServiceCard({ title, description, url, features, logo }: ServiceCardProps) {
  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 mr-4 flex-shrink-0">
            <Image 
              src={logo} 
              alt={`${title} logo`} 
              width={48} 
              height={48}
              className="rounded-lg object-contain bg-white p-1"
            />
          </div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 mb-6">{description}</p>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-300">
              <svg className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-white font-semibold group-hover:text-blue-400 transition-colors"
        >
          Visit Website
          <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const services = [
    {
      title: "Slur",
      description: "The all-in-one platform for classical musicians.",
      url: "https://slur.stella-dev.org/",
      logo: "/assets/slur-logo.png",
      features: [
        "Real-time audition aggregation",
        "Smart musician matching",
        "One-touch application system",
        "Automated career portfolio"
      ]
    },
    {
      title: "Abohaeng",
      description: "AI-powered emotional diary for your daily life.",
      url: "https://abohaeng.stella-dev.org/",
      logo: "/assets/abohaeng-logo.png",
      features: [
        "Multi-modal diary (Text, Photo, Voice)",
        "Empathetic AI feedback",
        "Self-reflection analytics",
        "Discovering ordinary happiness"
      ]
    },
    {
      title: "Day 100",
      description: "Build lasting habits with a 100-day challenge.",
      url: "https://day100.stella-dev.org/",
      logo: "/assets/day100-logo.png",
      features: [
        "AI-personalized challenges",
        "Growth tracking dashboard",
        "Community motivation",
        "Milestone rewards system"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Discover our ecosystem of applications designed to enhance your lifestyle and career.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}