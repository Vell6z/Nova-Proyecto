"use client";

// RoleContext: guarda en el estado de React el rol que el usuario eligió.
//
// Este es el "contrato" que conecta las dos partes del proyecto:
//   - El selector de Sol (tarea 3) llama a setRole(...) para cambiar el rol.
//   - La lógica de rutas protegidas de Velez (tarea 4) lee role para decidir
//     qué mostrar o a dónde redirigir.
//
// Como no hay login real, el rol vive solo en memoria (useState). Al recargar
// la página vuelve al rol por defecto: es lo esperado en un prototipo mock.

import { createContext, useContext, useState, ReactNode } from "react";
import { Role, DEFAULT_ROLE } from "@/lib/roles";

// Forma de lo que el contexto expone a toda la app.
type RoleContextValue = {
  role: Role;
  setRole: (role: Role) => void;
};

// Se crea vacío; el valor real lo pone el Provider más abajo.
const RoleContext = createContext<RoleContextValue | undefined>(undefined);

// Envuelve a la app y mantiene el estado del rol.
export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(DEFAULT_ROLE);

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
}

// Hook para usar el rol desde cualquier componente:
//   const { role, setRole } = useRole();
// Sol usará esto en su selector. Velez lo usa en la lógica de rutas.
export function useRole() {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error("useRole debe usarse dentro de un <RoleProvider>");
  }
  return context;
}
