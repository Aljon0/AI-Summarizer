import { FileText } from "lucide-react";

interface HeroSectionProps {
  onSignInClick: () => void;
}

export default function HeroSection({ onSignInClick }: HeroSectionProps) {
  return (
    <div className="text-center mb-12">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <FileText className="h-8 w-8 text-blue-600" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        AI Text Summarizer
      </h1>
      <p className="text-lg text-gray-600 mb-2">
        Paste your text below and get a concise summary in seconds.
      </p>
      <p className="text-blue-600">
        <button onClick={onSignInClick} className="hover:underline">
          Sign in
        </button>{" "}
        to save and manage your summaries.
      </p>
    </div>
  );
}
