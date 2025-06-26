import { FileText, User } from "lucide-react";

interface HeaderProps {
  onSignInClick: () => void;
}

export default function Header({ onSignInClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-600" />
          </div>
          <button
            onClick={onSignInClick}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <User className="h-5 w-5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </header>
  );
}
