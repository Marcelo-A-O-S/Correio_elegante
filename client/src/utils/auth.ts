import * as jose from 'jose';
const JWT_SECRET = process.env.JWT_SECRET!;

export const login = async (secret:string) =>{
    const response = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ secret }),
    })
    if (!response.ok) {
        throw new Error("Login failed");
    }
    const data = await response.json();
    if (!data.token) {
        throw new Error("No token received");
    }
    return data.token;

}
export const verifyToken = async (token: string) =>{
    const { payload } = await jose.jwtVerify(
        token,
        new TextEncoder().encode(JWT_SECRET)
      );
    console.log(payload);
    return payload;
}