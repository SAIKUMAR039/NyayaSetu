import React from "react";
import { Header } from "../components/Header";

export function HelpPage() {
  const faqs = [
    {
      question: "How can I access legal resources?",
      answer: "You can browse our Legal Resources section for guides, laws, and legal aid services.",
    },
    {
      question: "Is the platform free to use?",
      answer: "Yes, basic legal resources and consultations are free. Some premium services may require payment.",
    },
    {
      question: "How do I get legal assistance?",
      answer: "You can connect with verified legal professionals through our Legal Aid section.",
    },
    {
      question: "Can I use the platform in my regional language?",
      answer: "Yes, our platform supports multiple languages using Bhashini API for translation.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Help & Support
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Find answers to common questions or contact our support team for assistance.
          </p>

          {/* FAQs Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Need More Help?
            </h3>
            <p className="text-gray-700 mb-4">
              If you need further assistance, feel free to contact our support team.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 font-semibold">Email:</p>
              <p className="text-blue-600">support@legalplatform.com</p>
              <p className="text-gray-800 font-semibold mt-4">Phone:</p>
              <p className="text-blue-600">+91 98765 43210</p>
              <p className="text-gray-800 font-semibold mt-4">Live Chat:</p>
              <a
                href="#"
                className="text-blue-600 hover:underline"
              >
                Start Chat
              </a>
            </div>
          </div>

          {/* Help Resources */}
          <div className="text-center">
            <p className="text-gray-700 text-lg">
              Explore our help guides and tutorials.
            </p>
            <a
              href="#"
              className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
