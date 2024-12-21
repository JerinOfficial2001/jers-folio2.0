import { NextRequest, NextResponse } from "next/server";
import cookie from "cookie";

export async function GET(req: NextRequest) {
  const cookies = cookie.parse(req.headers.get("cookie") || "");
  const authToken = cookies["JERSFOLIO-V2-AUTH"];
  console.log("Auth Token:", authToken);

  // Set a state to be true if the authToken is present
  const isAuthenticated = !!authToken;

  return NextResponse.json({ authToken, isAuthenticated });
}
