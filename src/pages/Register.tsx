import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_ENDPOINTS, axiosInstance } from '../lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

interface LoginResponse {
    token: string;
    isOrganizer: boolean;
}

interface RegisterRequest {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    address: string;
    isOrganizer: boolean;
}

interface ApiErrorResponse {
    errors?: Record<string, string[]>;
    message?: string;
}

const initialFormData: RegisterRequest = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    isOrganizer: false
};

export default function Register() {
    const [formData, setFormData] = useState<RegisterRequest>(initialFormData);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axiosInstance.post<LoginResponse>(API_ENDPOINTS.AUTH.REGISTER, formData);
            const { token, isOrganizer } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('isOrganizer', String(isOrganizer));
            navigate('/events');
        } catch (err) {
            const errorResponse = err?.response?.data as ApiErrorResponse | undefined;
            if (errorResponse?.errors) {
                const errorMessages = Object.values(errorResponse.errors).flat();
                setError(errorMessages.join(', '));
            } else {
                setError('Registration failed. Please try again.');
                console.error('Registration error:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Create your account</CardTitle>
                    <CardDescription>
                        Fill in your details to create a new account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth</Label>
                            <Input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input
                                id="address"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="isOrganizer"
                                name="isOrganizer"
                                checked={formData.isOrganizer}
                                onCheckedChange={(checked) => 
                                    setFormData(prev => ({ ...prev, isOrganizer: checked === true }))
                                }
                            />
                            <Label htmlFor="isOrganizer">Register as an Event Organizer</Label>
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-700"
                        >
                            {loading ? 'Creating account...' : 'Create account'}
                        </Button>

                        <div className="text-center text-sm">
                            Already have an account?{' '}
                            <a
                                href="/login"
                                className="font-medium text-purple-600 hover:text-purple-500"
                            >
                                Sign in
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
} 