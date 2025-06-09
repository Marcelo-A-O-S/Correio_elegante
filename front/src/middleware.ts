import {NextResponse, NextRequest } from 'next/server'

const protectedRoutes = [
    '/dashboard',
    '/settings',
    '/profile',
    '/api/hello',
    '/api/carta',
    '/api/users',
    '/api/auth',
    '/api/admin'
]
export async function middleware(req: NextRequest){
    
    if(protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route))) {
        const token = req.cookies.get('token');
        if(!token) {
            console.log('No token found, redirecting to login');
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
}