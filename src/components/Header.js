import React from 'react'

const Header = () => {
    return (
      <div className="flex w-full p-3 space-x-12 border-t-4 border-b-4 ">
        <div className="flex space-x-2">
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
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-900 font-bold">Usuario:</p>
          <p>Nicolas Bouffanais</p>
        </div>
        <div className="flex space-x-2">
          <p className="text-gray-900 font-bold">Número de identificación:</p>
          <p>0000675634</p>
        </div>
      </div>
    );
}

export default Header
