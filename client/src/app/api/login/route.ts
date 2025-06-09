import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
const ADMIN_SECRET = process.env.ADMIN_SECRET!;
const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(request: Request) {
    const { secret } = await request.json();
    if ( secret !== ADMIN_SECRET ){
        return NextResponse.json({ message: "Invalid credentials!" }, { status: 401 });
    } 
    const token = jwt.sign({ secret }, JWT_SECRET, { expiresIn: '1h' });
    const response =  NextResponse.json({ message: "Login successful!", token }, { status: 200 });
    response.cookies.set({
        name: "token",
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 dia
      });
    return response
}