
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { MetricsCards } from "@/components/MetricsCards";
import { TicketSalesChart } from "@/components/TicketSalesChart";
import { SalesRevenueChart } from "@/components/SalesRevenueChart";
import { PopularEventsSection } from "@/components/PopularEventsSection";
import { AllEventsSection } from "@/components/AllEventsSection";
import { RecentBookingsTable } from "@/components/RecentBookingsTable";
import { UpcomingEventCard } from "@/components/UpcomingEventCard";
import { CalendarWidget } from "@/components/CalendarWidget";
import { RecentActivity } from "@/components/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Column - Main Content */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <MetricsCards />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <TicketSalesChart />
                <SalesRevenueChart />
              </div>
              <PopularEventsSection />
              <AllEventsSection />
              <RecentBookingsTable />
            </div>
            
            {/* Right Column - Sidebar Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <UpcomingEventCard />
              <CalendarWidget />
              <RecentActivity />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
