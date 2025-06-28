import { useState, useEffect } from 'react';
import { API_ENDPOINTS, axiosInstance } from '../lib/api';
import { EventStatus } from '../lib/types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useNavigate } from 'react-router-dom';

interface EventFormData {
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    price: number;
    maxAttendees: number;
}

interface ApiError {
    response?: {
        status?: number;
        data?: {
            message?: string;
        };
    };
    message?: string;
}

const initialFormData: EventFormData = {
    title: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
    price: 0,
    maxAttendees: 1
};

export function EventForm() {
    const [formData, setFormData] = useState<EventFormData>(initialFormData);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if user is authenticated and is an organizer
        const token = localStorage.getItem('token');
        const isOrganizer = localStorage.getItem('isOrganizer');
        
        console.log('Current auth state:', { 
            hasToken: !!token, 
            tokenValue: token,
            isOrganizer 
        });

        if (!token) {
            setError('Please log in to create events');
            return;
        }

        if (isOrganizer !== 'true') {
            setError('Only organizers can create events');
            return;
        }
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const token = localStorage.getItem('token');
            console.log('Submitting with token:', token);
            
            if (!token) {
                setError('Please log in to create events');
                return;
            }

            // Explicitly set the Authorization header for this request
            const response = await axiosInstance.post(
                API_ENDPOINTS.EVENTS.CREATE, 
                {
                    ...formData,
                    status: EventStatus.Published
                },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            
            console.log('Event creation response:', response);
            
            setSuccess(true);
            setFormData(initialFormData);
            
            // Redirect to events page after successful creation
            setTimeout(() => {
                navigate('/events');
            }, 2000);
        } catch (err) {
            const error = err as ApiError;
            console.error('Error creating event:', error);
            console.error('Error response:', error.response);
            
            if (error.response?.status === 401) {
                const token = localStorage.getItem('token');
                setError(`Authentication failed. ${token ? 'Your session might have expired.' : 'Please log in again.'}`);
            } else if (error.response?.status === 403) {
                setError('You do not have permission to create events. Only organizers can create events.');
            } else if (error.response?.data?.message) {
                setError(error.response.data.message);
            } else if (error.message === 'Network Error') {
                setError('Cannot connect to the server. Please check your connection and try again.');
            } else {
                setError('Failed to create event. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' || name === 'maxAttendees' ? Number(value) : value
        }));
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Create New Event</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="startDate">Start Date</Label>
                            <Input
                                id="startDate"
                                name="startDate"
                                type="datetime-local"
                                value={formData.startDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="endDate">End Date</Label>
                            <Input
                                id="endDate"
                                name="endDate"
                                type="datetime-local"
                                value={formData.endDate}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="price">Price ($)</Label>
                            <Input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                step="0.01"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="maxAttendees">Maximum Attendees</Label>
                            <Input
                                id="maxAttendees"
                                name="maxAttendees"
                                type="number"
                                min="1"
                                value={formData.maxAttendees}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded p-4">
                            <p className="text-red-600">{error}</p>
                            {error.includes('log in') && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-2"
                                    onClick={() => navigate('/login')}
                                >
                                    Go to Login
                                </Button>
                            )}
                        </div>
                    )}

                    {success && (
                        <p className="text-green-500">Event created successfully!</p>
                    )}

                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full"
                    >
                        {loading ? 'Creating...' : 'Create Event'}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
} 