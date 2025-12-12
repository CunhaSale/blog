// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const theme = request.cookies.get("app-theme")?.value

  if (!theme) return NextResponse.next()

  const response = NextResponse.next()
  response.cookies.set("theme", theme)

  return response
}
