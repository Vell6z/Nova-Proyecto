import type { Metadata } from "next";
import "./globals.css";
import { RoleProvider } from "@/context/RoleContext";
import { NavBar } from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Mini panel de roles",
  description: "Prototipo de práctica inspirado en NOVApp (datos mock)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* RoleProvider envuelve toda la app: cualquier página puede leer/cambiar el rol. */}
        <RoleProvider>
          <NavBar />
          <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
        </RoleProvider>
      </body>
    </html>
  );
}
