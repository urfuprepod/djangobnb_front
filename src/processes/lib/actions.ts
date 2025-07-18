"use server";

import { cookies } from "next/headers";

export async function handleLogin(
    userId: string,
    accessToken: string,
    refreshToken: string
) {
    const cooks = await cookies();
    cooks.set("session_userid", userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });

    cooks.set("session_access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        path: "/",
    });

    cooks.set("session_refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
    });
}

export async function resetAuthCookies() {
    const cooks = await cookies();
    cooks.set("session_userid", "");
    cooks.set("session_access_token", "");
    cooks.set("session_refresh_token", "");
}
