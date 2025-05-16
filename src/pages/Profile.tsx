
import Layout from "@/components/Layout";
import Card from "@/components/Card";
import { Award, ChevronRight, Languages, LogOut, Settings, User } from "lucide-react";

const Profile = () => {
  return (
    <Layout>
      <div className="px-5 py-6 md:px-10 md:py-8 lg:px-20 lg:py-12 md:ml-20">
        <div className="mb-8 flex items-center">
          <div className="h-20 w-20 bg-nyaysetu-blue rounded-full flex items-center justify-center text-white text-3xl font-bold">
            RS
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-nyaysetu-blue mb-1">
              Rahul Singh
            </h1>
            <p className="text-nyaysetu-grey">rahul.s@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Progress Tracker */}
          <div className="mb-8 md:mb-0">
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
                Your Progress
              </h2>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="flex items-center">
                    <span className="text-2xl font-bold text-nyaysetu-blue">245 XP</span>
                    <Award className="text-nyaysetu-orange ml-2" size={20} />
                  </div>
                  <p className="text-sm text-nyaysetu-grey">
                    Learn more to earn XP
                  </p>
                </div>
                <div className="h-16 w-16 rounded-full border-4 border-nyaysetu-orange flex items-center justify-center">
                  <span className="font-bold text-nyaysetu-blue">Lv. 3</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-nyaysetu-orange h-3 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-nyaysetu-grey">
                <span>245 XP</span>
                <span>400 XP needed for Level 4</span>
              </div>
            </Card>
          </div>

          {/* Badges */}
          <div className="mb-8 md:mb-0">
            <Card className="p-5">
              <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4 flex items-center">
                <Award className="mr-2" size={20} />
                Badges
              </h2>
              <div className="flex justify-between">
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xl">🔍</span>
                  </div>
                  <span className="text-xs text-nyaysetu-grey">Explorer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 bg-green-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xl">📚</span>
                  </div>
                  <span className="text-xs text-nyaysetu-grey">Reader</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-xl">🎯</span>
                  </div>
                  <span className="text-xs text-nyaysetu-grey">Quizzer</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="h-14 w-14 bg-gray-100 rounded-full flex items-center justify-center mb-2 opacity-40">
                    <span className="text-xl">🏆</span>
                  </div>
                  <span className="text-xs text-nyaysetu-grey">Expert</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Premium Option */}
          <div className="mb-8 md:col-span-2 lg:col-span-1 lg:mb-0">
            <Card className="bg-gradient-to-r from-nyaysetu-blue to-blue-700 text-white p-5 h-full">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold mb-1">Upgrade to Premium</h3>
                  <p className="opacity-80 mb-3 text-sm">
                    Get advanced legal resources and personalized assistance
                  </p>
                  <button className="bg-nyaysetu-orange text-white px-4 py-2 rounded-lg font-medium">
                    View Plans
                  </button>
                </div>
                <div className="text-4xl">✨</div>
              </div>
            </Card>
          </div>

          {/* Settings */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-nyaysetu-blue mb-4">
              Settings
            </h2>
            <Card className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ProfileMenuItem
                  icon={<User size={20} />}
                  title="Account Settings"
                  subtitle="Manage your account details"
                />
                <ProfileMenuItem
                  icon={<Languages size={20} />}
                  title="Language"
                  subtitle="English"
                />
                <ProfileMenuItem
                  icon={<Settings size={20} />}
                  title="App Settings"
                  subtitle="Notifications, appearance"
                />
                <ProfileMenuItem
                  icon={<LogOut size={20} />}
                  title="Logout"
                  subtitle="Sign out from this device"
                  textColor="text-red-500"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

interface ProfileMenuItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  showDivider?: boolean;
  textColor?: string;
}

const ProfileMenuItem = ({
  icon,
  title,
  subtitle,
  showDivider = false,
  textColor = "text-nyaysetu-blue",
}: ProfileMenuItemProps) => {
  return (
    <div
      className={`flex items-center py-3 md:py-4 ${
        showDivider ? "border-b border-gray-200" : ""
      } hover:bg-gray-50 rounded-lg px-3 cursor-pointer transition-colors`}
    >
      <div className={`mr-3 ${textColor}`}>{icon}</div>
      <div className="flex-1">
        <h3 className={`font-medium ${textColor}`}>{title}</h3>
        <p className="text-sm text-nyaysetu-grey">{subtitle}</p>
      </div>
      <div className="text-nyaysetu-grey">
        <ChevronRight size={20} />
      </div>
    </div>
  );
};

export default Profile;

