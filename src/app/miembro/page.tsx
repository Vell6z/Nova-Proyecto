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
          
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-emerald-400/10 row-span-2 border border-emerald-500/40 p-4 rounded-lg shadow">
            <p className="text-sm text-white">Tareas pendientes</p>
            <ul className="mt-2 text-white list-disc list-inside text-slate-300">
              <li>Completar perfil</li>
              <li>Preparación para NEXT</li>
              <li>Asistir a la reunión semanal</li>
            </ul>
          </div>

          <div className="bg-emerald-400/10 border border-emerald-500/40 p-4 rounded-lg shadow">
            <p className="text-sm text-white">Departamento</p>
            <h2 className="text-xl font-bold">Communities</h2>
          </div>

          <div className="bg-emerald-400/10 border border-emerald-500/40 p-4 rounded-lg shadow">
            <p className="text-sm text-white">Próximas actividades</p>
            <h2 className="text-lg font-bold">Reunión de departamento</h2>
            <p className="text-sm text-green-500/10">Miércoles</p>
          </div>
        </div>
      </section>
    </RoleGuard>
  );
}
