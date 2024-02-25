import {Links, Meta, Outlet, Scripts, ScrollRestoration} from "@remix-run/react";
import "./styles/tailwind.css";

export function Layout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="grid min-h-full grid-rows-[4rem_1fr_4rem] border-b border-b-gray-200">
      <header id="top-bar" className="flex items-center border-b border-b-gray-200 px-4">
        <div className="flex flex-1 items-center justify-end text-lg text-primary">SSR: Remix</div>
      </header>

      <main id="main-dashboard" className="p-5">
        <Outlet />
      </main>

      <footer className="flex items-center justify-center border-t border-t-gray-200 text-sm font-light tracking-widest">
        Copyright &copy; {new Date().getFullYear()} All Rights Reserved by Aman
      </footer>
    </div>
  );
}
