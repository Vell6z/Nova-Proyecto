"use client";

// Vista de Junta. Protegida: solo se muestra si el rol elegido es "junta".
// También incluye la tabla (placeholder de la tarea 6 de Sol).

import { RoleGuard } from "@/components/RoleGuard";
import { TablaUsuarios } from "@/components/TablaUsuarios";

export default function JuntaPage() {
  return (
    <RoleGuard allow="junta">
      <section>
        <div className="mb-6 rounded-lg border border-sky-500/40 bg-sky-500/10 p-6">
          <h1 className="text-2xl font-bold text-sky-200">Panel de Junta</h1>
        </div>

          <div className="grid grid-cols-3 grid-rows-2   flex gap-4 mb-4">

            <div className="col-span-3 border border-sky-500/80 p-4 rounded-lg">

              <h2 className="text-lg font-bold text-white mb-4">
                Actividad reciente
              </h2>

              <div className="space-y-3  text-slate-300">
                <div className="text-md bg-sky-800/40  border border-sky-500/40 rounded-lg shadow p-4">Mercadeo publicó nuevo contenido</div>
                <div className="text-md bg-sky-800/40  border border-sky-500/40 rounded-lg shadow p-4">Entraron 5 nuevos miembros</div>
                <div className="text-d bg-sky-800/40 border border-sky-500/40 rounded-lg shadow p-4">Se creó el evento <span className="text-blue-500">NEXT</span></div>
              </div>

            </div>
            
            <div className="bg-sky-400/10 border border-sky-500/40 p-3 rounded-lg shadow">
              <p className="text-sm text-white">Próximas actividades</p>
              <h2 className="text-lg font-bold">Reunión de departamento</h2>
              <p className="text-sm text-green-500/10">Miércoles</p>
            </div>
            
            <div className="bg-sky-400/10 border border-sky-500/40 p-4 rounded-lg shadow">
              <p className="text-sm text-white">Tareas pendientes</p>
              <h2 className="text-2xl font-bold">10</h2>
            </div>

            <div className="bg-sky-400/10 border border-sky-500/40 p-4 rounded-lg shadow">
              <p className="text-sm text-white">Departamento</p>
              <h2 className="text-xl font-bold">Communities</h2>
            </div>
          

          </div>

        <TablaUsuarios />
      </section>
    </RoleGuard>
  );
}
