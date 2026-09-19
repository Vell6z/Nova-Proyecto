"use client";

// RoleGuard: protege una ruta. (Tarea 4 - Velez, la parte más compleja.)
//
// Idea: cada página protegida (/admin, /junta, /miembro) se envuelve con este
// componente indicando qué rol necesita. Si el rol elegido en el selector NO
// coincide con el que pide la página, redirige al usuario a la vista que sí le
// corresponde. Así se simula el comportamiento de "rutas protegidas" sin tener
// autenticación real.

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useRole } from "@/context/RoleContext";
import { Role, ROLE_HOME } from "@/lib/roles";

type RoleGuardProps = {
  // Rol que exige esta página.
  allow: Role;
  // Contenido de la página (lo que se muestra si el rol está permitido).
  children: React.ReactNode;
};

export function RoleGuard({ allow, children }: RoleGuardProps) {
  const { role } = useRole();
  const router = useRouter();

  // Si el rol actual no es el que la página permite, redirigimos a la vista
  // correcta del rol actual. useEffect corre después del render, que es donde
  // Next.js permite navegar de forma segura.
  useEffect(() => {
    if (role !== allow) {
      router.replace(ROLE_HOME[role]);
    }
  }, [role, allow, router]);

  // Mientras el rol no coincida, no mostramos el contenido protegido: se ve
  // un aviso breve hasta que la redirección de arriba se complete.
  if (role !== allow) {
    return (
      <div className="rounded-lg border border-slate-700 bg-slate-800/40 p-6 text-slate-300">
        No tienes permiso para ver esta pantalla con el rol actual. Redirigiendo…
      </div>
    );
  }

  return <>{children}</>;
}
