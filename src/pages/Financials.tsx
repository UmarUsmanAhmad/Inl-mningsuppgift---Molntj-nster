
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Financials = () => {
  const transactions = [
    {
      date: "2029/05/01 10:00 AM",
      event: "Sunset Park Booking Vendor",
      amount: "-$7,000",
      note: "Echo Beats Festival venue payment",
      status: "Completed"
    },
    {
      date: "2029/05/02 2:00 PM",
      event: "Ticket Sales Event",
      amount: "+$15,000",
      note: "Echo Beats Festival ticket sales",
      status: "Completed"
    },
    {
      date: "2029/05/03 8:30 AM",
      event: "Echo Beats Festival Promotion Marketing",
      amount: "-$8,000",
      note: "Social media promotions",
      status: "Pending"
    },
    {
      date: "2029/05/04 3:00 PM",
      event: "Harmony Audio Deposit Sponsorship",
      amount: "+$10,000",
      note: "-",
      status: "Completed"
    },
    {
      date: "2029/05/05 11:00 AM",
      event: "Sound & Lighting Rental Equipment",
      amount: "-$3,000",
      note: "-",
      status: "Pending"
    },
    {
      date: "2029/05/06 12:00 PM",
      event: "Merchandise Sales Event",
      amount: "+$2,500",
      note: "Echo Beats Festival merch",
      status: "Completed"
    },
    {
      date: "2029/05/07 9:00 AM",
      event: "Catering Services Payment Vendor",
      amount: "-$5,500",
      note: "-",
      status: "Completed"
    },
    {
      date: "2029/05/08 4:30 PM",
      event: "Volunteer Stipends Staffing",
      amount: "-$2,000",
      note: "-",
      status: "Pending"
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
              {/* Financial Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Balance</p>
                        <p className="text-2xl font-bold">$75,000</p>
                        <p className="text-xs text-green-600">+3.65%</p>
                      </div>
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600">💰</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Income</p>
                        <p className="text-2xl font-bold">$150,000</p>
                        <p className="text-xs text-green-600">+2.08%</p>
                      </div>
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600">📈</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Expenses</p>
                        <p className="text-2xl font-bold">$45,000</p>
                        <p className="text-xs text-red-600">-0.84%</p>
                      </div>
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <span className="text-red-600">📉</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Transactions</CardTitle>
                    <div className="flex space-x-2">
                      <Input placeholder="Search event, category, etc" className="w-64" />
                      <Button variant="outline">This Month</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Event</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Note</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell className="text-sm text-gray-600">{transaction.date}</TableCell>
                          <TableCell>{transaction.event}</TableCell>
                          <TableCell className={`font-medium ${
                            transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.amount}
                          </TableCell>
                          <TableCell className="text-sm text-gray-600">{transaction.note}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded text-xs ${
                              transaction.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                            }`}>
                              {transaction.status}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Cashflow Chart */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Cashflow</CardTitle>
                    <Button variant="outline" size="sm">Last 10 Months</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                        Income
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                        Expense
                      </span>
                    </div>
                    
                    <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Cashflow Chart</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-600">May 2029</p>
                      <p className="text-sm text-gray-600">Income: $6,815</p>
                      <p className="text-sm text-gray-600">Expense: -$5,120</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sales Revenue */}
              <Card>
                <CardHeader>
                  <CardTitle>Sales Revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Revenue Chart</p>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                          Music 30%
                        </span>
                        <span>$45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          Fashion 20%
                        </span>
                        <span>$30,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                          Sports 16%
                        </span>
                        <span>$24,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                          Technology 10%
                        </span>
                        <span>$15,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-pink-600 rounded-full mr-2"></div>
                          Art & Design 14%
                        </span>
                        <span>$21,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="flex items-center">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                          Health & Wellness 10%
                        </span>
                        <span>$15,000</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total All Revenue</span>
                        <span>$150,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Expense Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Expense Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Expense Chart</p>
                    </div>
                    
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span>Marketing (30.77%)</span>
                        <span>$13,846.15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Venue (26.92%)</span>
                        <span>$12,115.38</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Staffing (19.23%)</span>
                        <span>$8,653.85</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Equipment (11.54%)</span>
                        <span>$5,192.31</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Miscellaneous (7.69%)</span>
                        <span>$3,461.54</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Utilities (3.85%)</span>
                        <span>$1,730.77</span>
                      </div>
                    </div>
                    
                    <div className="border-t pt-2">
                      <div className="flex justify-between font-medium">
                        <span>Total All Expenses</span>
                        <span>$45,000</span>
                      </div>
                    </div>
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

export default Financials;
