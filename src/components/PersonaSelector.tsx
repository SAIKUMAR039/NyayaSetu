import React from 'react';
import { GraduationCap, Briefcase, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const personas = [
  {
    id: 'student',
    title: 'Student',
    icon: GraduationCap,
    description: 'Learn about educational rights and academic regulations',
  },
  {
    id: 'worker',
    title: 'Worker',
    icon: Briefcase,
    description: 'Understand labor laws and workplace rights',
  },
  {
    id: 'women',
    title: 'Women',
    icon: Heart,
    description: 'Access resources on women\'s rights and protection',
  },
  {
    id: 'senior',
    title: 'Senior Citizen',
    icon: Users,
    description: 'Know your rights and available support systems',
  },
];

export function PersonaSelector() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {personas.map((persona) => (
        <Link
          key={persona.id}
          to={`/persona/${persona.id}`}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-indigo-100 p-3 rounded-full mb-4">
              <persona.icon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{persona.title}</h3>
            <p className="text-gray-600 text-sm">{persona.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}