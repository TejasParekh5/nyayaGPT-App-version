
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "@/components/PrimaryButton";
import { Languages, Mic } from "lucide-react";

const languages = [
  { id: "en", name: "English" },
  { id: "hi", name: "हिन्दी (Hindi)" },
  { id: "bn", name: "বাংলা (Bengali)" },
  { id: "ta", name: "தமிழ் (Tamil)" },
  { id: "te", name: "తెలుగు (Telugu)" },
  { id: "mr", name: "मराठी (Marathi)" },
  { id: "gu", name: "ગુજરાતી (Gujarati)" },
  { id: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { id: "ml", name: "മലയാളം (Malayalam)" },
  { id: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
];

const LanguageSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/home");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectLanguage = (langId: string) => {
    setSelectedLanguage(langId);
    setIsDropdownOpen(false);
  };

  // Find the selected language name
  const selectedLangName = languages.find(
    (lang) => lang.id === selectedLanguage
  )?.name;

  return (
    <div className="flex flex-col min-h-screen bg-white px-6 pt-16 pb-8">
      <div className="flex-1">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4 text-nyaysetu-blue text-center">
            Choose Your Language
          </h1>
          <p className="text-nyaysetu-grey text-center">
            Select the language you're most comfortable with
          </p>
        </div>

        <div className="mb-8 relative">
          <div
            className="border border-gray-300 rounded-xl p-4 flex items-center justify-between cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center">
              <Languages className="text-nyaysetu-blue mr-3" size={24} />
              <span className="text-lg">{selectedLangName}</span>
            </div>
            <div className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute left-0 right-0 mt-2 border border-gray-200 rounded-xl bg-white shadow-lg z-10 max-h-64 overflow-y-auto">
              {languages.map((language) => (
                <div
                  key={language.id}
                  className={`p-4 cursor-pointer ${
                    selectedLanguage === language.id
                      ? "bg-nyaysetu-blue text-white"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => selectLanguage(language.id)}
                >
                  {language.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mb-12">
          <div className="border border-gray-300 rounded-xl p-4 flex items-center">
            <Mic className="text-nyaysetu-blue mr-3" size={24} />
            <span className="text-lg">Voice Selection</span>
            <div className="ml-auto">
              <div className="w-12 h-6 bg-gray-200 rounded-full flex items-center p-1 cursor-pointer">
                <div className="w-4 h-4 bg-nyaysetu-blue rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PrimaryButton onClick={handleContinue} fullWidth>
        Continue
      </PrimaryButton>
    </div>
  );
};

export default LanguageSelection;
