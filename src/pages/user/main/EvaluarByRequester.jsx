import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "../../../components/spinner/Spinner";
import instance from "../../../config/axios/instance";
import { useSelect } from "../../../hooks/inputs/useSelect";

const EvaluarByRequester = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [qs01, SelectQs01] = useSelect(
    "qs01",
    "El tutor supo del tema?",
    [
      { id: "1", name: "No en absoluto" },
      { id: "2", name: "Muy poco" },
      { id: "3", name: "Parcialmente" },
      { id: "4", name: "Bastante" },
      { id: "5", name: "Tiene total dominio sobre el tema" },
    ],
    "Seleccione respuesta"
  );
  const [qs02, SelectQs02] = useSelect(
    "qs02",
    "El tutor cumplió con el horario acordado?",
    [
      { id: "1", name: "No se fue a la tutoría" },
      { id: "2", name: "Llegó un poco tarde" },
      { id: "3", name: "Llegó muy tarde" },
      { id: "4", name: "Muy puntual" },
    ],
    "Seleccione respuesta"
  );
  const [qs03, SelectQs03] = useSelect(
    "qs03",
    "El tutor fue cordial/amable?",
    [
      { id: "1", name: "No en absoluto" },
      { id: "2", name: "Poco amable" },
      { id: "3", name: "Parcialmente" },
      { id: "4", name: "Bastante" },
      { id: "5", name: "Totalmente amable" },
    ],
    "Seleccione respuesta"
  );
  const [qs04, SelectQs04] = useSelect(
    "qs04",
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
  const [qs05, SelectQs05] = useSelect(
    "qs05",
    "Si no se realizó la tutoría... por qué?",
    [
      { id: "1", name: "No asistí a la tutoría" },
      { id: "2", name: "El tutor asistió a la tutoría" },
      { id: "3", name: "Otro" },
    ],
    "Seleccione respuesta"
  );
  const [qs06, SelectQs06] = useSelect(
    "qs06",
    "El tutor supo transmitir/explicar el tema?",
    [
      { id: "1", name: "No en absoluto" },
      { id: "2", name: "Muy poco" },
      { id: "3", name: "Parcialmente" },
      { id: "4", name: "Bastante" },
      { id: "5", name: "Tiene total dominio sobre el tema" },
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
    if (qs06 === "") {
      modal("Campo obligatorio!", "Seleccione una respuesta!", "warning");
      return;
    }

    setLoading(true);
    instance
      .post("/task/review-by-requester", {
        task_id: params.taskId,
        qs01,
        qs02,
        qs03,
        qs04,
        qs05,
        qs06,
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
              <SelectQs01 disabled={loading} />
            </div>
            <div className="w-full px-3 mb-6">
              <SelectQs06 disabled={loading} />
            </div>
            <div className="w-full px-3 mb-6">
              <SelectQs03 disabled={loading} />
            </div>
            <div className="w-full px-3 mb-6">
              <SelectQs02 disabled={loading} />
            </div>
            <div className="w-full px-3 mb-6">
              <SelectQs04 disabled={loading} />
            </div>
            <div className="w-full px-3 mb-6">
              <SelectQs05 disabled={loading} />
            </div>
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

export default EvaluarByRequester;
