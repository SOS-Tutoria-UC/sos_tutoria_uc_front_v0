import React, { useState, useEffect } from "react";

const StarIcon = () => {
  return (
    <svg
      color="yellow"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="black"
      strokeWidth={2}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};

const Compatibilidad = ({ compatibilidad }) => {
  switch (compatibilidad) {
    case 1:
      return (
        <div style={{ display: "flex" }}>
          <StarIcon />
        </div>
      );
    case 2:
      return (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
        </div>
      );
    case 3:
      return (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      );
    case 4:
      return (
        <div style={{ display: "flex" }}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      );
    case 5:
      return (
        <div style={{ display: "flex" }}>
          <StarIcon />
        </div>
      );
    default:
      return <div style={{ display: "flex" }}></div>;
  }
};

const Estado = ({ estado }) => {
  if (estado === "APROBADO") {
    return (
      <span className="bg-green-100 p-3 rounded-md font-bold border-2 text-black">
        {estado}
      </span>
    );
  } else if (estado === "PENDIENTE") {
    return (
      <span className="bg-yellow-100 p-3 rounded-md font-bold border-2 text-black">
        {estado}
      </span>
    );
  } else {
    return (
      <span className="bg-red-100 p-3 rounded-md font-bold border-2 text-black">
        {estado}
      </span>
    );
  }
};

const solicitanteList = [
  {
    competencia: "Lógica Matemática",
    descripcion: "Necesito entender la ley de De Morgan",
    compatibilidad: 3,
    estado: "APROBADO",
    fecha_solicitud: "22/12/22",
  },
  {
    competencia: "Programación",
    descripcion: "Quiero hacer un chat en python",
    compatibilidad: 2,
    estado: "RECHAZADO",
    fecha_solicitud: "22/12/22",
  },
  {
    competencia: "Economía",
    descripcion: "No entiendo la ley de oferta y demanda",
    compatibilidad: 5,
    estado: "PENDIENTE",
    fecha_solicitud: "22/12/22",
  },
];

const Accordion = ({ label, labelAlumno }) => {
  const [showBody, setShowBody] = useState("hidden");

  const handleShowBody = () => {
    if (showBody) {
      setShowBody("");
    } else setShowBody("hidden");
  };
  return (
    <div className="bg-white border rounded-md border-slate-300">
      <h2 className="b-0" id="headingOne">
        <button
          className="
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
                "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
          onClick={() => handleShowBody()}
        >
          <span className="flex-1">{label}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h2>
      <div className={`${showBody} p-5`} aria-labelledby="headingOne">
        <spam className="text-red-500 font-bold">
          *Luego de dos días se rechazarán automáticamente las solicitudes
          pendientes
        </spam>

        <div className="py-4 px-5">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    {labelAlumno}
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
                    Estado
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Fecha de solicitud
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {solicitanteList.map((element) => (
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      Persona1
                    </th>
                    <td class="px-6 py-4">{element.competencia}</td>
                    <td class="px-6 py-4">{element.descripcion}</td>
                    <td class="px-6 py-4">
                      <Compatibilidad compatibilidad={element.compatibilidad} />
                    </td>
                    <td class="px-6 py-4">
                      <Estado estado={element.estado} />
                    </td>
                    <td class="px-6 py-4">{element.fecha_solicitud}</td>
                    <td class="px-6 py-4 text-right">
                      {label === "Tutorias Solicitadas" &&
                        element.estado === "APROBADO" && (
                          <button className="p-2 bg-green-200 rounded-md  hover:bg-green-300">
                            Seleccionar tutoría
                          </button>
                        )}
                      {label === "Solicitudes Recibidas" &&
                        element.estado === "PENDIENTE" && (
                          <div>
                            <button className="p-2 bg-green-200 rounded-md  hover:bg-green-300 mr-2">
                              Aprobar
                            </button>
                            <button className="p-2 bg-red-200 rounded-md  hover:bg-red-300">
                              Rechazar
                            </button>
                          </div>
                        )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  const [solicitadas, setSolicitadas] = useState([]);
  const [recibidas, setRecibidas] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <>
      <Accordion label="Tutorias Solicitadas" labelAlumno="Tutor" />
      <Accordion label="Solicitudes Recibidas" labelAlumno="Solicitante" />
    </>
  );
};

export default Main;
