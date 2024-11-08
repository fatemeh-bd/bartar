// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const prefersDarkMode = request.headers.get('sec-ch-prefers-color-scheme') === 'dark';
  const response = NextResponse.next();

  if (prefersDarkMode) {
    response.headers.set('Set-Cookie', 'theme=dark; path=/');
  } else {
    response.headers.set('Set-Cookie', 'theme=light; path=/');
  }
  return response;
}
