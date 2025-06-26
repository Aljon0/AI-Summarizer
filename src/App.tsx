import { useState } from "react";
import AuthModal from "./components/AuthModal";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import InputSection from "./components/InputSection";
import RecentSummaries from "./components/RecentSummaries";

export default function App() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
  };

  const closeSignInModal = () => {
    setIsSignInModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSignInClick={openSignInModal} />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection onSignInClick={openSignInModal} />
        <InputSection />
        <RecentSummaries onSignInClick={openSignInModal} />
      </main>

      <AuthModal isOpen={isSignInModalOpen} onClose={closeSignInModal} />
    </div>
  );
}
