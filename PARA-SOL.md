# Para Sol 👋 — cómo funciona el proyecto y qué te toca

Hola Sol. Velez ya dejó lista la base del proyecto. Este documento te explica
dos cosas:

1. **El concepto** de "rutas protegidas" y "roles" (Tarea 2), con ejemplos fáciles.
2. **Qué tenés que construir vos** (Tareas 3 y 6) y cómo conectarlo, sin tener
   que entender toda la lógica interna.

No hace falta que sepas nada avanzado de antemano. Vamos de a poco.

---

## 1. La idea en una frase

> Según el **rol** que el usuario elija (Admin, Junta o Miembro), la app le
> muestra una **pantalla distinta**.

No hay login real ni contraseñas. El "rol" es simplemente un dato que guardamos
en memoria mientras usás la página. Es un ensayo con datos inventados.

---

## 2. ¿Qué es un "rol"?

Pensalo como un carnet que dice quién sos dentro de la app. En este proyecto hay
tres carnets posibles:

- `admin`
- `junta`
- `miembro`

Cada carnet abre una puerta distinta:

- Con el carnet **admin** ves la pantalla de Admin.
- Con el carnet **junta** ves la pantalla de Junta.
- Con el carnet **miembro** ves la pantalla de Miembro.

---

## 3. ¿Qué es una "ruta protegida"?

Una **ruta** es una dirección dentro de la app. En este proyecto tenemos tres:

- `/admin`
- `/junta`
- `/miembro`

Una ruta **protegida** es una dirección que solo podés ver si tu carnet (rol)
coincide. Ejemplo:

- Si tu rol es `miembro` e intentás entrar a `/admin`, la app **no te deja** y
  te manda de vuelta a `/miembro`.

Esa "portería" que revisa el carnet y te redirige ya está construida por Velez
(se llama `RoleGuard`). **No tenés que tocarla.** Solo es útil que sepas que
existe, para entender por qué al cambiar de rol la pantalla cambia sola.

---

## 4. ¿Dónde se guarda el rol? (esto es lo que vas a usar)

El rol vive en un lugar central que toda la app puede leer, llamado
**RoleContext**. Para usarlo, en cualquier componente escribís:

```tsx
import { useRole } from "@/context/RoleContext";

const { role, setRole } = useRole();
```

Eso te da dos cosas:

- `role` → el rol actual (por ejemplo `"admin"`). Sirve para saber qué está
  elegido.
- `setRole` → una función para **cambiar** el rol. Le pasás uno de los tres
  valores: `setRole("admin")`, `setRole("junta")` o `setRole("miembro")`.

Y ya está. Cuando llamás a `setRole`, la pantalla se actualiza sola gracias a la
lógica de Velez. Vos no tenés que preocuparte por la redirección.

---

## 4.bis. Mapa del proyecto (para que te ubiques)

Estos son los archivos que existen y para qué sirve cada uno. Los marcados con
✏️ son los que a vos te toca crear o modificar; el resto es de Velez y **no
hace falta que lo toques**.

```
src/
├── app/
│   ├── layout.tsx            (base compartida de la app · Velez)
│   ├── page.tsx              (raíz "/", redirige según rol · Velez)
│   ├── admin/page.tsx        (vista Admin · Velez → acá enchufás tu tabla ✏️)
│   ├── junta/page.tsx        (vista Junta · Velez → acá enchufás tu tabla ✏️)
│   └── miembro/page.tsx      (vista Miembro, SIN tabla · Velez)
├── components/
│   ├── NavBar.tsx            (barra de arriba · Velez)
│   ├── RoleGuard.tsx         (portería de rutas protegidas · Velez, no tocar)
│   ├── RoleSelectorPlaceholder.tsx  (selector temporal → lo reemplazás vos ✏️)
│   └── TablaPlaceholder.tsx  (tabla temporal → la reemplazás vos ✏️)
├── context/
│   └── RoleContext.tsx       (guarda el rol · Velez → vos SOLO lo usás con useRole)
└── lib/
    ├── roles.ts              (roles válidos y etiquetas · lo LEÉS, no lo tocás)
    └── mock-data.ts          (datos de la tabla · lo LEÉS, no lo tocás)
```

