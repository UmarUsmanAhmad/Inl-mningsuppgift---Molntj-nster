
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function UpcomingEventCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Upcoming Event</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">Music</span>
        </div>
        
        <h3 className="font-semibold text-gray-900 mb-2">Rhythm & Beats Music Festival</h3>
        <p className="text-sm text-gray-600 mb-4">Sunset Park, Los Angeles, CA</p>
        <p className="text-sm text-gray-600 mb-4">
          Immerse yourself in electrifying performances by top pop, rock, EDM, and hip-hop artists. Indulge in delic...
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <div>
              <p className="text-sm font-medium">Apr 20, 2029</p>
              <p className="text-xs text-gray-500">12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>
        
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}
