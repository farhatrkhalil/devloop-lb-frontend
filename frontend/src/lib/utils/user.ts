import {cookies} from "next/headers";
import {User} from "@/types/User";
import { MockApiService } from "@/lib/mock-data";

export async function getUser() {
    try {
        const cookieStore = await cookies();
        const token =  cookieStore.get('token')?.value;

        if (!token) {
            return null;
        }

        // Use mock authentication validation instead of backend API
        const user = await MockApiService.validateToken(token);
        return user;
    } catch (err) {
        console.error('Error fetching user:', err);
        return null;
    }
}
