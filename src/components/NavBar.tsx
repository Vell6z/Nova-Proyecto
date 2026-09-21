"use client";

// Barra de navegación principal.
// Contiene el nombre del proyecto, los enlaces y el selector de rol.

import Link from "next/link";
import { RoleSelector } from "./RoleSelector";

export function NavBar() {
  return (
    <header className="border-b border-slate-700 bg-slate-900">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/" className="text-xl font-bold text-white">
            NOVApp
          </Link>

          <div className="flex gap-2 text-sm">
            <Link
              href="/admin"
              className="rounded-md px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Admin
            </Link>
            <Link
              href="/junta"
              className="rounded-md px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Junta
            </Link>
            <Link
              href="/miembro"
              className="rounded-md px-3 py-2 text-slate-300 hover:bg-slate-700 hover:text-white"
            >
              Miembro
            </Link>
          </div>
        </div>

        <RoleSelector />
      </nav>
    </header>
  );
}
