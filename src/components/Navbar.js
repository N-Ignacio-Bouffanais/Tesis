import { useRouter } from "next/router";
import Link from "next/link";
function Navbar() {
  const router = useRouter();
  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* Logo*/}
              <div>
                <Link href="/">
                  <a className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-1 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="font-extrabold text-lg text-white">Inicio</span>
                  </a>
                </Link>
              </div>
              {/* Primary nav*/}
              <div className="hidden md:flex items-center space-x-1">
                <button onClick={() => router.push('/Trabajadores/new')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-3 rounded">
                  Añadir trabajador
                </button>
              </div>
            </div>
            {/** secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <p className="font-bold py-5 px-8 text-white">
                Usuario conectado: Nicolas
              </p>
              <Link href="#">
                <a className="py-2 px-3 bg-yellow-500 text-white rounded hover:bg-yellow-700 transition duration-300 font-bold">
                  Cerrar Sesion
                </a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
