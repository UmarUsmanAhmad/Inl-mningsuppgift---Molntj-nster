
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const activities = [
  {
    type: "refund",
    title: "Admin Stefanus Weber reviewed a refund request for Invoice ID: 'INV1004'",
    time: "06:30 PM",
    icon: "💰"
  },
  {
    type: "update",
    title: "Wella McGrath updated ticket prices for the event 'Runway Revolution 2024' under the category 'Fashion'",
    time: "07:00 PM",
    icon: "🎫"
  },
  {
    type: "cancel",
    title: "Patrick Cooper cancelled a booking with Invoice ID: 'INV1004'",
    time: "11:15 AM",
    icon: "❌"
  },
  {
    type: "create",
    title: "Andrew Shaw created a new event: 'Symphony Under the Stars' under the category 'Music'",
    time: "08:30 AM",
    icon: "✨"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm">{activity.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900 leading-relaxed">{activity.title}</p>
                <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
