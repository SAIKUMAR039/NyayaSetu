import React from "react";
import { Header } from "../components/Header";

export function CommunityPage() {
  const discussions = [
    {
      title: "Understanding Cyber Laws",
      description: "Discuss the latest updates on cyber laws and digital rights.",
      link: "#",
    },
    {
      title: "Land Dispute Resolutions",
      description: "How to resolve land disputes legally? Share your experiences.",
      link: "#",
    },
    {
      title: "Consumer Protection Rights",
      description: "Know your rights as a consumer and share legal case studies.",
      link: "#",
    },
  ];

  const events = [
    {
      title: "Legal Awareness Webinar",
      date: "March 10, 2025",
      description: "An interactive session with legal experts on your rights.",
      link: "#",
    },
    {
      title: "Women’s Legal Rights Workshop",
      date: "March 15, 2025",
      description: "Learn about legal protections for women in the workplace.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Community Discussions & Events
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Connect with others, share legal knowledge, and stay updated with upcoming events.
          </p>

          {/* Community Discussions */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Ongoing Discussions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discussions.map((discussion, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{discussion.title}</h4>
                  <p className="text-gray-700">{discussion.description}</p>
                  <a
                    href={discussion.link}
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Join Discussion
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Upcoming Events
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-gray-700">{event.description}</p>
                  <a
                    href={event.link}
                    className="text-blue-600 hover:underline mt-2 inline-block"
                  >
                    Register Now
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-700 text-lg">
              Want to be part of our legal community?
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Join the Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
