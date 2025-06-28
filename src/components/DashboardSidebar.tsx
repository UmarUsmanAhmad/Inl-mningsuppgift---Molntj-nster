import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logout } from "@/lib/auth";
import { 
  Calendar, 
  ChevronLeft, 
  Home, 
  Book, 
  Receipt, 
  Inbox, 
  Images, 
  MessageSquare,
  LogOut 
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Book, label: "Bookings", path: "/bookings" },
  { icon: Receipt, label: "Invoices", path: "/invoices" },
  { icon: Inbox, label: "Inbox", path: "/inbox" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: Home, label: "Events", path: "/events" },
  { icon: Images, label: "Financials", path: "/financials" },
  { icon: Images, label: "Gallery", path: "/gallery" },
  { icon: MessageSquare, label: "Feedback", path: "/feedback" },
];

export function DashboardSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="font-semibold text-gray-900">Ventixe</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100",
                      isActive && "bg-purple-50 text-purple-600 hover:bg-purple-50 hover:text-purple-600"
                    )}
                  >
                    <item.icon className="mr-3 h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Sign Out */}
      <div className="p-4 border-t border-gray-200">
        <Button 
          variant="ghost" 
          className="w-full justify-start text-gray-600 hover:text-red-600 hover:bg-red-50"
          onClick={handleLogout}
        >
          <LogOut className="mr-3 h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
