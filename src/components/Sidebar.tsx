import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  BarChart, 
  Settings, 
  LogOut 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/users", label: "Users", icon: Users },
    { path: "/analytics", label: "Analytics", icon: BarChart },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
      </div>
      
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={cn(
                  "flex items-center p-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",
                  location.pathname === item.path && "bg-gray-100 text-blue-600 font-medium"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 mt-auto border-t border-gray-200">
        <button className="flex items-center w-full p-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">
          <LogOut className="h-5 w-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}