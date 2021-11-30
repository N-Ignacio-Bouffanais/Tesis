import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="md:w-3/12 w-6/12 h-screen shadow-xl p-6 space-y-6 border-4 ">
      <div className="border-b flex justify-around ">
        <h1 className="text-gray-900 text-xl font-bold ">Menú</h1>
      </div>
      <div className="space-y-10">
        <div className="flex p-3 space-x-4 hover:bg-gray-200 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
          <Link href="/dashboard">
            <a className="text-gray-700 font-bold hover:text-blue-600 hover:cursor-pointer">
              Dashboard
            </a>
          </Link>
        </div>
        <div className="flex p-3 space-x-4 hover:bg-gray-200 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Link href="/mapa">
            <a className="text-gray-700 font-bold hover:text-blue-600 hover:cursor-pointer">
              Mapa
            </a>
          </Link>
        </div>
        <div className="flex p-3 space-x-4 hover:bg-gray-200 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <Link href="/camara">
            <a className="text-gray-700 font-bold hover:text-blue-600 hover:cursor-pointer">
              Camara
            </a>
          </Link>
        </div>
        <div className="flex p-3 space-x-4 hover:bg-gray-200 hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <p className="text-gray-700 font-bold hover:text-blue-600 hover:cursor-pointer">
            Perfil del usuario
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
