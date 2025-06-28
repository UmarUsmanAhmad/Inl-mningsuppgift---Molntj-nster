
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Inbox = () => {
  const messages = [
    {
      id: 1,
      sender: "Harmony Audio",
      subject: "Sound System Confirmation",
      preview: "We'd like to confirm the delivery schedule for the sound system setup.",
      time: "02:30 PM",
      type: "Sponsor",
      isRead: false
    },
    {
      id: 2,
      sender: "Patrick Cooper",
      subject: "Feedback on Champions League Event",
      preview: "The event was great, but the seating arrangements could be improved.",
      time: "01:45 PM",
      type: "Customer",
      isRead: true
    },
    {
      id: 3,
      sender: "Marcus Rawless",
      subject: "Request for Invoice Update",
      preview: "Could you please update the billing address on my invoice?",
      time: "11:30 AM",
      type: "Customer",
      isRead: false
    },
    {
      id: 4,
      sender: "Alicia Smithson",
      subject: "Query Regarding Ticket Availability",
      preview: "Hi, I'd like to confirm if additional Platinum tickets are available for the event.",
      time: "10:15 AM",
      type: "Customer",
      isRead: false
    },
    {
      id: 5,
      sender: "Jackson Moore",
      subject: "Confirmation of Symphony Tickets",
      preview: "I've received the tickets. Thanks for the prompt confirmation!",
      time: "Yesterday",
      type: "Customer",
      isRead: true
    },
    {
      id: 6,
      sender: "FreshFlavors Catering",
      subject: "Final Menu Selection",
      preview: "Please confirm the final menu selections for the event.",
      time: "Feb 18",
      type: "Partner",
      isRead: false
    }
  ];

  const labels = [
    { name: "Customer", count: null },
    { name: "Sponsor", count: null },
    { name: "Partner", count: null }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 justify-start">
                      📧 Inbox
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      ⭐ Starred
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      ▶️ Sent
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      📝 Drafts
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      ⚠️ Spam
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      🗑️ Trash
                    </Button>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Labels</h3>
                      <Button variant="ghost" size="sm">+</Button>
                    </div>
                    <div className="space-y-2">
                      {labels.map((label) => (
                        <div key={label.name} className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <span className="text-sm">{label.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message List */}
            <div className="col-span-12 lg:col-span-5">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Input placeholder="Search for messages" className="w-64" />
                      <Button variant="outline" size="sm">🔍</Button>
                      <Button className="bg-purple-600 hover:bg-purple-700" size="sm">+</Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={`p-3 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                          !message.isRead ? 'bg-blue-50 border-blue-200' : 'bg-white'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {message.sender.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className={`text-sm ${!message.isRead ? 'font-medium' : ''}`}>
                                {message.sender}
                              </p>
                              <span className="text-xs text-gray-500">{message.time}</span>
                            </div>
                            <p className={`text-sm ${!message.isRead ? 'font-medium' : 'text-gray-600'}`}>
                              {message.subject}
                            </p>
                            <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                            <div className="flex items-center mt-1">
                              <span className={`px-2 py-1 rounded text-xs ${
                                message.type === 'Sponsor' ? 'bg-blue-100 text-blue-600' :
                                message.type === 'Partner' ? 'bg-green-100 text-green-600' :
                                'bg-gray-100 text-gray-600'
                              }`}>
                                {message.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center mt-4">
                    <p className="text-sm text-gray-600">1 from 36</p>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="outline" size="sm">←</Button>
                      <Button variant="outline" size="sm">→</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Message Detail */}
            <div className="col-span-12 lg:col-span-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Sound System Confirmation</CardTitle>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">🖨️</Button>
                      <Button variant="ghost" size="sm">↗️</Button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium">HA</span>
                    </div>
                    <div>
                      <p className="font-medium">Harmony Audio</p>
                      <p className="text-sm text-gray-600">support@harmonyaudio.com</p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-sm text-gray-600">February 20, 2029</p>
                      <p className="text-sm text-gray-600">02:30 PM</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-900">Dear Event Management Team,</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">
                        We hope this message finds you well. As the official sound partner for the 
                        Rhythm & Beats Music Festival, we are reaching out to confirm the delivery 
                        schedule for the sound system setup.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">Here are a few key points we'd like to discuss:</p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-700">
                      <p><strong>1. Delivery Timing:</strong> Please confirm the preferred date and time for our 
                      team to deliver the equipment to Sunset Park.</p>
                      
                      <p><strong>2. Access Requirements:</strong> Let us know the details regarding venue 
                      access, loading dock availability, and any on-site contacts we should 
                      coordinate with.</p>
                      
                      <p><strong>3. Setup Specifications:</strong> We would appreciate it if you could share any 
                      specific requirements for the stage layout or unique aspects of the 
                      venue that might impact our installation.</p>
                      
                      <p><strong>4. Testing and Rehearsal:</strong> If there is a scheduled time for sound testing 
                      or rehearsal, kindly let us know so we can ensure our team is present 
                      for technical support.</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">
                        Please feel free to reach out with any questions or additional information 
                        you might need from our side.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">Looking forward to your confirmation and further instructions.</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-700">Warm regards,</p>
                      <p className="text-sm text-gray-700">
                        Harmony Audio Team<br/>
                        +1-800-555-8976<br/>
                        Email: support@harmonyaudio.com
                      </p>
                    </div>

                    <div className="flex space-x-2 mt-6">
                      <Button variant="outline" className="flex-1">↩️ Reply</Button>
                      <Button variant="outline" className="flex-1">↗️ Forward</Button>
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

export default Inbox;
