
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import PrimaryButton from "@/components/PrimaryButton";
import { Phone, MessageSquare } from "lucide-react";

const LegalAid = () => {
  return (
    <Layout>
      <div className="px-5 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-nyaysetu-blue mb-2">
            Legal Aid
          </h1>
          <p className="text-nyaysetu-grey">
            Connect with legal services and get the support you need
          </p>
        </div>

        {/* Connect to Legal Services */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
            Connect to Legal Services
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center text-center py-4 cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <img 
                  src="https://via.placeholder.com/64" 
                  alt="NALSA" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="font-semibold text-nyaysetu-blue mb-1">NALSA</h3>
              <p className="text-xs text-nyaysetu-grey">
                National Legal Services Authority
              </p>
            </Card>
            <Card className="flex flex-col items-center text-center py-4 cursor-pointer">
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <img 
                  src="https://via.placeholder.com/64" 
                  alt="Volunteer Lawyers" 
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="font-semibold text-nyaysetu-blue mb-1">
                Volunteer Lawyers
              </h3>
              <p className="text-xs text-nyaysetu-grey">
                Pro-bono legal assistance
              </p>
            </Card>
          </div>
        </div>

        {/* Live Chat and Helpline */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-4">
            <PrimaryButton
              className="flex items-center justify-center gap-2"
              variant="secondary"
            >
              <MessageSquare size={18} />
              Live Chat
            </PrimaryButton>
            <PrimaryButton
              className="flex items-center justify-center gap-2"
              variant="primary"
            >
              <Phone size={18} />
              Helpline
            </PrimaryButton>
          </div>
        </div>

        {/* Emergency Legal Info */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
            Emergency Legal Information
          </h2>
          <div className="space-y-4">
            <EmergencyCard
              title="Police Arrest"
              content="Know your rights during detention and arrest procedures"
              icon="⚖️"
              bgColor="bg-red-50"
            />
            <EmergencyCard
              title="Domestic Violence"
              content="Immediate steps and protective legal measures"
              icon="🏠"
              bgColor="bg-purple-50"
            />
            <EmergencyCard
              title="Accident & Injury"
              content="Legal steps after an accident and compensation claims"
              icon="🚑"
              bgColor="bg-blue-50"
            />
          </div>
        </div>

        {/* Nearby Support */}
        <div>
          <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
            Nearby Support
          </h2>
          <Card className="bg-nyaysetu-blue text-white p-5">
            <h3 className="text-xl font-bold mb-2">Find Legal Aid Centers</h3>
            <p className="mb-4 opacity-80">
              Locate free legal assistance centers in your area
            </p>
            <button className="bg-white text-nyaysetu-blue font-semibold px-4 py-2 rounded-lg">
              View on Map
            </button>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

interface EmergencyCardProps {
  title: string;
  content: string;
  icon: string;
  bgColor: string;
}

const EmergencyCard = ({ title, content, icon, bgColor }: EmergencyCardProps) => {
  return (
    <Card className={`${bgColor} border-l-4 border-nyaysetu-orange`}>
      <div className="flex items-start p-1">
        <div className="text-2xl mr-3">{icon}</div>
        <div>
          <h3 className="font-semibold text-nyaysetu-blue mb-1">{title}</h3>
          <p className="text-sm text-nyaysetu-grey">{content}</p>
        </div>
      </div>
    </Card>
  );
};

export default LegalAid;
