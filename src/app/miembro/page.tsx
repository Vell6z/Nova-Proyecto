"use client";

// Vista de Miembro. Protegida: solo se muestra si el rol elegido es "miembro".
// OJO: esta vista NO lleva tabla. La tabla es solo para Admin y Junta.

import { RoleGuard } from "@/components/RoleGuard";

export default function MiembroPage() {
  return (
    <RoleGuard allow="miembro">
      <section>
        <div className="mb-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-6">
          <h1 className="text-2xl font-bold text-emerald-200">Panel de Miembro</h1>
          <p className="mt-1 text-emerald-100/80">
            Vista básica. Esta pantalla solo la ve el rol Miembro y no muestra la
            tabla de usuarios.
          </p>
        </div>
        <p className="text-slate-400">
          Contenido pensado para un miembro: información general, sin acceso a la
          gestión de usuarios.
        </p>
      </section>
    </RoleGuard>
  );
}
