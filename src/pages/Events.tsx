import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { EventList } from "@/components/EventList";
import { useState } from "react";

const Events = () => {
  const [view, setView] = useState<'active' | 'draft' | 'past'>('active');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Events</h1>
                <div className="flex space-x-4 mt-4">
                  <Button 
                    className={view === 'active' ? "bg-purple-600 hover:bg-purple-700 text-white" : "text-gray-600"}
                    onClick={() => setView('active')}
                  >
                    Active
                  </Button>
                  <Button 
                    variant={view === 'draft' ? "default" : "ghost"}
                    className={view === 'draft' ? "bg-purple-600 hover:bg-purple-700 text-white" : "text-gray-600"}
                    onClick={() => setView('draft')}
                  >
                    Draft
                  </Button>
                  <Button 
                    variant={view === 'past' ? "default" : "ghost"}
                    className={view === 'past' ? "bg-purple-600 hover:bg-purple-700 text-white" : "text-gray-600"}
                    onClick={() => setView('past')}
                  >
                    Past
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Input
                  placeholder="Search event, location, etc"
                  className="w-80"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Link to="/events/create">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                    Create Event
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <EventList />
        </main>
      </div>
    </div>
  );
};

export default Events;
