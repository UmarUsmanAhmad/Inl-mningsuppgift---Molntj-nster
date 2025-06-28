
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const popularEvents = [
  { name: "Music", percentage: 40, events: "20,000 Events", color: "bg-blue-500" },
  { name: "Sports", percentage: 35, events: "17,500 Events", color: "bg-purple-500" },
  { name: "Fashion", percentage: 15, events: "12,500 Events", color: "bg-gray-800" }
];

export function PopularEventsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Popular Events</CardTitle>
        <Button variant="outline" size="sm">
          Popular
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {popularEvents.map((event, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-medium text-gray-900">{event.name}</span>
              <span className="text-sm text-purple-600 font-medium">{event.percentage}%</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-600">{event.events}</span>
              <div className="w-24 bg-gray-200 rounded-full h-2">
                <div 
                  className={`${event.color} h-2 rounded-full`}
                  style={{ width: `${event.percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
