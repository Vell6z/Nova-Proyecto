"use client";

// ⚠️ PLACEHOLDER TEMPORAL — TAREA 3 (Sol) lo reemplaza.
//
// Este es un selector mínimo solo para que la app funcione de punta a punta
// mientras Sol construye el suyo. Sol: podés basarte en esto, pero tu versión
// es la que queda. Lo único que tu selector tiene que hacer es:
//   1. Leer el rol y setRole con:  const { role, setRole } = useRole();
//   2. Llamar setRole("admin" | "junta" | "miembro") cuando el usuario elige.
// El diseño (dropdown, botones, estilos) queda a tu criterio.

import { useRole } from "@/context/RoleContext";
import { ROLES, ROLE_LABELS } from "@/lib/roles";

export function RoleSelectorPlaceholder() {
  const { role, setRole } = useRole();

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-slate-400">Rol:</span>
      <div className="flex gap-1">
        {ROLES.map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={
              "rounded-md px-3 py-1 text-sm transition-colors " +
              (role === r
                ? "bg-indigo-500 text-white"
                : "bg-slate-700 text-slate-200 hover:bg-slate-600")
            }
          >
            {ROLE_LABELS[r]}
          </button>
        ))}
      </div>
    </div>
  );
}
