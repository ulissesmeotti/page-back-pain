import { ActivitySquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <ActivitySquare className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-900">SpineWell</span>
        </div>
        <div className="flex space-x-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">Como nós trabalhamos</a>
          <a href="#benefits" className="text-gray-600 hover:text-blue-600">Benefícios</a>
          <a href="#ebook" className="text-gray-600 hover:text-blue-600">e-Book</a>
        </div>
      </nav>
    </header>
  );
}