Regla simple: **creás tus propios componentes** para el selector y la tabla, y
después los enchufás en las páginas. Los archivos de Velez (`RoleGuard`,
`RoleContext`, `roles.ts`, `mock-data.ts`) los usás pero no los modificás.

---

## 5. Tu Tarea 3 — El selector de rol

**Objetivo:** un componente donde el usuario elige su rol (con botones o un
menú desplegable, lo que prefieras).

### 📂 Archivos que tocás en esta tarea

| Archivo | Qué hacés ahí |
|---|---|
| `src/components/RoleSelector.tsx` | **Lo creás vos.** Es tu selector final. |
| `src/components/NavBar.tsx` | Cambiás una línea: reemplazás `<RoleSelectorPlaceholder />` por tu `<RoleSelector />`. |

> Podés ponerle el nombre que quieras al componente; `RoleSelector` es solo una
> sugerencia. Lo importante es dónde lo enchufás (la NavBar).

### 📖 Recursos que podés mirar para lograrlo

| Recurso | Para qué te sirve |
|---|---|
| `src/components/RoleSelectorPlaceholder.tsx` | Ejemplo funcionando de lo mismo que vas a hacer. Copiá la idea. |
| `src/context/RoleContext.tsx` | Ahí está `useRole()`. No lo edites, solo mirá qué te devuelve (`role`, `setRole`). |
| `src/lib/roles.ts` | Lista `ROLES` y etiquetas `ROLE_LABELS` si querés generar los botones en vez de escribirlos a mano. |


**Lo único obligatorio** es que use `setRole` cuando el usuario elige. Ejemplo
mínimo con botones:

```tsx
"use client";

import { useRole } from "@/context/RoleContext";

export function SelectorDeRol() {
  const { role, setRole } = useRole();

  return (
    <div>
      <button onClick={() => setRole("admin")}>Admin</button>
      <button onClick={() => setRole("junta")}>Junta</button>
      <button onClick={() => setRole("miembro")}>Miembro</button>
      <p>Rol actual: {role}</p>
    </div>
  );
}
```

Notas útiles:

- La primera línea `"use client";` es obligatoria porque tu componente usa
  interacción (clicks). Si te la olvidás, Next.js va a marcar un error.
- Ya hay una versión temporal de esto en
  `src/components/RoleSelectorPlaceholder.tsx`. Podés mirarla como ejemplo. Tu
  versión final la reemplaza.
- Los tres valores válidos (`"admin"`, `"junta"`, `"miembro"`) están definidos
  en `src/lib/roles.ts`. Si querés recorrerlos automáticamente en vez de
  escribir tres botones a mano, ahí hay una lista llamada `ROLES` y las
  etiquetas bonitas en `ROLE_LABELS`.

**No dependés de Velez para empezar esto.** Podés arrancar ya.

---

## 6. Tu Tarea 6 — La tabla con filtro

**Objetivo:** una tabla que muestra usuarios de ejemplo y que se puede filtrar
por estado (ver solo los "activos", por ejemplo).

### 📂 Archivos que tocás en esta tarea

| Archivo | Qué hacés ahí |
|---|---|
| `src/components/TablaUsuarios.tsx` | **Lo creás vos.** Es tu tabla final con el filtro. |
| `src/app/admin/page.tsx` | Cambiás una línea: reemplazás `<TablaPlaceholder />` por tu `<TablaUsuarios />`. |
| `src/app/junta/page.tsx` | Lo mismo: reemplazás `<TablaPlaceholder />` por tu `<TablaUsuarios />`. |

