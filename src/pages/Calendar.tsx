
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
  const scheduleTypes = [
    { name: "All Schedules", count: 15, color: "bg-gray-200" },
    { name: "Event", count: 4, color: "bg-purple-200" },
    { name: "Meeting", count: 5, color: "bg-pink-200" },
    { name: "Setup and Rehearsal", count: 3, color: "bg-purple-200" }
  ];

  const calendarEvents = [
    { date: 1, title: "Team Brainstorming for Marketing", time: "3:00 PM", type: "meeting" },
    { date: 4, title: "Daily Debrief with V...", time: "6:00 PM", type: "meeting" },
    { date: 4, title: "Artistry Unveiled Cl...", time: "5:00 PM", type: "event" },
    { date: 7, title: "Vendor Feedback Collection", time: "3:00 PM", type: "meeting" },
    { date: 9, title: "Final Event Report S...", time: "10:00 AM", type: "meeting" },
    { date: 9, title: "Post-Event Team Ap...", time: "12:30 PM", type: "meeting" },
    { date: 17, title: "Stage Setup for Symphony Under the Stars", time: "7:00 AM", type: "setup" },
    { date: 21, title: "Symphony Under th...", time: "7:00 PM", type: "event" },
    { date: 21, title: "Technical Rehearsal...", time: "5:00 PM", type: "setup" },
    { date: 23, title: "Echo Beats Festival Main Performance", time: "7:00 PM", type: "event" },
    { date: 26, title: "Sponsor and Vendor...", time: "2:00 PM", type: "meeting" },
    { date: 26, title: "Equipment Check fo...", time: "10:00 AM", type: "setup" },
    { date: 29, title: "Pre-Event Commit...", time: "9:30 AM", type: "meeting" },
    { date: 29, title: "Culinary Delights Liv...", time: "11:30 AM", type: "event" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Main Calendar */}
            <div className="col-span-12 lg:col-span-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {scheduleTypes.map((type, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className={`w-6 h-6 ${type.color} rounded-full flex items-center justify-center`}>
                            {index === 0 && <span className="text-xs">15</span>}
                            {index === 1 && <span className="text-xs">4</span>}
                            {index === 2 && <span className="text-xs">5</span>}
                            {index === 3 && <span className="text-xs">3</span>}
                          </div>
                          <span className="text-sm">{type.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline">Filter</Button>
                      <Button variant="outline">Month</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700">+ New Agenda</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold">May 2029</h2>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">
                          <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 mt-4 text-sm">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
                        Setup and Rehearsal
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
                        Meeting
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-purple-300 rounded-full mr-2"></div>
                        Event
                      </span>
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-green-300 rounded-full mr-2"></div>
                        Task Deadlines
                      </span>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center text-sm font-medium text-gray-600 p-2">
                        {day}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: 35 }, (_, i) => {
                      const dayNumber = i - 2; // Adjust for May 2029 starting position
                      const isCurrentMonth = dayNumber > 0 && dayNumber <= 31;
                      const dayEvents = calendarEvents.filter(event => event.date === dayNumber);
                      
                      return (
                        <div key={i} className="min-h-24 border border-gray-200 p-1">
                          {isCurrentMonth && (
                            <>
                              <div className="text-sm font-medium mb-1">{dayNumber}</div>
                              <div className="space-y-1">
                                {dayEvents.slice(0, 2).map((event, eventIndex) => (
                                  <div 
                                    key={eventIndex} 
                                    className={`text-xs p-1 rounded truncate ${
                                      event.type === 'event' ? 'bg-purple-100 text-purple-700' :
                                      event.type === 'meeting' ? 'bg-blue-100 text-blue-700' :
                                      'bg-gray-100 text-gray-700'
                                    }`}
                                  >
                                    {event.title}
                                  </div>
                                ))}
                                {dayEvents.length > 2 && (
                                  <div className="text-xs text-gray-500">+{dayEvents.length - 2} more</div>
                                )}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Schedule Details Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Schedule Details</CardTitle>
                    <Button variant="ghost" size="sm">✕</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">Echo Beats Festival Main Performance</h3>
                      <span className="inline-block px-2 py-1 bg-purple-100 text-purple-600 rounded text-xs mt-2">
                        Event
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center">
                        <span className="text-gray-600 w-16">📅</span>
                        <span>May 24, 2029 - 7:00 PM</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 w-16">📍</span>
                        <span>Sunset Park, Los Angeles, CA</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-600 w-16">👤</span>
                        <span>PIC</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium">Michael Taylor</span>
                        <span className="text-xs text-gray-500">Event Coordinator</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>+1-800-555-7890</p>
                        <p>michael.taylor@eventmgmt.com</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Team</h4>
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                        ))}
                        <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-xs">+5</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Note</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• This is the headline performance of the Echo Beats Festival, featuring top artists from EDM, pop, and hip-hop genres.</li>
                        <li>• Ensure the technical team is ready for sound and lighting checks by 5:00 PM. VIP seating arrangements must be finalized by 6:30 PM.</li>
                        <li>• VIP seating arrangements must be finalized by 6:30 PM.</li>
                      </ul>
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

export default Calendar;
