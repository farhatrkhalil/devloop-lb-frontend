import { Announcement } from '@/types/Announcement';
import { Event } from '@/types/Event';
import { Team } from '@/types/Team';
import { LinkType } from '@/types/Link';
import { User } from '@/types/User';

// Import mock data
import announcementsData from './announcements.json';
import eventsData from './events.json';
import teamsData from './teams.json';
import linksData from './links.json';

export class MockApiService {
  // Mock authentication response
  static async authenticateUser(username: string, password: string): Promise<{ token: string; user: User } | null> {
    // Simple mock authentication - in real app, you'd validate against your .NET Core API
    if (username === 'admin' && password === 'admin123') {
      return {
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          _id: 'user123',
          username: 'admin',
          password: '' // Don't return password in real implementation
        }
      };
    }
    return null;
  }

  // Mock user validation from token
  static async validateToken(token: string): Promise<User | null> {
    // Simple mock validation - in real app, you'd validate against your .NET Core API
    if (token && token.startsWith('mock-jwt-token-')) {
      return {
        _id: 'user123',
        username: 'admin',
        password: '' // Don't return password in real implementation
      };
    }
    return null;
  }

  // Get announcements
  static async getAnnouncements(): Promise<Announcement[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return announcementsData as Announcement[];
  }

  // Get events with optional limit
  static async getEvents(limit?: number): Promise<Event[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    const events = eventsData as Event[];
    return limit ? events.slice(0, limit) : events;
  }

  // Get teams
  static async getTeams(): Promise<Team[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return teamsData as Team[];
  }

  // Get links
  static async getLinks(): Promise<LinkType[]> {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return linksData as LinkType[];
  }
}

// Utility function to simulate fetch responses
export function createMockResponse<T>(data: T, status: number = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    headers: {
      'Content-Type': 'application/json',
    },
  });
} 