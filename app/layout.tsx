//Layout nos proporciona contenido global que se aplica a todas las páginas de nuestra aplicación. En este caso, estamos importando un archivo CSS global y fuentes locales que se aplicarán a todas las páginas.
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({subsets: ["latin"]});
import "./global.css";
import Providers from "@/providers";


export const metadata: Metadata = {
  title: "Oxxo",
  description: "Página de administración de productos Oxxo",
};

export default function RootLayout({ //RootLayout es una función que recibe un objeto con la propiedad children y retorna un JSX
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={inter.className}>
          <Providers>{children}</Providers> 
      </body>
    </html>
  );
}
