import { AuthForm } from '../../components/auth/AuthForm';
import { Scale } from 'lucide-react';
import { Header } from '../../components/Header';

export function AuthPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Scale className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Welcome to NyayaSetu
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Your bridge to legal understanding
          </p>
        </div>
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthForm />
        </div>
      </div>
    </div>
    </>
  );
}