
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Champions League Screening Night",
    location: "SkyDome Stadium, Toronto, ON",
    date: "Apr 20, 2029",
    price: "$30",
    category: "Sport"
  },
  {
    title: "Culinary Delights Festival",
    location: "Gourmet Plaza, San Francisco, CA",
    date: "Mar 3, 2029",
    price: "$40",
    category: "Food & Culinary"
  },
  {
    title: "Artistry Unveiled: Modern Art Expo",
    location: "Vogue Hall, Los Angeles, CA",
    date: "Mar 10, 2029",
    price: "$110",
    category: "Fashion"
  }
];

export function AllEventsSection() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">All Events</CardTitle>
        <Button variant="outline" size="sm">
          View All Event
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {events.map((event, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4">
              <div className="mb-3">
                <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {event.category}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{event.location}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{event.date}</span>
                <span className="text-lg font-bold text-purple-600">{event.price}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
