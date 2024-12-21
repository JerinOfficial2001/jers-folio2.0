import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import cookie from "cookie";

export function middleware(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const authToken = cookies["JERSFOLIO-V2-AUTH"];
  const isAuthenticated = !!authToken;

  const url = req.nextUrl.clone();

  if (!isAuthenticated && url.pathname.startsWith("/dashboard")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
