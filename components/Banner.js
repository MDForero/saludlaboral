'use client'
import { usePathname } from "next/navigation"

const Banner = () => {
    const pathname = usePathname()
    switch (pathname) {
        case '/':
            return (
                <main className=' relative'>
                    <img src="/images/compressed_foto14.webp" className="w-full h-[600px] object-top object-cover" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end items-end">
                        <img src="/images/logo.webp" className="w-[200px] h-[200px] object-center object-cover bg-white rounded-full" />
                    </div>
                </main>
            )
        case '/nosotros/':
            return (
                <main className=' relative'>
                    <img src="/images/nosotros.webp" className="w-full h-[600px] object-top object-cover" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end items-end">
                        <img src="/images/logo.webp" className="w-[200px] h-[200px] object-center object-cover bg-white rounded-full" />
                    </div>
                </main>
            )
        case '/servicios/':
            return (
                <main className=' relative'>
                    <img src="/images/bgServicios.webp" className="w-full h-[600px] object-center object-cover" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end items-end">
                        <img src="/images/logo.webp" className="w-[200px] h-[200px] object-center object-cover bg-white rounded-full" />
                    </div>
                </main>
            )
        case '/contacto/':
            return (
                <main className=' relative'>
                    <img src="/images/compressed_foto12.webp" className="w-full h-[600px] object-center object-cover" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-end items-end">
                        <img src="/images/logo.webp" className="w-[200px] h-[200px] object-center object-cover bg-white rounded-full" />
                    </div>
                </main>
            )
        default:
            return (
                <main className='banner'>
                    <h1>Salud laboral Monterrey IPS®</h1>
                    <h2>¡Cuidamos de tu salud y la de tus empleados!</h2>
                </main>
            )
    }
}

export default Banner