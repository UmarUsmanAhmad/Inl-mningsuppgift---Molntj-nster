// Backend API endpoints configuration
export const API_CONFIG = {
    USER_SERVICE: 'https://userservice-wo2c.onrender.com',
    BOOKING_SERVICE: 'http://localhost:5049',
    EVENT_SERVICE: 'https://eventservice-dafq.onrender.com',
};

// API endpoints for different features
export const API_ENDPOINTS = {
    // User Service endpoints
    AUTH: {
        LOGIN: `${API_CONFIG.USER_SERVICE}/api/Auth/login`,
        REGISTER: `${API_CONFIG.USER_SERVICE}/api/Auth/register`,
        REFRESH_TOKEN: `${API_CONFIG.USER_SERVICE}/api/Auth/refresh-token`,
    },
    USERS: {
        PROFILE: `${API_CONFIG.USER_SERVICE}/api/Users/profile`,
        UPDATE_PROFILE: `${API_CONFIG.USER_SERVICE}/api/Users/profile`,
    },
    // Event Service endpoints
    EVENTS: {
        LIST: `${API_CONFIG.EVENT_SERVICE}/api/Events`,
        CREATE: `${API_CONFIG.EVENT_SERVICE}/api/Events`,
        DETAILS: (id: string) => `${API_CONFIG.EVENT_SERVICE}/api/Events/${id}`,
        UPDATE: (id: string) => `${API_CONFIG.EVENT_SERVICE}/api/Events/${id}`,
        DELETE: (id: string) => `${API_CONFIG.EVENT_SERVICE}/api/Events/${id}`,
    },
    // Booking Service endpoints
    BOOKINGS: {
        LIST: `${API_CONFIG.BOOKING_SERVICE}/api/Bookings`,
        CREATE: `${API_CONFIG.BOOKING_SERVICE}/api/Bookings`,
        DETAILS: (id: string) => `${API_CONFIG.BOOKING_SERVICE}/api/Bookings/${id}`,
        CANCEL: (id: string) => `${API_CONFIG.BOOKING_SERVICE}/api/Bookings/${id}/cancel`,
    },
};

// Axios instance configuration
import axios from 'axios';

export const axiosInstance = axios.create({
    timeout: 10000, // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptor to add auth token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Just clear the auth data without redirecting
            localStorage.removeItem('token');
            localStorage.removeItem('isOrganizer');
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
        return Promise.reject(error);
    }
); 