> ⚠️ **No toques** `src/app/miembro/page.tsx`. Esa vista NO lleva tabla. Si la
> agregás ahí, rompés uno de los requisitos del proyecto.

### 📖 Recursos que podés mirar para lograrlo

| Recurso | Para qué te sirve |
|---|---|
| `src/lib/mock-data.ts` | Los datos (`USUARIOS_MOCK`) y qué campos tiene cada usuario. **Solo lo leés.** |
| `src/components/TablaPlaceholder.tsx` | Ejemplo de cómo se importan y cuentan los datos mock. |
| `src/app/admin/page.tsx` y `src/app/junta/page.tsx` | Para ver dónde está el placeholder que vas a reemplazar. |

Los datos ya están listos, no tenés que inventarlos. Están en
`src/lib/mock-data.ts`:

```tsx
import { USUARIOS_MOCK } from "@/lib/mock-data";
// cada usuario tiene: id, nombre, email, rol, estado ("activo" | "inactivo")
```

Idea del filtro (usando `useState`, como en el selector):

```tsx
"use client";

import { useState } from "react";
import { USUARIOS_MOCK } from "@/lib/mock-data";

export function TablaUsuarios() {
  // "todos" = sin filtro; "activo"/"inactivo" = filtrar por ese estado
  const [filtro, setFiltro] = useState<"todos" | "activo" | "inactivo">("todos");

  const usuarios = USUARIOS_MOCK.filter(
    (u) => filtro === "todos" || u.estado === filtro
  );

  return (
    <div>
      {/* botones o un <select> para cambiar `filtro` con setFiltro(...) */}
      <table>{/* recorrés `usuarios` con .map(...) y pintás filas */}</table>
    </div>
  );
}
```

**Importante:** la tabla solo va en las vistas de **Admin** y **Junta**, nunca
en la de **Miembro**. Eso ya está resuelto: hay un placeholder
(`TablaPlaceholder`) usado solo en esas dos páginas. Cuando tengas tu tabla,
reemplazás ese placeholder ahí y listo.

---

## 7. Cómo probar lo que hacés

Levantá el proyecto con:

```bash
npm run dev
```

Después abrí `http://localhost:3000` en el navegador. Vas a ver la barra de
arriba con el selector temporal. Probá:

- Cambiar de rol y ver que la pantalla cambia de color y título.
- Estando en `miembro`, hacer click en el link `/admin` de la barra: te va a
  rebotar de vuelta a `/miembro` (eso es la ruta protegida funcionando).

---

## 8. Resumen de lo que necesitás recordar

| Necesito... | Uso esto |
|---|---|
| Leer o cambiar el rol | `const { role, setRole } = useRole()` |
| Los valores de rol válidos | `"admin"`, `"junta"`, `"miembro"` (en `src/lib/roles.ts`) |
| Datos para la tabla | `USUARIOS_MOCK` (en `src/lib/mock-data.ts`) |
| El campo para filtrar | `estado` → `"activo"` o `"inactivo"` |

### Tus tareas de un vistazo: qué tocás y qué mirás

| Tarea | Archivos que TOCÁS ✏️ | Archivos que solo MIRÁS 📖 |
|---|---|---|
| **3 · Selector** | Creás `src/components/RoleSelector.tsx` · editás `src/components/NavBar.tsx` | `RoleSelectorPlaceholder.tsx`, `RoleContext.tsx`, `roles.ts` |
| **6 · Tabla** | Creás `src/components/TablaUsuarios.tsx` · editás `admin/page.tsx` y `junta/page.tsx` | `mock-data.ts`, `TablaPlaceholder.tsx` |

> Nunca necesitás editar: `RoleGuard.tsx`, `RoleContext.tsx`, `lib/roles.ts`,
> `lib/mock-data.ts`, `layout.tsx`, `page.tsx` ni `miembro/page.tsx`. Esos son
> de Velez o son solo de lectura.

Cualquier duda, preguntá en el momento. La idea es que los dos aprendamos 🙂
