// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function proxy(request: NextRequest) {
  const theme = request.cookies.get("app-theme")?.value

  if (!theme) return NextResponse.next()

  const response = NextResponse.next()
  console.log('Middleware setting theme cookie:', theme)
  response.cookies.set("theme", theme)

  return response
}
