import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./utils/auth";

const protectedRoutes = [
    '/admin/dashboard',
    '/admin/create',
    '/api/hello',
    '/api/carta',
    '/api/users',
    '/api/auth',
    '/api/admin',
    '/api/carta',
    '/api/logout',
    '/admin/trechos',
    '/admin/cartas',
    '/admin/impressoes',
]

export async function middleware(req: NextRequest){
    if(protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        try {
            const payload = verifyToken(token);
            if (!payload) {
                console.log("Payload inválido ou expirado");
                return new Response("Unauthorized", { status: 401 });
            }

            return NextResponse.next();
        } catch (error) {
            return new Response("Unauthorized", { status: 401 });
        }
    }
}