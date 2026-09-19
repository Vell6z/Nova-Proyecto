"use client";

// Barra superior compartida: navegación entre las 3 vistas + el selector de rol.
// La navegación es solo para poder probar la protección de rutas manualmente
// (entrar a /admin siendo miembro, por ejemplo, y ver que redirige).

import Link from "next/link";
import { RoleSelectorPlaceholder } from "./RoleSelectorPlaceholder";

export function NavBar() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3">
        <div className="flex items-center gap-4">
          <span className="font-semibold text-slate-100">Mini panel de roles</span>
          <div className="flex gap-3 text-sm text-slate-400">
            <Link href="/admin" className="hover:text-slate-100">
              /admin
            </Link>
            <Link href="/junta" className="hover:text-slate-100">
              /junta
            </Link>
            <Link href="/miembro" className="hover:text-slate-100">
              /miembro
            </Link>
          </div>
        </div>
        <RoleSelectorPlaceholder />
      </nav>
    </header>
  );
}
