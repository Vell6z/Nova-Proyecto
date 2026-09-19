"use client";

// ⚠️ PLACEHOLDER TEMPORAL — TAREA 6 (Sol) lo reemplaza.
//
// Acá va la tabla con datos de ejemplo y el filtro por estado. Los datos ya
// están listos en src/lib/mock-data.ts (USUARIOS_MOCK, con campo "estado").
// Sol: tu tabla reemplaza este componente. Recordá que solo se muestra en las
// vistas de Admin y Junta (nunca en Miembro) — eso ya está resuelto: este
// componente solo se usa en esas dos páginas.

import { USUARIOS_MOCK } from "@/lib/mock-data";

export function TablaPlaceholder() {
  return (
    <div className="rounded-lg border border-dashed border-slate-600 bg-slate-800/30 p-4">
      <p className="mb-2 text-sm font-medium text-amber-300">
        [Placeholder] Tabla con filtro — Tarea 6 (Sol)
      </p>
      <p className="text-sm text-slate-400">
        Hay {USUARIOS_MOCK.length} usuarios mock disponibles en{" "}
        <code className="text-slate-300">src/lib/mock-data.ts</code>. Acá irá la
        tabla con el filtro por estado (activo / inactivo).
      </p>
    </div>
  );
}
