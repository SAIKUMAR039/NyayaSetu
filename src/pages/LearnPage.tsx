import React from 'react';
import { Header } from '../components/Header';
import { LearningModule } from '../components/LearningModule';

export function LearnPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Our Learning Modules
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LearningModule
              module={{
                id: '1',
                title: 'Introduction to Basic Legal Rights',
                description: 'Learn about fundamental rights and how to protect them in daily life',
                duration: 30,
                points: 100,
                content: 'Module content here...'
              }}
            />
            <LearningModule
              module={{
                id: '2',
                title: 'Understanding Labor Rights',
                description: 'Essential knowledge about workplace rights and regulations',
                duration: 45,
                points: 150,
                content: 'Module content here...'
              }}
            />
            <LearningModule
              module={{
                id: '3',
                title: "Women's Legal Protection",
                description: 'Comprehensive guide to legal safeguards for women',
                duration: 60,
                points: 200,
                content: 'Module content here...'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}