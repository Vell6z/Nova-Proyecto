"use client";

// ⚠️ PLACEHOLDER TEMPORAL — TAREA 6 (Sol) lo reemplaza.
//
// Acá va la tabla con datos de ejemplo y el filtroEstado por estado. Los datos ya
// están listos en src/lib/mock-data.ts (USUARIOS_MOCK, con campo "estado").
// Sol: tu tabla reemplaza este componente. Recordá que solo se muestra en las
// vistas de Admin y Junta (nunca en Miembro) — eso ya está resuelto: este
// componente solo se usa en esas dos páginas.

import { USUARIOS_MOCK } from "@/lib/mock-data";
import { useState } from "react";

export function TablaUsuarios() {
  const [open, setOpen] = useState(false);

  const [filtroEstado, setfiltroEstado] = useState<"todos" | "activo" | "inactivo">("todos");

  const [filtroRol, setfiltroRol] = useState<"admin" | "junta" | "miembro" | "todos">("todos");

  const usuariosFiltrados = USUARIOS_MOCK.filter((usuario) => {
    const usuariosEstado = filtroEstado === "todos" || usuario.estado === filtroEstado;
    const usuariosRol = filtroRol === "todos" || usuario.rol === filtroRol;
    
    return usuariosEstado && usuariosRol;
  });

  return (
  <section> 
    <div className="mb-4">
      <button className="w-50 px-4 py-2 text-sm rounded-lg bg-indigo-500 text-white-700 hover:bg-indigo-800" onClick={() => setOpen(!open)}>
        Filtros
      </button>
      {open && (
        <div className="my-4 rounded-lg border border-slate-700 bg-slate-900 p-1.5">
          
          {/* Filtros de estado */}

          <div id="divEstado" className="flex flex-wrap gap-2 mb-2 mr-3 text-sm py-2 font-medium border-b border-slate-600 text-slate-400">
            <label className="w-26 px-4 py-2 font-medium">Estado:</label>
            <button
              type="button"
              onClick={() => setfiltroEstado("todos")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroEstado === "todos"
                  ? "bg-indigo-500 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              Todos
            </button>

            <button
              type="button"
              onClick={() => setfiltroEstado("activo")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroEstado === "activo" ? "bg-emerald-500 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`}
            >
              Activos
            </button>

            <button
              type="button"
              onClick={() => setfiltroEstado("inactivo")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroEstado === "inactivo"
                  ? "bg-rose-500 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              Inactivos
            </button>
          </div>

          {/* Filtros de rol */}

          <div id="divRol" className="flex flex-wrap mb-2 mr-3 text-sm font-medium text-slate-400 gap-4">
            <label className="px-4 py-2 w-24 font-medium">Rol:</label>
 
            <button
              type="button"
              onClick={() => setfiltroRol("todos")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroRol === "todos"
                  ? "bg-indigo-500 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              Todos
            </button>

            <button
              type="button"
              onClick={() => setfiltroRol("admin")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroRol === "admin" ? "bg-emerald-500 text-white" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`}
            >
              Admin
            </button>

            <button
              type="button"
              onClick={() => setfiltroRol("junta")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroRol === "junta"
                  ? "bg-rose-500 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              Junta
            </button>
            <button
              type="button"
              onClick={() => setfiltroRol("miembro")}
              className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                filtroRol === "miembro"
                  ? "bg-orange-500 text-white"
                  : "text-slate-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              Miembro
            </button>
          </div>
        </div>

    )}

      
    </div>
    
    
    {/* La tabla de usuarios */}

    <div className="rounded-lg overflow-x-auto border border-slate-600 bg-slate-800">
      <table className="w-full  rounded-lg text-sm text-left rtl:text-right text-body ">
        <thead className="w-full text-sm text-body bg-slate-900 border-b rounded-base border-slate-500">
          <tr>
                <th scope="col" className="px-6 py-3 font-medium ">
                    ID
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    E-mail
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Rol
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Estado
                </th>

          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((usuario) => (
            <tr key={usuario.id} className="w-full border-b rounded-base border-slate-500">
              <th scope="row"  className="bg-slate-900 text-slate-200 hover:bg-slate-800 px-4">
                {usuario.id}
              </th>
              <td className="px-6 py-4">{usuario.nombre}</td>
              <td className="px-6 py-4">{usuario.email}</td>
              <td className="px-6 py-4">{usuario.rol}</td>
              <td className="px-6 py-4">{usuario.estado}</td>
            </tr>
          ))}          </tbody>
      </table>
    </div>
    </section>
  );
}
