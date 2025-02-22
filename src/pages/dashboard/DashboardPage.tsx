import { useAuth } from '../../lib/auth';
import { Layout } from '../../components/layout/Layout';
import { Button } from '../../components/ui/Button';
import { BookOpen, Award, Clock } from 'lucide-react';

export function DashboardPage() {
  const { profile } = useAuth();

  const learningModules = [
    {
      id: '1',
      title: 'Introduction to Basic Rights',
      progress: 60,
      duration: '30 min',
    },
    {
      id: '2',
      title: 'Understanding Labor Laws',
      progress: 25,
      duration: '45 min',
    },
    {
      id: '3',
      title: 'Family Law Basics',
      progress: 0,
      duration: '60 min',
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Welcome back, {profile?.username}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Modules Completed</p>
                  <p className="text-2xl font-bold">3/12</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Points Earned</p>
                  <p className="text-2xl font-bold">450</p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-600">Time Spent</p>
                  <p className="text-2xl font-bold">4.5h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-4">Continue Learning</h3>
          <div className="space-y-4">
            {learningModules.map((module) => (
              <div key={module.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{module.title}</h4>
                  <span className="text-sm text-gray-500">{module.duration}</span>
                </div>
                <div className="relative pt-1">
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-100">
                    <div
                      style={{ width: `${module.progress}%` }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600"
                    />
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {module.progress > 0 ? 'Continue' : 'Start'} Learning
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}