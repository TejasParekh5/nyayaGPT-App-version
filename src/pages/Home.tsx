
import Layout from "@/components/Layout";
import PrimaryButton from "@/components/PrimaryButton";
import Card from "@/components/Card";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleChatbotClick = () => {
    navigate("/chatbot");
  };

  return (
    <Layout>
      <div className="px-5 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-nyaysetu-blue mb-2">
            Namaste, Rahul
          </h1>
          <p className="text-nyaysetu-grey">What would you like to explore today?</p>
        </div>

        {/* Ask a Legal Question */}
        <div className="mb-8">
          <PrimaryButton 
            onClick={handleChatbotClick}
            fullWidth
            className="py-5 flex items-center justify-center text-lg"
          >
            Ask a Legal Question
            <ArrowRight className="ml-2" size={20} />
          </PrimaryButton>
        </div>

        {/* Legal Dramas */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-nyaysetu-blue">
              Watch Legal Dramas
            </h2>
            <span className="text-sm text-nyaysetu-orange cursor-pointer">
              See all
            </span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <LegalDramaCard
              title="Property Rights"
              duration="15 min"
              image="property"
            />
            <LegalDramaCard
              title="Women's Rights"
              duration="12 min"
              image="women"
            />
            <LegalDramaCard
              title="RTI Act"
              duration="10 min"
              image="rti"
            />
          </div>
        </div>

        {/* Quiz of the Day */}
        <div className="mb-8">
          <Card className="p-5">
            <h2 className="text-lg font-semibold text-nyaysetu-blue mb-2">
              Legal Quiz of the Day
            </h2>
            <p className="text-nyaysetu-grey mb-4">
              Test your knowledge on Consumer Rights
            </p>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-nyaysetu-orange h-3 rounded-full"
                style={{ width: "35%" }}
              ></div>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-nyaysetu-grey">3/8 questions</span>
              <span className="text-sm text-nyaysetu-orange cursor-pointer">
                Continue &rarr;
              </span>
            </div>
          </Card>
        </div>

        {/* Recent Legal News */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold text-nyaysetu-blue">
              Recent Legal News
            </h2>
            <span className="text-sm text-nyaysetu-orange cursor-pointer">
              See all
            </span>
          </div>
          <div className="space-y-3">
            <NewsCard
              title="Supreme Court Ruling on Privacy Rights"
              date="May 12, 2023"
              category="Constitutional Law"
            />
            <NewsCard
              title="New Changes to Motor Vehicle Act"
              date="May 10, 2023"
              category="Traffic Laws"
            />
            <NewsCard
              title="Guidelines for Remote Court Hearings"
              date="May 5, 2023"
              category="Court Procedures"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface LegalDramaCardProps {
  title: string;
  duration: string;
  image: string;
}

const LegalDramaCard = ({ title, duration, image }: LegalDramaCardProps) => {
  // Function to determine background based on image prop
  const getBackground = (imageType: string) => {
    switch (imageType) {
      case "property":
        return "bg-gradient-to-br from-blue-500 to-blue-700";
      case "women":
        return "bg-gradient-to-br from-pink-500 to-purple-700";
      case "rti":
        return "bg-gradient-to-br from-green-500 to-green-700";
      default:
        return "bg-gradient-to-br from-nyaysetu-blue to-blue-700";
    }
  };

  return (
    <div className="min-w-[150px] w-36 rounded-xl overflow-hidden shadow-md flex-shrink-0 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <div className={`h-24 ${getBackground(image)} flex items-center justify-center`}>
        <div className="h-10 w-10 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="p-2">
        <h3 className="font-medium text-sm mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs text-nyaysetu-grey">{duration}</p>
      </div>
    </div>
  );
};

interface NewsCardProps {
  title: string;
  date: string;
  category: string;
}

const NewsCard = ({ title, date, category }: NewsCardProps) => {
  return (
    <Card className="cursor-pointer">
      <div className="flex justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-nyaysetu-blue mb-1">{title}</h3>
          <div className="flex items-center text-xs text-nyaysetu-grey">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span className="text-nyaysetu-orange">{category}</span>
          </div>
        </div>
        <div className="ml-3 flex items-center">
          <ArrowRight className="text-nyaysetu-grey" size={18} />
        </div>
      </div>
    </Card>
  );
};

export default Home;
