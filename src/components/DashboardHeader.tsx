
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Hello Orlando, welcome back!</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              placeholder="Search anything"
              className="w-80 pl-4 pr-10"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <Button size="icon" variant="ghost" className="rounded-full">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">🔔</span>
            </div>
          </Button>
          
          <Button size="icon" variant="ghost" className="rounded-full">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⚙️</span>
            </div>
          </Button>
          
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarFallback className="bg-blue-600 text-white">OL</AvatarFallback>
            </Avatar>
            <span className="font-medium text-gray-900">Orlando Laurentius</span>
          </div>
        </div>
      </div>
    </header>
  );
}
