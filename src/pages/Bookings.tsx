
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Bookings = () => {
  const bookings = [
    {
      id: "INV10011",
      date: "2029/02/15 10:30 AM",
      name: "Jackson Moore",
      event: "Symphony Under the Stars",
      category: "Diamond",
      price: "$50",
      qty: 2,
      amount: "$100",
      status: "Confirmed",
      voucher: "123456-MUSIC"
    },
    {
      id: "INV10012",
      date: "2029/02/16 03:45 PM",
      name: "Alicia Smithson",
      event: "Runway Revolution 2024",
      category: "Platinum",
      price: "$120",
      qty: 1,
      amount: "$120",
      status: "Pending",
      voucher: "-"
    },
    {
      id: "INV10013",
      date: "2029/02/17 01:15 PM",
      name: "Natalie Johnson",
      event: "Global Wellness Summit",
      category: "CAT 1",
      price: "$80",
      qty: 3,
      amount: "$240",
      status: "Confirmed",
      voucher: "789101-WELLNESS"
    },
    {
      id: "INV10014",
      date: "2029/02/18 09:00 AM",
      name: "Patrick Cooper",
      event: "Champions League Screening Night",
      category: "CAT 3",
      price: "$30",
      qty: 4,
      amount: "$120",
      status: "Cancelled",
      voucher: "-"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Bookings</p>
                        <p className="text-2xl font-bold">55,000</p>
                        <p className="text-xs text-gray-500">Last Month: 1,600</p>
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600">📋</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Tickets Sold</p>
                        <p className="text-2xl font-bold">45,000</p>
                        <p className="text-xs text-gray-500">Last Month: 615</p>
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600">🎫</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Total Earnings</p>
                        <p className="text-2xl font-bold">$275,450</p>
                        <p className="text-xs text-gray-500">Last Month: 70</p>
                      </div>
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600">💰</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Bookings Overview Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Bookings Overview</CardTitle>
                    <Button variant="outline" size="sm">This Week</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Bookings Chart Placeholder</p>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">Mar 13, 2029</p>
                    <p className="text-lg font-semibold">1,396 Bookings</p>
                  </div>
                </CardContent>
              </Card>

              {/* Bookings Table */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">All</Button>
                      <Button size="sm" variant="ghost">Confirmed</Button>
                      <Button size="sm" variant="ghost">Pending</Button>
                      <Button size="sm" variant="ghost">Cancelled</Button>
                    </div>
                    <div className="flex space-x-2">
                      <Input placeholder="Search name, event, etc" className="w-64" />
                      <Button variant="outline">All Category</Button>
                      <Button variant="outline">This Month</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice ID</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Ticket Category</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Qty</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>E-Voucher</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {bookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell className="text-sm text-gray-600">{booking.date}</TableCell>
                          <TableCell>{booking.name}</TableCell>
                          <TableCell>{booking.event}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-xs ${
                              booking.category === 'Diamond' ? 'bg-purple-100 text-purple-600' :
                              booking.category === 'Platinum' ? 'bg-gray-100 text-gray-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                              {booking.category}
                            </span>
                          </TableCell>
                          <TableCell>{booking.price}</TableCell>
                          <TableCell>{booking.qty}</TableCell>
                          <TableCell className="font-medium">{booking.amount}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-xs ${
                              booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' :
                              booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-red-100 text-red-600'
                            }`}>
                              {booking.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">{booking.voucher}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Bookings Category</CardTitle>
                    <Button variant="outline" size="sm">This Week</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Music (25.77%)</span>
                      <span className="font-medium">14,172</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25.77%' }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Sport (32.68%)</span>
                      <span className="font-medium">12,476</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '32.68%' }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fashion (17.83%)</span>
                      <span className="font-medium">9,806</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-pink-600 h-2 rounded-full" style={{ width: '17.83%' }}></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Art & Design (13.93%)</span>
                      <span className="font-medium">7,661</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '13.93%' }}></div>
                    </div>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-3xl font-bold">44,115</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Bookings;
