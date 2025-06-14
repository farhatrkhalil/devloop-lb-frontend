"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MockApiService } from "@/lib/mock-data";

export async function handleLogin(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    // Use mock authentication instead of backend API
    const authResult = await MockApiService.authenticateUser(username, password);

    if (authResult) {
        const token = authResult.token;

        (await cookies()).set("token", token, {
            httpOnly: true,
            //secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
            domain: process.env.SITE_HOSTNAME
        });

        redirect(`/admin`);
    } else {
        console.error("Login failed. Please try again.");
    }
}
