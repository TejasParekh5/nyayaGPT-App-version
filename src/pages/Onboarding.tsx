
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/PrimaryButton";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Break the language barrier",
    description: "Access legal information in your preferred language and understand complex legal terms easily.",
    illustration: "language-barriers",
  },
  {
    id: 2,
    title: "Understand your rights through AI",
    description: "Ask questions to our AI chatbot and get accurate legal information instantly.",
    illustration: "ai-chatbot",
  },
  {
    id: 3,
    title: "Learn through stories and quizzes",
    description: "Engage with interactive content to better understand complex legal concepts.",
    illustration: "natak-learning",
  },
];

const Onboarding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/language-selection");
    }
  };

  const renderIllustration = (type: string) => {
    // Placeholder illustrations
    switch (type) {
      case "language-barriers":
        return (
          <div className="h-64 w-64 mx-auto mb-6 bg-gradient-to-br from-nyaysetu-blue to-blue-300 rounded-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">🗣️</div>
              <div className="text-xs">Multi-language Support</div>
            </div>
          </div>
        );
      case "ai-chatbot":
        return (
          <div className="h-64 w-64 mx-auto mb-6 bg-gradient-to-br from-nyaysetu-blue to-blue-300 rounded-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">🤖</div>
              <div className="text-xs">AI-Powered Legal Assistant</div>
            </div>
          </div>
        );
      case "natak-learning":
        return (
          <div className="h-64 w-64 mx-auto mb-6 bg-gradient-to-br from-nyaysetu-blue to-blue-300 rounded-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">📱</div>
              <div className="text-xs">Interactive Learning</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-1 flex flex-col justify-between px-6 pt-16 pb-20">
        <div className="text-center">
          {renderIllustration(currentSlideData.illustration)}
          <h1 className="text-2xl font-bold mb-4 text-nyaysetu-blue">
            {currentSlideData.title}
          </h1>
          <p className="text-nyaysetu-grey mb-8">
            {currentSlideData.description}
          </p>
        </div>

        <div className="w-full">
          {/* Progress indicator */}
          <div className="flex justify-center mb-12">
            {slides.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 rounded-full mx-1 ${
                  idx === currentSlide
                    ? "bg-nyaysetu-orange w-8"
                    : "bg-gray-300"
                } transition-all duration-300`}
              ></div>
            ))}
          </div>

          <PrimaryButton 
            onClick={handleNext} 
            fullWidth
            className="flex items-center justify-center"
          >
            Continue
            <ArrowRight className="ml-2" size={20} />
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
