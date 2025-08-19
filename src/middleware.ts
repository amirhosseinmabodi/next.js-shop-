import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { log } from "node:console";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("cookies");
  
  if (token) {
    return NextResponse.next();
  }
  const url = new URL(request.url);
  url.pathname = "/login";
  return NextResponse.redirect(url.toString());
}

export const config = {
  matcher: ["/dashbord/:path*"],
};
