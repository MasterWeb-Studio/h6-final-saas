import { NextResponse, type NextRequest } from 'next/server';
import { SESSION_COOKIE_NAME, verifyAdminSession } from './lib/admin-session';

// /admin/** ve /api/admin/** rotalarını koruyor.
// Public istisnalar: login sayfası ve auth endpoint'leri.

const PUBLIC_PATHS = new Set<string>([
  '/admin/login',
  '/api/admin/auth',
  '/api/admin/logout',
]);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  const cookieValue = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  const authed = await verifyAdminSession(cookieValue);

  if (!authed) {
    // API route'larda JSON 401; sayfa rotalarında login'e yönlendir.
    if (pathname.startsWith('/api/')) {
      return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
    }
    const loginUrl = new URL('/admin/login', request.url);
    // Login sonrası geri dönmek için 'from' parametresi
    if (pathname !== '/admin') loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
