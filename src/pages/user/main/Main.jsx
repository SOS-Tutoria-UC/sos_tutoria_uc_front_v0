import React, {useState, useEffect} from 'react'



const Accordion = ({ label }) => {

    const [ showBody, setShowBody ] = useState("hidden")

    const handleShowBody = () => {
      if(showBody){setShowBody("")} else setShowBody("hidden")
    }
    return (
        <div className="bg-white border rounded-md border-slate-300">
            <h2 className="b-0" id="headingOne">
                <button className="
                    relative
                    flex
                    font-bold
                    text-xl
                    items-center
                    w-full
                    py-4
                    px-5
                text-gray-800 text-left
                    bg-slate-100
                    hover:bg-slate-200
                    border-0
                    rounded-none
                    transition
                    focus:outline-none
                " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={() => handleShowBody()}>
                    <span className="flex-1">{label}</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </h2>
        <div className={`${showBody} p-5`}  aria-labelledby="headingOne">
        <spam className='text-red-500 font-bold'>*Luego de dos días se rechazarán automáticamente las solicitudes pendientes</spam>

            <div className="py-4 px-5">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Competencia
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Descripción
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Compatibilidad
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Fecha de solicitud
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">
                                    Sliver
                                </td>
                                <td class="px-6 py-4">
                                    Laptop
                                </td>
                                <td class="px-6 py-4">
                                    $2999
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">
                                    White
                                </td>
                                <td class="px-6 py-4">
                                    Laptop PC
                                </td>
                                <td class="px-6 py-4">
                                    $1999
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">
                                    Black
                                </td>
                                <td class="px-6 py-4">
                                    Accessories
                                </td>
                                <td class="px-6 py-4">
                                    $99
                                </td>
                                <td class="px-6 py-4 text-right">
                                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    );
}

const Main = () => {
    const [solicitadas, setSolicitadas] = useState([]);
    const [recibidas, setRecibidas] = useState([]);


    useEffect(() => {

    }, [])

    useEffect(() => {

    }, [])

    
  return (
    
    
    <>
        <Accordion label="Tutorias Solicitadas" labelAlumno="Solicitante"/>
        <Accordion label="Solicitudes Recibidas" labelAlumno="Tutor"/>
    </>




  );
}

export default Main;