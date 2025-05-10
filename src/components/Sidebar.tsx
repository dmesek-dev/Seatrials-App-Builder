import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/app-info", label: "App Information" },
    { path: "/aws-config", label: "AWS Config" },
    { path: "/", label: "Mobile Deployment" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4">
      <div className="text-xl font-bold mb-8">KeyDrop Launchpad</div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "block px-4 py-2 rounded-lg transition-colors",
              location.pathname === item.path
                ? "bg-gray-800 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar; 