import React from 'react';
import { BookOpen, Clock, Award } from 'lucide-react';
import type { LearningModule as LearningModuleType } from '../types';

interface Props {
  module: LearningModuleType;
}

export function LearningModule({ module }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
        <p className="text-gray-600 mb-4">{module.description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{module.duration} min</span>
          </div>
          <div className="flex items-center">
            <Award className="h-4 w-4 mr-1" />
            <span>{module.points} points</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t">
        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 flex items-center justify-center">
          <BookOpen className="h-4 w-4 mr-2" />
          Start Learning
        </button>
      </div>
    </div>
  );
}