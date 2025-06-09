import { NextResponse } from "next/server";
import * as jose from 'jose';
const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(request: Request) {
    const authHearder = request.headers.get("Authorization");
    console.log("Authorization Header:", authHearder);
    if(!authHearder || !authHearder.startsWith("Bearer ")){
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const token = authHearder.split(" ")[1];
    try{
        const payload = await jose.jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        return NextResponse.json({ message: "Acesso autorizado", payload }, { status: 200 });
    }catch(error){
        return NextResponse.json({ message: "Token inválido ou expirado" }, { status: 401 });
    }
}