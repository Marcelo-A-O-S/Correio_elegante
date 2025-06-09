import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({ message: "Logout successful!" }, { status: 200 });
        response.cookies.delete("token");
        return response;
    }catch (error) {
        return NextResponse.json({ error: "Logout failed" }, { status: 500 });
    }
    
}