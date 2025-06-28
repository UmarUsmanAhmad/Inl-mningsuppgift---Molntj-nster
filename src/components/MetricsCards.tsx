
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Upcoming Events",
    value: "345",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
    icon: "📅"
  },
  {
    title: "Total Bookings",
    value: "1798",
    color: "bg-pink-100",
    iconColor: "text-pink-600",
    icon: "🎫"
  },
  {
    title: "Tickets Sold",
    value: "1250",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
    icon: "🎟️"
  }
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="p-6">
          <CardContent className="p-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              </div>
              <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                <span className="text-xl">{metric.icon}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
