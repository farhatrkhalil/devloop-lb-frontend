# Student Club Frontend - Simplified Setup

## Overview
This is a **simplified Next.js frontend** with mock data. The Go backend, Docker, and pnpm have been removed for the simplest possible setup.

## What's Included
- ✅ **Next.js 15** with TypeScript
- ✅ **Mock JSON data** (no backend needed)
- ✅ **Tailwind CSS** for styling
- ✅ **Internationalization** (English/Turkish)
- ✅ **Admin authentication** with mock login

## Mock Data Files
- `src/lib/mock-data/announcements.json` - Sample announcements
- `src/lib/mock-data/events.json` - Sample events
- `src/lib/mock-data/teams.json` - Sample team members
- `src/lib/mock-data/links.json` - Sample links
- `src/lib/mock-data/index.ts` - Mock API service

## Mock Authentication
The mock authentication system uses simple credentials:
- **Username**: `admin`
- **Password**: `admin123`

## API Endpoints Replaced
The following API endpoints have been replaced with mock data:
- `GET /auth` - User authentication validation
- `POST /auth` - User login
- `GET /announcements` - Get all announcements
- `GET /events` - Get all events (with optional limit parameter)
- `GET /teams` - Get team data
- `GET /links` - Get all links

## How to Run

### Simple Setup (Only 3 Commands!)
```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Then open: **http://localhost:3000**

## Connecting to Your .NET Core Backend

When you're ready to connect to your .NET Core backend APIs, you'll need to:

1. **Update the Mock API Service**: Replace the mock methods in `frontend/src/lib/mock-data/index.ts` with actual API calls to your .NET Core backend.

2. **Add Environment Variables**: Update your `.env` file to include your .NET Core backend URL:
   ```
   NEXT_PUBLIC_API_URL=https://your-dotnet-backend.com/api
   ```

3. **Update API Calls**: Replace the MockApiService calls with fetch calls to your .NET Core endpoints.

4. **Authentication**: Implement proper JWT token handling for your .NET Core authentication system.

## Sample API Call Replacement
Here's how to replace a mock API call with a real one:

**Before (Mock):**
```typescript
const { MockApiService } = await import('@/lib/mock-data');
const announcements = await MockApiService.getAnnouncements();
```

**After (Real API):**
```typescript
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/announcements`);
const announcements = await response.json();
```

## Sample Data Structure
All mock data follows the same structure as the original TypeScript interfaces:
- Announcements: Include multilingual titles, descriptions, types, and dates
- Events: Include event details with URLs and multilingual content
- Teams: Include management and auditing team members with positions
- Links: Include social media and resource links with icons

## Notes
- All mock data includes both English (en) and Turkish (tr) translations
- The mock authentication is for development purposes only
- Replace with proper authentication when connecting to your .NET Core backend
- The frontend is now completely decoupled from the Go backend and MongoDB 