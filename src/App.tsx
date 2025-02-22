import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from './lib/auth';
import { AuthPage } from './pages/auth/AuthPage';
import { DashboardPage } from './pages/dashboard/DashboardPage';
import { PersonaSelector } from './components/PersonaSelector';
import { LearningModule } from './components/LearningModule';
import { Header } from './components/Header';
import { LearnPage } from './pages/LearnPage';
import { ResourcesPage } from './pages/Resources';
import { CommunityPage } from './pages/community';
import { HelpPage } from './pages/help';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600" />
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return <>{children}</>;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Your Bridge to Legal Understanding
          </h1>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            Access simplified legal information, learn your rights, and connect with legal resources
            in your preferred language.
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Choose Your Journey
          </h2>
          <PersonaSelector />
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Learning Modules
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

function App() {
  const { loadProfile } = useAuth();

  useEffect(() => {
    loadProfile();
  }, [loadProfile]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path='/learn' element={<LearnPage/>}/>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path='/Resources' element={<ResourcesPage/>}/>
        <Route path='/community' element={<CommunityPage/>}/>
        <Route path='/help' element={<HelpPage/>}/>


      </Routes>
    </Router>
  );
}

export default App;