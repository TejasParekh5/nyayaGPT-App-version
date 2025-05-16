
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Home, MessageSquare, BookOpen, LifeBuoy, UserRound } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
  showNav?: boolean;
}

const Layout = ({ children, showNav = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-nyaysetu-white max-w-7xl mx-auto">
      <main className="flex-1 pb-16 md:pb-0">{children}</main>
      
      {showNav && (
        <nav className="fixed bottom-0 left-0 right-0 mx-auto max-w-7xl bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] rounded-t-xl md:fixed md:left-0 md:top-0 md:bottom-auto md:w-20 md:h-screen md:rounded-none md:rounded-r-xl md:flex md:flex-col md:justify-center">
          <div className="flex justify-around items-center py-3 px-4 md:flex-col md:h-full md:py-10 md:space-y-8">
            <NavItem to="/home" icon={<Home size={24} />} label="Home" />
            <NavItem to="/chatbot" icon={<MessageSquare size={24} />} label="Chatbot" />
            <NavItem to="/learn" icon={<BookOpen size={24} />} label="Learn" />
            <NavItem to="/legal-aid" icon={<LifeBuoy size={24} />} label="Aid" />
            <NavItem to="/profile" icon={<UserRound size={24} />} label="Profile" />
          </div>
        </nav>
      )}
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center justify-center md:w-full md:py-3 ${
          isActive
            ? "text-nyaysetu-blue"
            : "text-nyaysetu-grey"
        }`
      }
    >
      <div className="mb-1">{icon}</div>
      <span className="text-xs font-medium">{label}</span>
    </NavLink>
  );
};

export default Layout;

