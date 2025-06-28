
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarWidget() {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">{monthName}</CardTitle>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
            <div key={day} className="text-center text-xs font-medium text-gray-500 p-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 35 }, (_, i) => {
            const dayNumber = i - 6; // Start from previous month
            const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
            const isToday = dayNumber === 14;
            
            return (
              <Button
                key={i}
                variant="ghost"
                size="sm"
                className={`h-8 w-8 p-0 text-xs ${
                  isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                } ${isToday ? 'bg-purple-600 text-white hover:bg-purple-600' : ''}`}
              >
                {isCurrentMonth ? dayNumber : ''}
              </Button>
            );
          })}
        </div>

        <div className="mt-4 space-y-3">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Panel Discussion</span>
              <span className="text-xs text-gray-500">Sat</span>
            </div>
            <p className="text-xs text-gray-600">Tech Beyond 2024</p>
            <p className="text-xs text-gray-500">Technology • 10:00 AM - 12:00 PM</p>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium">Live Concert</span>
              <span className="text-xs text-gray-500">5</span>
            </div>
            <p className="text-xs text-gray-600">Echo Beats Festival</p>
            <p className="text-xs text-gray-500">Music • 6:00 PM - 11:00 PM</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
