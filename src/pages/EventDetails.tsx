
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

  const packages = [
    { name: "General Admission Package", price: "$50", features: ["Standing", "Access to Festival Grounds"] },
    { name: "Silver Package", price: "$70", features: ["Seating", "Mid-tier View"] },
    { name: "Gold Package", price: "$85", features: ["Seating", "Prime View"] },
    { name: "Platinum Package", price: "$100", features: ["Seating", "Near Stage"] },
    { name: "Diamond Package", price: "$120", features: ["Seating", "Front-row View"] },
    { name: "VIP Lounge Package", price: "$150", features: ["Seating", "Exclusive Lounge"] },
    { name: "Artist Meet-and-Greet Package", price: "$180", features: ["Standing", "Backstage Access"] },
    { name: "Ultimate Access Package", price: "$200", features: ["Standing", "All-Inclusive Benefits"] }
  ];

  const merchandise = [
    { name: "Echo Beats Cap", price: "USD $20" },
    { name: "Festival T-Shirt", price: "USD $25" },
    { name: "Light-Up Wristband", price: "USD $15" }
  ];

  const partners = [
    "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum",
    "Logoipsum", "LOGO", "Logoipsum", "IPSUM"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <Link to="/events" className="text-blue-600 hover:text-blue-800">
              ← Back to Events
            </Link>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Event Header */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-gray-300 h-64 rounded-t-lg relative">
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-gray-700 px-2 py-1 rounded text-sm">Music</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">Active</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Echo Beats Festival</h1>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">📅 May 20, 2029 - 6:00 PM</p>
                        <p className="text-sm text-gray-600">📍 Sunset Park, Los Angeles, CA</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Can Sold</p>
                        <p className="text-2xl font-bold">21,000</p>
                        <p className="text-sm text-gray-600">TICKETS</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm text-gray-600">Starts from</p>
                      <p className="text-3xl font-bold text-purple-600">$60</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* About Event */}
              <Card>
                <CardHeader>
                  <CardTitle>About Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. 
                    Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances 
                    under the stars. Explore food trucks, art installations, and VIP lounges for an elevated festival experience.
                  </p>
                </CardContent>
              </Card>

              {/* Terms & Conditions */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Terms & Conditions</CardTitle>
                    <Button variant="ghost" size="sm">↗️</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">1. Ticket Purchase and Entry</h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• All attendees must possess a valid ticket for entry.</li>
                        <li>• Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
                        <li>• Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">2. Security and Safety</h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Attendees are subject to security checks, including bag inspections, upon entry.</li>
                        <li>• Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
                        <li>• The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">3. Code of Conduct</h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• Attendees are expected to behave responsibly and respectfully toward others.</li>
                        <li>• Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">4. Event Schedule and Changes</h4>
                      <ul className="text-sm text-gray-700 space-y-1 ml-4">
                        <li>• The event schedule is subject to change without prior notice.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Official Merchandise */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Official Merchandise</CardTitle>
                    <Button variant="ghost" size="sm">⋯</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {merchandise.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-gray-200 h-32 rounded-lg mb-2"></div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-purple-600">{item.price}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Our Partners */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Our Partners</CardTitle>
                    <Button variant="ghost" size="sm">⋯</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-4">
                    {partners.map((partner, index) => (
                      <div key={index} className="bg-gray-100 h-16 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 font-medium">{partner}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Seat Plan */}
              <Card>
                <CardHeader>
                  <CardTitle>Seat Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 h-48 rounded-lg mb-4 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="bg-yellow-400 w-24 h-12 rounded mb-2 mx-auto"></div>
                        <p className="text-xs">STAGE</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded mr-2"></div>
                        Diamond $120 (Seating)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                        Platinum $100 (Premium)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-600 rounded mr-2"></div>
                        Gold $85 (Seating)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded mr-2"></div>
                        Silver $70 (Seating)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded mr-2"></div>
                        Bronze $60 (Seating)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-orange-600 rounded mr-2"></div>
                        General Admission $50 (Standing)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-red-600 rounded mr-2"></div>
                        Backstage Access $200 (Standing)
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <div className="w-3 h-3 bg-pink-600 rounded mr-2"></div>
                        VIP Lounge $150 (Seating)
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <p><strong>Notes</strong></p>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Seating categories include reserved seating with an unobstructed stage view.</li>
                      <li>• Standing categories include access to open floor areas near the stage.</li>
                    </ul>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium">Ticket Category Benefits</h4>
                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="font-medium">VIP Lounge</p>
                        <ul className="text-gray-600">
                          <li>• Premium seating</li>
                          <li>• Complimentary drinks</li>
                          <li>• Fast-track entry</li>
                        </ul>
                        <p className="text-purple-600 font-medium">$150</p>
                      </div>
                      <div>
                        <p className="font-medium">Backstage Access</p>
                        <ul className="text-gray-600">
                          <li>• Standing access to the backstage area</li>
                          <li>• Artist meet-and-greet</li>
                          <li>• Exclusive merchandise</li>
                        </ul>
                        <p className="text-purple-600 font-medium">$200</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Packages */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Packages</CardTitle>
                    <Button variant="ghost" size="sm">⋯</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {packages.map((pkg, index) => (
                      <div key={index} className="border rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{pkg.name}</span>
                          <span className="text-purple-600 font-bold">{pkg.price}</span>
                        </div>
                        <div className="flex space-x-4 text-xs text-gray-600">
                          {pkg.features.map((feature, fIndex) => (
                            <span key={fIndex}>○ {feature}</span>
                          ))}
                        </div>
                      </div>
                    ))}
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

export default EventDetails;
