"use client";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemProps {
    icon: ReactNode;
    path:string
}

const NavItem =({icon, path}: NavItemProps)=>{
    const pathName=usePathname();
    return(
        <Link href={path} className="w-full flex justify-center"> 
        <span className={pathName === path ? "bg-orange-400 w-10/12 flex justify-center rounded-md transition-colors py-2":"w-10/12 py-2" }>{icon}</span>
        </Link>
    )
}

export default NavItem;


//? es un operador ternario, que es una forma de escribir un if en una sola linea, si pathName es igual a path, entonces se le asigna la clase bg-orange-700
 //Span es un contenedor en línea para etiquetas de texto y elementos en línea