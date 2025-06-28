export interface Event {
    id: string;
    title: string;
    description: string;
    location: string;
    startDate: string;
    endDate: string;
    price: number;
    maxAttendees: number;
    organizerId: string;
    status: EventStatus;
    createdAt: string;
    updatedAt?: string;
}

export enum EventStatus {
    Draft = 0,
    Published = 1,
    Cancelled = 2,
    Completed = 3
} 