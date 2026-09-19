// Modelo central de roles del prototipo.
// Todo lo relacionado con "qué roles existen" vive acá, para que tanto la
// lógica de rutas protegidas (Velez) como el selector de rol (Sol) usen la
// misma fuente de verdad.

// Los tres roles del panel. Es un tipo literal: TypeScript solo aceptará
// exactamente estos tres strings, nada más.
export type Role = "admin" | "junta" | "miembro";

// Lista de roles para poder recorrerlos (por ejemplo, para pintar botones).
export const ROLES: Role[] = ["admin", "junta", "miembro"];

// Etiquetas legibles para mostrar en pantalla.
export const ROLE_LABELS: Record<Role, string> = {
  admin: "Admin",
  junta: "Junta",
  miembro: "Miembro",
};

// Rol con el que arranca la app antes de que el usuario elija otro.
export const DEFAULT_ROLE: Role = "miembro";

// A qué ruta corresponde cada rol. La lógica de protección usa esto para
// saber a dónde mandar al usuario según el rol elegido.
export const ROLE_HOME: Record<Role, string> = {
  admin: "/admin",
  junta: "/junta",
  miembro: "/miembro",
};
