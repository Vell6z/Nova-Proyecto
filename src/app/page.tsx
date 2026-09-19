"use client";

// Página de inicio (/). No muestra contenido propio: manda al usuario a la
// vista que corresponde a su rol actual. Así, entrar a la raíz siempre lleva
// a una de las 3 vistas protegidas.

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRole } from "@/context/RoleContext";
import { ROLE_HOME } from "@/lib/roles";

export default function Home() {
  const { role } = useRole();
  const router = useRouter();

  useEffect(() => {
    router.replace(ROLE_HOME[role]);
  }, [role, router]);

  return <p className="text-slate-400">Cargando tu vista…</p>;
}
