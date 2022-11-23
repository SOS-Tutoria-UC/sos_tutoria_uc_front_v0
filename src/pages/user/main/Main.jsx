/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Fragment } from "react";
import instance from "../../../config/axios/instance";
import useAuth from "../../../hooks/useAuth";
import { getDomainLabel } from "../../../utils/constantes";
import moment from "moment";
import "moment/locale/es";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Spinner } from "../../../components/spinner/Spinner";

const Main = () => {
  const [solicitadas, setSolicitadas] = useState([]);
  const [recibidas, setRecibidas] = useState([]);
  const [recibidasCount, setRecibidasCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const { auth } = useAuth();

  /*const StarIcon = () => {
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
  };*/

  /*const Compatibilidad = ({ compatibilidad }) => {
    console.log(compatibilidad);
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
  };*/

  const ModalMatrizHorario = (v) => {
    return Swal.fire({
      title: "Disponibilidad del Solicitante",
      html: v,
      width: "800px",
      color: "#716add",
      backdrop: `
          rgba(0,0,123,0.4)
          left top
          no-repeat
        `,
    });
  };

  const Row = (horario, label) => {
    return `<tr>
    <th scope="row" style='width:120px'>
      ${label}
    </th>
    <td style='width:10px'>
    <button style='background-color:${
      horario.lunes ? "#008cAf" : "gray"
    }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>
     </td>
     <td style='width:10px'>
     <button style='background-color:${
       horario.martes ? "#008cAf" : "gray"
     }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>
     </td>
     <td style='width:10px'>
     <button style='background-color:${
       horario.miercoles ? "#008cAf" : "gray"
     }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>
     </td>
     <td style='width:10px'>
     <button style='background-color:${
       horario.jueves ? "#008cAf" : "gray"
     }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>     </td>
     <td style='width:10px'>
     <button style='background-color:${
       horario.viernes ? "#008cAf" : "gray"
     }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>     </td>
     <td style='width:10px'>
     <button style='background-color:${
       horario.sabado ? "#008cAf" : "gray"
     }; border-radius: 10px'><span style='    color: rgba(0, 0, 0, 0);
    '>ho</span>
    </button>     </td>
</tr>`;
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
    } else if (estado === "SELECCIONADO") {
      return (
        <span className="bg-green-300 p-3 rounded-md font-bold border-2 text-black">
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

  const Accordion = ({ label, labelAlumno, data }) => {
    const [showBody, setShowBody] = useState("");
    const [expand, setExpand] = useState("");

    const modal = (title, text, icon) => {
      Swal.fire({
        title,
        text,
        icon,
        confirmButtonText: "Ok",
      });
    };

    const handleShowBody = () => {
      if (showBody) {
        setShowBody("");
      } else setShowBody("hidden");
    };

    const handleUpdateTask = (data, answer) => {
      setLoading(true);
      instance
        .put(`/task`, {
          answer,
          taskId: data.attributes.taskId,
          receiverId: data.attributes.userId,
        })
        .then((response) => {
          modal(response.data.msg, "", "success");
          setLoading(false);
          window.location.reload();
        })
        .catch((error) => {
          modal("Error!", error.response.data.msg, "error");
          setLoading(false);
          console.log(error.response);
        });
    };

    const handleSelectBestAnswer = (data) => {
      setLoading(true);
      instance
        .put(`/task/best-answer`, {
          tutor: data.receiver.profile_id,
          taskId: data.attributes.taskId,
          transactionId: data.transactionId,
        })
        .then((response) => {
          modal(response.data.msg, "", "success");
          setLoading(false);
          window.location.reload();
        })
        .catch((error) => {
          modal("Error!", error.response.data.msg, "error");
          console.log(error.response);
          setLoading(false);
        });
    };

    const Solicitadas = ({
      data,
      taskId,
      domain,
      competence,
      description,
      modality,
      state,
      review,
    }) => {
      const [showRequestBody, setShowRequestBody] = useState("");

      const handleShowRequestBody = () => {
        if (showRequestBody) {
          setShowRequestBody("");
        } else setShowRequestBody("hidden");
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
              onClick={() => handleShowRequestBody()}
            >
              <span className="flex-1 sm:block">{modality}</span>
              <span className="flex-1">{competence}</span>
              <span className="p-2 mr-2 bg-yellow-100 text-center rounded-md">
                {state}
              </span>

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
          <div
            className={`${showRequestBody} p-5`}
            aria-labelledby="headingOne"
          >
            <div className="py-4 px-5">
              <span className="m-2">Descripción: {description}</span>

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Tutor
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Estado
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Fecha de solicitud
                      </th>
                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Acciones</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {!data.length && (
                      <tr>
                        <th className="m-2 font-bold font-medium">
                          No hay datos
                        </th>
                      </tr>
                    )}
                    {data.map((element) => (
                      <tr
                        key={element._id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {state === "FINALIZADO" &&
                          element.state === "SELECCIONADO" ? (
                            <div className="lg:flex md:items-center">
                              {element.receiver.email}
                              {" | "}
                              {element.receiver.wenet_profile.phoneNumber && (
                                <a
                                  aria-label="Chat on WhatsApp"
                                  href={
                                    element.receiver !== null
                                      ? `https://api.whatsapp.com/send?l=es_py&phone=${element.receiver.wenet_profile.phoneNumber.replace(
                                          /\s/g,
                                          ""
                                        )}&text=Hola!`
                                      : ""
                                  }
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {" "}
                                  <img
                                    alt="Chat on WhatsApp"
                                    src="whatsapp.jpg"
                                    width={40}
                                    height={40}
                                  />
                                </a>
                              )}
                              {!element.receiver.wenet_profile.phoneNumber && (
                                <span
                                  style={{ fontSize: "small", color: "red" }}
                                >
                                  Phonenumber no configurado!
                                </span>
                              )}
                              {" | "}
                              {element.receiver.wenet_profile.name.first}{" "}
                              {element.receiver.wenet_profile.name.last}
                            </div>
                          ) : (
                            element.profile_id
                          )}
                        </th>
                        <td className="px-6 py-4">
                          <Estado estado={element.state} />
                        </td>
                        <td className="px-6 py-4">
                          {moment(element.createdAt).format("LLLL")}
                        </td>
                        <td className="px-6 py-4 text-right">
                          {element.state === "APROBADO" &&
                            state !== "FINALIZADO" && (
                              <button
                                className="p-2 bg-green-200 rounded-md  hover:bg-green-300"
                                onClick={() => {
                                  handleSelectBestAnswer(element);
                                }}
                              >
                                Seleccionar tutoría
                              </button>
                            )}
                          {state === "FINALIZADO" &&
                            element.state === "SELECCIONADO" &&
                            !review && (
                              <Link
                                to={`evaluar/requester/${taskId}`}
                                className="p-2 bg-green-200 rounded-md  hover:bg-green-300"
                              >
                                Evaluar
                              </Link>
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
          <span className="text-red-500 font-bold">
            *La solicitudes expiran dentro de 5 días desde la fecha de creación
          </span>

          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {label === "Tutorias Solicitadas" ? (
                data.map((elem) => (
                  <Solicitadas
                    data={elem.messages}
                    taskId={elem.task_id}
                    domain={elem.domain}
                    competence={elem.goal.name}
                    description={elem.description}
                    modality={elem.modality}
                    state={elem.state}
                    review={elem.review_requester}
                    key={elem._id}
                  />
                ))
              ) : (
                <>
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          {labelAlumno}
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Competencia
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Descripción
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Estado
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Fecha de solicitud
                        </th>
                        <th scope="col" className="px-6 py-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {!data.length && (
                        <tr>
                          <th className="m-2 font-medium">No hay datos</th>
                        </tr>
                      )}
                      {data.map((element) => (
                        <Fragment key={element._id}>
                          <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => {
                              expand ? setExpand("") : setExpand(element._id);
                            }}
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                            >
                              {element.state === "SELECCIONADO" ? (
                                <div className="lg:flex md:items-center">
                                  {element.requester.email}
                                  {" | "}
                                  {element.requester.wenet_profile
                                    .phoneNumber && (
                                    <a
                                      aria-label="Chat on WhatsApp"
                                      href={
                                        element.requester !== null
                                          ? `https://api.whatsapp.com/send?l=es_py&phone=${element.requester.wenet_profile.phoneNumber.replace(
                                              /\s/g,
                                              ""
                                            )}&text=Hola!`
                                          : ""
                                      }
                                      target="_blank"
                                      rel="noreferrer"
                                    >
                                      {" "}
                                      <img
                                        alt="Chat on WhatsApp"
                                        src="whatsapp.jpg"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  )}
                                  {!element.requester.wenet_profile
                                    .phoneNumber && (
                                    <span
                                      style={{
                                        fontSize: "small",
                                        color: "red",
                                      }}
                                    >
                                      Phonenumber no configurado!
                                    </span>
                                  )}
                                  {" | "}
                                  {
                                    element.requester.wenet_profile.name.first
                                  }{" "}
                                  {element.requester.wenet_profile.name.last}
                                </div>
                              ) : (
                                element.attributes.userId
                              )}
                            </th>
                            <td className="px-6 py-4">
                              {element.attributes.question}
                            </td>
                            <td className="px-6 py-4">{element.description}</td>
                            <td className="px-6 py-4">
                              <Estado estado={element.state} />
                            </td>
                            <td className="px-6 py-4">
                              {" "}
                              {moment(element.createdAt).format("LLLL")}
                            </td>
                            <td className="px-6 py-4 text-right">
                              {label === "Tutorias Solicitadas" &&
                                element.state === "APROBADO" && (
                                  <button className="p-2 bg-green-200 rounded-md  hover:bg-green-300">
                                    Seleccionar tutoría
                                  </button>
                                )}
                              {label === "Solicitudes Recibidas" &&
                                element.state === "PENDIENTE" && (
                                  <div>
                                    <button
                                      className="p-2 bg-green-200 rounded-md  hover:bg-green-300 mr-2 mb-2"
                                      onClick={() =>
                                        handleUpdateTask(element, "Sí")
                                      }
                                    >
                                      Aprobar
                                    </button>
                                    <button
                                      className="p-2 bg-red-200 rounded-md  hover:bg-red-300"
                                      onClick={() =>
                                        handleUpdateTask(element, "No")
                                      }
                                    >
                                      Rechazar
                                    </button>
                                  </div>
                                )}
                              {element.state === "SELECCIONADO" &&
                                !element.review_tutor && (
                                  <Link
                                    to={`evaluar/tutor/${element.attributes.taskId}`}
                                    className="p-2 bg-green-200 rounded-md  hover:bg-green-300"
                                  >
                                    Evaluar
                                  </Link>
                                )}
                            </td>
                          </tr>
                          {expand === element._id && (
                            <div className="w-full p-6">
                              <div>
                                <strong>MODALIDAD:</strong> {element.modality}
                              </div>{" "}
                              <div>
                                <strong>POSICIÓN:</strong>{" "}
                                {element.attributes.positionOfAnswerer ===
                                "anywhere"
                                  ? "Cualquier parte"
                                  : "Cercana"}
                              </div>
                              <div>
                                {element.state === "SELECCIONADO" ? (
                                  <div className="lg:flex md:items-center">
                                    {element.requester.wenet_profile
                                      .phoneNumber && (
                                      <a
                                        aria-label="Chat on WhatsApp"
                                        href={
                                          element.requester !== null
                                            ? `https://api.whatsapp.com/send?l=es_py&phone=${element.requester.wenet_profile.phoneNumber.replace(
                                                /\s/g,
                                                ""
                                              )}&text=Hola!`
                                            : ""
                                        }
                                      >
                                        {" "}
                                        <img
                                          alt="Chat on WhatsApp"
                                          src="whatsapp.jpg"
                                          width={40}
                                          height={40}
                                        />
                                      </a>
                                    )}
                                    {!element.requester.wenet_profile
                                      .phoneNumber && (
                                      <span
                                        style={{
                                          fontSize: "small",
                                          color: "red",
                                        }}
                                      >
                                        Phonenumber no configurado!
                                      </span>
                                    )}
                                  </div>
                                ) : null}
                              </div>
                              <div className="mt-2">
                                <button
                                  className="p-2 bg-cyan-200 rounded-md  hover:bg-cyan-300 mr-2 mb-2"
                                  onClick={() => {
                                    ModalMatrizHorario(
                                      element.requester_availability
                                        ? `<table style='margin:auto'>
                                      <thead>
                                        <tr>
                                          <th scope="col" style='width:70px'></th>
                                          <th scope="col" style='width:70px'>Lunes</th>
                                          <th scope="col" style='width:70px'>Martes</th>
                                          <th scope="col" style='width:90px'>Miércoles</th>
                                          <th scope="col" style='width:70px'>Jueves</th>
                                          <th scope="col" style='width:70px'>Viernes</th>
                                          <th scope="col" style='width:70px'>Sábado</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      ${Row(
                                        element.requester_availability._8a9,
                                        "8:00 a 9:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._9a10,
                                        "9:00 a 10:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._10a11,
                                        "10:00 a 11:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._11a12,
                                        "11:00 a 12:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._12a13,
                                        "12:00 a 13:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._13a14,
                                        "13:00 a 14:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._14a15,
                                        "14:00 a 15:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._15a16,
                                        "15:00 a 16:00"
                                      )}
                                      ${Row(
                                        element.requester_availability._16a17,
                                        "16:00 a 17:00"
                                      )}
                                      </tbody>
                                    </table>`
                                        : "Disponibilidad flexible"
                                    );
                                  }}
                                >
                                  Matriz de horario
                                </button>
                              </div>
                            </div>
                          )}
                        </Fragment>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-right gap-2">
                    {skip !== 0 && (
                      <button
                        onClick={back}
                        className="
                          w-full
                          px-6
                          py-2.5
                          bg-cyan-600
                          text-white
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                          rounded
                          shadow-md
                          hover:bg-cyan-700 hover:shadow-lg
                          focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
                          active:bg-cyan-800 active:shadow-lg
                          transition
                          duration-150
                          ease-in-out"
                      >
                        Anterior
                      </button>
                    )}
                    {skip + 5 < recibidasCount && (
                      <button
                        onClick={next}
                        className="
                          w-full
                          px-6
                          py-2.5
                          bg-cyan-600
                          text-white
                          font-medium
                          text-xs
                          leading-tight
                          uppercase
                          rounded
                          shadow-md
                          hover:bg-cyan-700 hover:shadow-lg
                          focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0
                          active:bg-cyan-800 active:shadow-lg
                          transition
                          duration-150
                          ease-in-out"
                      >
                        Siguiente
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const back = () => {
    setSkip(skip - 5);
    getByTutor();
  };

  const next = () => {
    setSkip(skip + 5);
    console.log(skip);
    getByTutor(skip + 5);
  };

  const getByTutor = (skip) => {
    setLoading(true);
    instance
      .get(`/task/tutor/${auth.profile_id}`, {
        params: {
          skip,
        },
      })
      .then((response) => {
        console.log("recibidas", response.data.solicitudes);
        setRecibidas(response.data.solicitudes);
        setRecibidasCount(response.data.count);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
      });
  };
  useEffect(() => {
    getByTutor(0);
  }, []);

  useEffect(() => {
    const getByRequester = () => {
      instance
        .get(`/task/requester/${auth.profile_id}`)
        .then((response) => {
          console.log("Solciitadas", response.data);
          setSolicitadas(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    getByRequester();
  }, []);

  return (
    <>
      {loading && <Spinner />}

      {solicitadas.length > 0 && (
        <Accordion
          label="Tutorias Solicitadas"
          labelAlumno="Tutor   "
          data={solicitadas}
        />
      )}
      <Accordion
        label="Solicitudes Recibidas"
        labelAlumno="Solicitante"
        data={recibidas}
      />
    </>
  );
};

export default Main;
