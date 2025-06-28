
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function TicketSalesChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Ticket Sales</CardTitle>
        <Button variant="outline" size="sm">
          This Week
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center h-48">
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-8 border-gray-200 relative">
              <div className="absolute inset-0 rounded-full border-8 border-purple-500" style={{clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)"}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-gray-600">Total Ticket</p>
                  <p className="text-xl font-bold">2,780</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Sold Out</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">1,251</p>
              <p className="text-xs text-gray-500">45%</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
              <span className="text-sm text-gray-600">Fully Booked</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">834</p>
              <p className="text-xs text-gray-500">30%</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold">695</p>
              <p className="text-xs text-gray-500">25%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
