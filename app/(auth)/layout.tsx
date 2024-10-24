//(auth) carpeta que contiene los componentes de autenticación, no aparecerá en la URL de la aplicación. En este caso, AuthLayout es un componente que recibe un objeto con la propiedad children y retorna un JSX. Este componente se utiliza para envolver las páginas de autenticación de nuestra aplicación.
import Image from "next/image";
export default function AuthLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return ( 
    <div className = "bg-orange-200 w-screen h-screen overflow-hidden grid">
        <div className = "place-content-center place-self-center place-items-center text-center">
            <div className = "flex flex-col items-center bottom-10 relative">
                <Image 
                    src = "/oxxo-logo.svg" 
                    alt="Logo de Oxxo" 
                    width={250} 
                    height={0}
                />
            </div>
            {children}
        </div>
    </div>
    )
}