import { useEffect, useState } from 'react';
import { API_ENDPOINTS, axiosInstance } from '../lib/api';
import { Event, EventStatus } from '../lib/types';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { formatDate } from '../lib/utils';

export function EventList() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            interface EventResponse {
                data: Event[] | { data: Event[] };
            }
            const response = await axiosInstance.get<EventResponse>(API_ENDPOINTS.EVENTS.LIST);
            const eventData = 'data' in response.data ? response.data.data : response.data;
            setEvents(Array.isArray(eventData) ? eventData : []);
            setError(null);
        } catch (err) {
            setError('Failed to fetch events. Please try again later.');
            console.error('Error fetching events:', err);
            setEvents([]); // Ensure events is always an array
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center p-8">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4"></div>
                    <p>Loading events...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center p-8">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={fetchEvents}>Retry</Button>
            </div>
        );
    }

    if (!events.length) {
        return (
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Events</h1>
                <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">No events found.</p>
                    <Button onClick={fetchEvents}>Refresh</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Events</h1>
                <Button onClick={fetchEvents}>Refresh</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                    <Card key={event.id} className="flex flex-col">
                        <CardHeader>
                            <CardTitle>{event.title}</CardTitle>
                            <CardDescription>{event.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="space-y-2">
                                <p><strong>Location:</strong> {event.location}</p>
                                <p><strong>Date:</strong> {formatDate(event.startDate)}</p>
                                <p><strong>Price:</strong> ${event.price}</p>
                                <p><strong>Status:</strong> {EventStatus[event.status]}</p>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-between mt-auto">
                            <Button variant="outline" onClick={() => window.location.href = `/events/${event.id}`}>
                                View Details
                            </Button>
                            {event.status === EventStatus.Published && (
                                <Button onClick={() => window.location.href = `/events/${event.id}/book`}>
                                    Book Now
                                </Button>
                            )}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
} 