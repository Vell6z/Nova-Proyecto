"use client";

// Vista de Junta. Protegida: solo se muestra si el rol elegido es "junta".
// También incluye la tabla (placeholder de la tarea 6 de Sol).

import { RoleGuard } from "@/components/RoleGuard";
import { TablaPlaceholder } from "@/components/TablaPlaceholder";

export default function JuntaPage() {
  return (
    <RoleGuard allow="junta">
      <section>
        <div className="mb-6 rounded-lg border border-sky-500/40 bg-sky-500/10 p-6">
          <h1 className="text-2xl font-bold text-sky-200">Panel de Junta</h1>
          <p className="mt-1 text-sky-100/80">
            Vista de seguimiento. Esta pantalla solo la ve el rol Junta.
          </p>
        </div>
        <TablaPlaceholder />
      </section>
    </RoleGuard>
  );
}
