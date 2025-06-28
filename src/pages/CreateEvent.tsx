import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { EventForm } from "@/components/EventForm";

const CreateEvent = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Create New Event</h1>
          </div>
          <EventForm />
        </main>
      </div>
    </div>
  );
};

export default CreateEvent; 