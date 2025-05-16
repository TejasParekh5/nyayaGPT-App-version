
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/PrimaryButton";

const Splash = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/onboarding");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      <div className="text-center">
        <div className="h-48 w-48 mb-8 mx-auto flex items-center justify-center">
          {/* Logo placeholder with animation */}
          <div className="h-40 w-40 bg-nyaysetu-blue rounded-full flex items-center justify-center text-white text-5xl font-bold animate-pulse-scale">
            NS
          </div>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 text-nyaysetu-blue">NyaySetu</h1>
        <p className="text-xl text-nyaysetu-grey mb-12">Justice in Your Language, Instantly.</p>
        
        <PrimaryButton 
          onClick={handleGetStarted}
          fullWidth
          className="animate-fade-in"
        >
          Get Started
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Splash;
