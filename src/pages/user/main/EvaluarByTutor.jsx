import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "../../../components/spinner/Spinner";
import instance from "../../../config/axios/instance";
import { useSelect } from "../../../hooks/inputs/useSelect";

const EvaluarByTutor = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tutoria, setTutoria] = useState(true);
  const [motivo, setMotivo] = useState("");
  const [qs01, SelectQs01] = useSelect(
    "qs01",
    "Prestó atención al contenido desarrollado?",
    [
      { id: "1", name: "No en absoluto" },
      { id: "2", name: "Muy poco" },
      { id: "3", name: "Parcialmente" },
      { id: "4", name: "Bastante" },
      { id: "5", name: "Totalmente" },
    ],
    "Seleccione respuesta"
  );
  const [qs02, SelectQs02] = useSelect(
    "qs02",
    "El alumno contaba con los materiales necesarios para la tutoría?",
    [
      { id: "1", name: "No" },
      { id: "2", name: "Incompleto" },
      { id: "3", name: "Sí" },
    ],
    "Seleccione respuesta"
  );
  const [qs03, SelectQs03] = useSelect(
    "qs03",
    "Llegó en el horario acordado?",
    [
      { id: "1", name: "No se fue a la tutoría" },
      { id: "2", name: "Llegó un poco tarde" },
      { id: "3", name: "Llegó muy tarde" },
      { id: "4", name: "Muy puntual" },
    ],
    "Seleccione respuesta"
  );
  const [qs04, SelectQs04] = useSelect(
    "qs04",
    "Fue cordial/amable?",
    [
      { id: "1", name: "No en absoluto" },
      { id: "2", name: "Poco amable" },
      { id: "3", name: "Parcialmente" },
      { id: "4", name: "Bastante" },
      { id: "5", name: "Totalmente amable" },
    ],
    "Seleccione respuesta"
  );
  const [qs05, SelectQs05] = useSelect(
    "qs05",
    "Cuánto tiempo duró la tutoría?",
    [
      { id: "1", name: "Menos de 30 min" },
      { id: "2", name: "Entre 30 min a 1 hora" },
      { id: "3", name: "Entre 1 a 2 horas" },
      { id: "4", name: "Entre 2 a 3 horas" },
      { id: "5", name: "Entre 4 a 5 horas" },
      { id: "6", name: "Más de 5 horas" },
    ],
    "Seleccione respuesta"
  );
  const [qs06, SelectQs06] = useSelect(
    "qs06",
    "Si no se realizó la tutoría... por qué?",
    [
      { id: "1", name: "No asistí a la tutoría" },
      { id: "2", name: "El alumno no asistió a la tutoría" },
      { id: "2", name: "Otro" },
    ],
    "Seleccione respuesta"
  );
  const [loading, setLoading] = useState(false);

  const modal = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "Ok",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tutoria) {
      if (qs01 === "") {
        modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
        return;
      }
      if (qs02 === "") {
        modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
        return;
      }
      if (qs03 === "") {
        modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
        return;
      }
      if (qs04 === "") {
        modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
        return;
      }
      if (qs05 === "") {
        modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
        return;
      }
    }

    if (!tutoria)
      if (motivo === "") {
        modal(
          "Campo obligatorio!",
          "Motivo por el cual no se realizó la tutoría",
          "warning"
        );
        return;
      }

    setLoading(true);
    instance
      .post("/task/review-by-tutor", {
        task_id: params.taskId,
        qs01,
        qs02,
        qs03,
        qs04,
        qs05,
        motivo,
      })
      .then((response) => {
        setLoading(false);
        modal(response.data.msg, "", "success");
        navigate("/user");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        modal("Error!", error.response.data.msg, "error");
      });
  };

  return (
    <>
      <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
        {loading && <Spinner />}
        <div className="mb-5">
          <h3 className="text-3xl leading-6 font-bold text-gray-900 mb-4">
            Evaluación de Tutoría
          </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-6">
              <input
                id="tutoria"
                disabled={loading}
                type="checkbox"
                value={tutoria}
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => {
                  setTutoria(!tutoria);
                }}
              />
              <label
                for="tutoria"
                className="ml-2 2xl font-medium text-gray-900 dark:text-gray-300"
              >
                No se realizó la tutoría
              </label>
            </div>
            {tutoria && (
              <>
                <div className="w-full px-3 mb-6">
                  <SelectQs01 disabled={loading} />
                </div>
                <div className="w-full px-3 mb-6">
                  <SelectQs02 disabled={loading} />
                </div>
                <div className="w-full px-3 mb-6">
                  <SelectQs03 disabled={loading} />
                </div>
                <div className="w-full px-3 mb-6">
                  <SelectQs04 disabled={loading} />
                </div>
                <div className="w-full px-3 mb-6">
                  <SelectQs05 disabled={loading} />
                </div>
              </>
            )}
            {!tutoria && (
              <div className="w-full px-3 mb-6">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  ¿Por qué no se realizó la tutoría?
                </label>
                <textarea
                  id="motivo"
                  rows="4"
                  disabled={loading}
                  value={motivo}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escribir motivo"
                  onChange={(e) => setMotivo(e.target.value)}
                ></textarea>
              </div>
            )}
          </div>

          <button
            disabled={loading}
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
            Guardar
          </button>
        </form>
      </div>
    </>
  );
};

export default EvaluarByTutor;
