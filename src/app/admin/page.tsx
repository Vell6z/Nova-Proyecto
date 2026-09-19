"use client";

// Vista de Admin. Protegida: solo se muestra si el rol elegido es "admin".
// Incluye la tabla (placeholder de la tarea 6 de Sol).

import { RoleGuard } from "@/components/RoleGuard";
import { TablaPlaceholder } from "@/components/TablaPlaceholder";

export default function AdminPage() {
  return (
    <RoleGuard allow="admin">
      <section>
        <div className="mb-6 rounded-lg border border-rose-500/40 bg-rose-500/10 p-6">
          <h1 className="text-2xl font-bold text-rose-200">Panel de Admin</h1>
          <p className="mt-1 text-rose-100/80">
            Acceso total. Esta vista solo la ve el rol Admin.
          </p>
        </div>
        <TablaPlaceholder />
      </section>
    </RoleGuard>
  );
}
