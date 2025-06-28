import { axiosInstance } from './api';

export const isAuthenticated = () => {
    return !!localStorage.getItem('token');
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const isOrganizer = () => {
    return localStorage.getItem('isOrganizer') === 'true';
};

export const logout = () => {
    // Clear all auth-related items from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('isOrganizer');
    
    // Clear any auth headers from axios instance
    delete axiosInstance.defaults.headers.common['Authorization'];
    
    // Redirect to login page
    window.location.href = '/login';
}; 