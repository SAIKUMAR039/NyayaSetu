import React from "react";
import { Header } from "../components/Header";

export function ResourcesPage() {
  const resources = [
    {
      title: "Know Your Rights",
      description: "A comprehensive guide to understanding fundamental legal rights in different scenarios.",
      link: "#",
    },
    {
      title: "Legal Aid Services",
      description: "Find free and affordable legal aid services near you.",
      link: "#",
    },
    {
      title: "Government Laws & Policies",
      description: "Stay updated with the latest government laws and legal amendments.",
      link: "#",
    },
    {
      title: "Online Legal Consultation",
      description: "Connect with verified legal professionals for real-time consultation.",
      link: "#",
    },
    {
      title: "Legal Document Templates",
      description: "Access ready-to-use templates for contracts, agreements, and more.",
      link: "#",
    },
    {
      title: "FAQs on Legal Issues",
      description: "Commonly asked questions and answers about legal matters.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Legal Resources
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Explore essential legal resources to stay informed and empowered.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-700">{resource.description}</p>
                <a
                  href={resource.link}
                  className="text-blue-600 hover:underline mt-2 inline-block"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-700 text-lg">
            Need personalized legal guidance?
          </p>
          <a
            href="#"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Contact Legal Experts
          </a>
        </div>
      </div>
    </div>
  );
}
