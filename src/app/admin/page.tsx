"use client";

// Vista de Admin. Protegida: solo se muestra si el rol elegido es "admin".
// Incluye la tabla (placeholder de la tarea 6 de Sol).

import { RoleGuard } from "@/components/RoleGuard";
import { TablaUsuarios } from "@/components/TablaUsuarios";


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


        <div className="grid grid-cols-3 flex gap-4 mb-4">
          <div className="bg-rose-500/10 p-4 rounded-lg border border-rose-500">
            <p className="text-sm font-cursive text-rose-200">Usuarios totales</p>
            <h2 className="text-2xl text-white-400 font-bold">
              42
              {}

            </h2>
          </div>

          <div className="bg-rose-500/10 p-4 rounded-lg border border-rose-500">
            <p className="text-sm font-cursive text-rose-200">Usuarios activos</p>
            <h2 className="text-2xl text-white-400 font-bold">4</h2>
          </div>

          <div className="bg-rose-500/10 p-4 rounded-lg border border-rose-500">
            <p className="text-sm font-cursive text-rose-200">Usuarios inactivos</p>
            <h2 className="text-2xl text-white-400 font-bold">34</h2>
          </div>
          
        </div>


        <TablaUsuarios />
      </section>
    </RoleGuard>
  );
}
