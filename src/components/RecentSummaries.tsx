import { FileText } from "lucide-react";

interface RecentSummariesProps {
  onSignInClick: () => void;
}

export default function RecentSummaries({
  onSignInClick,
}: RecentSummariesProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Recent Summaries
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Sign in to save and view your summaries
      </p>

      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <FileText className="h-8 w-8 text-gray-400" />
        </div>
        <p className="text-gray-500 mb-4">
          Sign in to save and manage your summaries
        </p>
        <button
          onClick={onSignInClick}
          className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
