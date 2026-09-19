// Datos falsos (mock) para la tabla. No hay backend ni base de datos:
// esto simula lo que en el proyecto real vendría de una API.

// Estado posible de cada usuario. La tabla de Sol filtrará por este campo.
export type EstadoUsuario = "activo" | "inactivo";

export type UsuarioMock = {
  id: number;
  nombre: string;
  email: string;
  rol: "admin" | "junta" | "miembro";
  estado: EstadoUsuario;
};

// Lista de ejemplo. Datos inventados, solo para practicar.
export const USUARIOS_MOCK: UsuarioMock[] = [
  { id: 1, nombre: "Ana Torres", email: "ana@novapp.test", rol: "admin", estado: "activo" },
  { id: 2, nombre: "Luis Gómez", email: "luis@novapp.test", rol: "junta", estado: "activo" },
  { id: 3, nombre: "María Ruiz", email: "maria@novapp.test", rol: "miembro", estado: "inactivo" },
  { id: 4, nombre: "Pedro Díaz", email: "pedro@novapp.test", rol: "miembro", estado: "activo" },
  { id: 5, nombre: "Sofía Vega", email: "sofia@novapp.test", rol: "junta", estado: "inactivo" },
  { id: 6, nombre: "Carlos Mora", email: "carlos@novapp.test", rol: "miembro", estado: "activo" },
];
