"use server";

import { EnumTokens } from "@/shared/types";
import { cookies } from "next/headers";

export async function handleRefresh() {
    console.log("handleRefresh");

    const refreshToken = await getRefreshToken();
    const cooks = await cookies();

    const token = await fetch("http://localhost:8000/api/auth/token/refresh/", {
        method: "POST",
        body: JSON.stringify({
            refresh: refreshToken,
        }),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => response.json())
        .then((json) => {
            console.log("Response - Refresh:", json);

            if (json.access) {
                cooks.set("session_access_token", json.access, {
                    httpOnly: true,
                    secure: false,
                    maxAge: 60 * 60, // 60 minutes
                    path: "/",
                });

                return json.access;
            } else {
                resetAuthCookies();
            }
        })
        .catch((error) => {
            console.log("error", error);

            resetAuthCookies();
        });

    return token;
}

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
    cooks.set(EnumTokens.ACCESS_TOKEN, "");
    cooks.set(EnumTokens.REFRESH_TOKEN, "");
}

export async function getAccessToken() {
    let accessToken = (await cookies()).get("session_access_token")?.value;

    if (!accessToken) {
        accessToken = await handleRefresh();
    }

    return accessToken;
}

export async function getRefreshToken() {
    let refreshToken = (await cookies()).get("session_refresh_token")?.value;

    return refreshToken;
}
