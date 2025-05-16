
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { useNavigate } from "react-router-dom";
import { Award } from "lucide-react";

const LearnPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="px-5 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-nyaysetu-blue mb-2">
            Legal Learning Center
          </h1>
          <p className="text-nyaysetu-grey">
            Explore legal topics through interactive modules
          </p>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-nyaysetu-grey">My Progress</span>
            <div className="flex items-center">
              <span className="text-xl font-bold text-nyaysetu-blue">245 XP</span>
              <Award className="text-nyaysetu-orange ml-2" size={20} />
            </div>
          </div>
          <div className="flex items-center bg-gray-100 rounded-full p-1">
            <button className="px-4 py-1.5 bg-nyaysetu-blue text-white rounded-full text-sm">
              Topics
            </button>
            <button className="px-4 py-1.5 text-nyaysetu-grey text-sm">
              My Courses
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8">
          <LegalTopicCard
            title="Property Rights"
            description="Learn about property ownership, rental agreements, and disputes"
            progress={75}
            modules={4}
            color="blue"
          />
          <LegalTopicCard
            title="Women's Rights"
            description="Understand legal protections for women in various situations"
            progress={40}
            modules={5}
            color="purple"
          />
          <LegalTopicCard
            title="Consumer Protection"
            description="Know your rights as a consumer and redressal mechanisms"
            progress={20}
            modules={3}
            color="green"
          />
          <LegalTopicCard
            title="Employment Laws"
            description="Learn about workplace rights, contracts and disputes"
            progress={0}
            modules={6}
            color="orange"
          />
          <LegalTopicCard
            title="RTI Act"
            description="How to use the Right to Information effectively"
            progress={0}
            modules={3}
            color="red"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
            Daily Legal Quiz
          </h2>
          <Card className="bg-gradient-to-r from-nyaysetu-blue to-blue-700 text-white p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold mb-2">Constitution Quiz</h3>
                <p className="opacity-90 mb-3">5 questions • 50 XP reward</p>
                <button className="bg-white text-nyaysetu-blue px-4 py-2 rounded-lg font-medium">
                  Start Now
                </button>
              </div>
              <div className="text-5xl opacity-50">🏛️</div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

interface LegalTopicCardProps {
  title: string;
  description: string;
  progress: number;
  modules: number;
  color: "blue" | "purple" | "green" | "orange" | "red";
}

const LegalTopicCard = ({
  title,
  description,
  progress,
  modules,
  color,
}: LegalTopicCardProps) => {
  // Function to determine the gradient based on color prop
  const getGradient = (colorType: string) => {
    switch (colorType) {
      case "blue":
        return "from-blue-500 to-blue-700";
      case "purple":
        return "from-purple-500 to-purple-700";
      case "green":
        return "from-green-500 to-green-700";
      case "orange":
        return "from-orange-500 to-orange-700";
      case "red":
        return "from-red-500 to-red-700";
      default:
        return "from-nyaysetu-blue to-blue-700";
    }
  };

  return (
    <Card className="cursor-pointer overflow-hidden">
      <div className={`h-2 bg-gradient-to-r ${getGradient(color)} mb-3`}></div>
      <div className="px-1">
        <h3 className="text-lg font-semibold text-nyaysetu-blue mb-1">
          {title}
        </h3>
        <p className="text-sm text-nyaysetu-grey mb-3">{description}</p>
        
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs text-nyaysetu-grey">
            {modules} modules
          </span>
          <span className="text-xs text-nyaysetu-grey">
            {progress}% complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`bg-gradient-to-r ${getGradient(color)} h-2 rounded-full transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default LearnPage;
