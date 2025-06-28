
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function SalesRevenueChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Sales Revenue</CardTitle>
        <Button variant="outline" size="sm">
          Last 6 Months
        </Button>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold">$348,805</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-600">Revenue</p>
              <p className="text-lg font-semibold">$56,320</p>
            </div>
          </div>
        </div>
        
        <div className="h-32 flex items-end justify-between space-x-2">
          {[20, 35, 15, 45, 25, 40, 30, 50].map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div 
                className="w-full bg-purple-500 rounded-t"
                style={{ height: `${height}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-1">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'][index]}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex items-center space-x-4 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <span className="text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
            <span className="text-gray-600">Profit</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
