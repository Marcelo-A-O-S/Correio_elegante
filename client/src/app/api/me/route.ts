import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;
export async function GET(){
    const cookie = await cookies();
    const token = cookie.get("token")?.value;
    if (!token) {
        return NextResponse.json({authenticated: false}, {status: 401});
    }
    try {
        const payload = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({authenticated: true, user: payload}, {status: 200});
    } catch (error:any) {
        
        if (error.name === "TokenExpiredError") {
            return NextResponse.json({ message: "Token expirado" }, { status: 401 });
          }
        return NextResponse.json({authenticated: false}, {status: 401});
    }
}