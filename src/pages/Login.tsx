import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { API_ENDPOINTS, axiosInstance } from '../lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface LoginResponse {
    succeeded: boolean;
    token: string;
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    isOrganizer: boolean;
    errors: string[];
}

interface ApiError {
    response?: {
        status?: number;
        data?: {
            errors?: string[];
        };
    };
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            console.log('Attempting login with:', { email });
            
            const response = await axiosInstance.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, {
                email,
                password
            });

            console.log('Login response:', response.data);

            const { succeeded, token, isOrganizer, errors } = response.data;

            if (!succeeded) {
                setError(errors?.join(', ') || 'Login failed');
                return;
            }

            if (!token) {
                setError('No token received from server');
                return;
            }

            // Store auth data
            localStorage.setItem('token', token);
            localStorage.setItem('isOrganizer', String(isOrganizer));

            // Verify storage
            const storedToken = localStorage.getItem('token');
            const storedIsOrganizer = localStorage.getItem('isOrganizer');
            
            console.log('Stored auth data:', {
                hasToken: !!storedToken,
                isOrganizer: storedIsOrganizer,
                tokenLength: storedToken?.length
            });

            // Redirect to events page after successful login
            navigate('/events');
        } catch (err) {
            const error = err as ApiError;
            console.error('Login error:', error);
            console.error('Error response:', error.response?.data);
            
            if (error.response?.status === 401) {
                setError('Invalid email or password');
            } else if (error.response?.data?.errors) {
                setError(error.response.data.errors.join(', '));
            } else {
                setError('An error occurred. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Sign in to your account</CardTitle>
                    <CardDescription>
                        Enter your email and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Enter your password"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 rounded p-4">
                                <p className="text-red-600">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-purple-600 hover:bg-purple-700"
                        >
                            {loading ? 'Signing in...' : 'Sign in'}
                        </Button>

                        <div className="text-center text-sm">
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="font-medium text-purple-600 hover:text-purple-500"
                            >
                                Create one
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
} 