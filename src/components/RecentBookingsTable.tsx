
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const bookings = [
  {
    id: "INV10011",
    date: "2029/02/15 10:30 AM",
    name: "Jackson Moore",
    event: "Symphony Under the Stars",
    qty: 2,
    amount: "$100",
    status: "Confirmed"
  },
  {
    id: "INV10012",
    date: "2029/02/16 03:45 PM",
    name: "Alicia Smithson",
    event: "Runway Revolution 2024",
    qty: 1,
    amount: "$120",
    status: "Pending"
  },
  {
    id: "INV10013",
    date: "2029/02/17 01:15 PM",
    name: "Marcus Rawless",
    event: "Global Wellness Summit",
    qty: 3,
    amount: "$240",
    status: "Confirmed"
  },
  {
    id: "INV10014",
    date: "2029/02/18 09:00 AM",
    name: "Patrick Cooper",
    event: "Champions League Screening Night",
    qty: 4,
    amount: "$120",
    status: "Cancelled"
  },
  {
    id: "INV10015",
    date: "2029/02/18 06:30 PM",
    name: "Gilda Ramos",
    event: "Artistry Unveiled: Modern Art Expo",
    qty: 2,
    amount: "$50",
    status: "Confirmed"
  }
];

export function RecentBookingsTable() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Bookings</CardTitle>
        <Button variant="outline" size="sm">
          This Week
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Invoice ID</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Date</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Name</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Event</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Qty</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Amount</th>
                <th className="text-left text-sm font-medium text-gray-600 pb-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 text-sm font-medium text-gray-900">{booking.id}</td>
                  <td className="py-3 text-sm text-gray-600">{booking.date}</td>
                  <td className="py-3 text-sm text-gray-900">{booking.name}</td>
                  <td className="py-3 text-sm text-gray-600">{booking.event}</td>
                  <td className="py-3 text-sm text-gray-900">{booking.qty}</td>
                  <td className="py-3 text-sm font-medium text-gray-900">{booking.amount}</td>
                  <td className="py-3">
                    <Badge 
                      variant={
                        booking.status === "Confirmed" ? "default" : 
                        booking.status === "Pending" ? "secondary" : 
                        "destructive"
                      }
                      className={
                        booking.status === "Confirmed" ? "bg-green-100 text-green-800 hover:bg-green-100" :
                        booking.status === "Pending" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" :
                        "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
