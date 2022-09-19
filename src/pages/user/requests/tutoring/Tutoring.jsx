import React, { useState } from "react";
import { useSelect } from "../../../../hooks/inputs/useSelect";
import { useRow } from "../../../../hooks/inputs/useRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../../../components/spinner/Spinner";
import "./tutoring.css";

import { SKILLS } from "../../../../utils/constantes";
import instance from "../../../../config/axios/instance";

const Tutoring = (props) => {
  const [stateModalidad, SelectModalidad] = useSelect(
    "m1",
    "Qué modalidad prefieres que sea la tutoría?",
    [
      { id: "p", name: "Presencial" },
      { id: "r", name: "Remoto" },
      { id: "i", name: "Indiferente" },
    ],
    "Seleccione modalidad"
  );
  const [stateBeliefsAndValues, SelectBeliefsAndValues] = useSelect(
    "b1",
    "Qué similitud en creencias/valores el tutor debe tener?",
    [
      { id: "similar", name: "Similar" },
      { id: "indifferent", name: "Indiferente" },
      { id: "different", name: "Diferente" },
    ],
    "Seleccione similitud en creencias"
  );

  const [stateCompetencia, SelectCompetencia] = useSelect(
    "c1",
    "Elija sobre qué competencia",
    [
      ...SKILLS["Ciencias exactas"],
      ...SKILLS["Ciencias de la computación"],
      ...SKILLS["Salud"],
      ...SKILLS["Administrativas y Contables"],
      ...SKILLS["Ciencias Sociales"],
      ...SKILLS["Jurídicas"],
      ...SKILLS["Ciencias de la Electrónica"],
      ...SKILLS["Diseño y Construcción"],
      ...SKILLS["Ambiental"],
    ],
    "Seleccione compentencia"
  );
  const [descripcion, setDescripcion] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [state0, Row0] = useRow("8:00 a 9:00");
  const [state1, Row1] = useRow("9:00 a 10:00");
  const [state2, Row2] = useRow("10:00 a 11:00");
  const [state3, Row3] = useRow("11:00 a 12:00");
  const [state4, Row4] = useRow("12:00 a 13:00");
  const [state5, Row5] = useRow("13:00 a 14:00");
  const [state6, Row6] = useRow("14:00 a 15:00");
  const [state7, Row7] = useRow("15:00 a 16:00");
  const [state8, Row8] = useRow("16:00 a 17:00");

  const [hidden, setHidden] = useState("");

  const modal = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
      confirmButtonText: "Ok",
    });
  };

  const handleChangeDisponibilidad = () => {
    if (hidden) {
      setHidden("");
    } else setHidden("hidden");
  };

  const getBeliefAndValue = (beliefAndValue) => {
    if (beliefAndValue === "Similar") return "similar";
    else if ("Diferente") return "different";
    else return "indifferent";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (stateModalidad === "") {
      modal("Campo obligatorio!", "Seleccione una Modalidad!", "warning");
      return;
    }
    if (stateBeliefsAndValues === "") {
      modal("Campo obligatorio!", "Creencias/valoresr", "warning");
      return;
    }
    if (stateCompetencia === "") {
      modal("Campo obligatorio!", "Seleccione una Competencia!", "warning");
      return;
    }
    if (descripcion === "") {
      modal("Campo obligatorio!", "Descripción del tema a tratar", "warning");
      return;
    }

    if (hidden !== "hidden")
      if (
        !state0.includes(true) &&
        !state1.includes(true) &&
        !state2.includes(true) &&
        !state3.includes(true) &&
        !state4.includes(true) &&
        !state5.includes(true) &&
        !state6.includes(true) &&
        !state7.includes(true)
      ) {
        modal(
          "Campo obligatorio!",
          "Seleccione un horario disponible",
          "warning"
        );
        return;
      }

    const _8a9 = {
      lunes: state0[0],
      martes: state0[1],
      meircoles: state0[2],
      jueves: state0[3],
      viernes: state0[4],
      sabado: state0[5],
    };

    const _9a10 = {
      lunes: state1[0],
      martes: state1[1],
      meircoles: state1[2],
      jueves: state1[3],
      viernes: state1[4],
      sabado: state1[5],
    };

    const _10a11 = {
      lunes: state2[0],
      martes: state2[1],
      meircoles: state2[2],
      jueves: state2[3],
      viernes: state2[4],
      sabado: state2[5],
    };

    const _11a12 = {
      lunes: state3[0],
      martes: state3[1],
      meircoles: state3[2],
      jueves: state3[3],
      viernes: state3[4],
      sabado: state3[5],
    };

    const _12a13 = {
      lunes: state4[0],
      martes: state4[1],
      meircoles: state4[2],
      jueves: state4[3],
      viernes: state4[4],
      sabado: state4[5],
    };

    const _13a14 = {
      lunes: state5[0],
      martes: state5[1],
      meircoles: state5[2],
      jueves: state5[3],
      viernes: state5[4],
      sabado: state5[5],
    };

    const _14a15 = {
      lunes: state6[0],
      martes: state6[1],
      meircoles: state6[2],
      jueves: state6[3],
      viernes: state6[4],
      sabado: state6[5],
    };

    const _15a16 = {
      lunes: state7[0],
      martes: state7[1],
      meircoles: state7[2],
      jueves: state7[3],
      viernes: state7[4],
      sabado: state7[5],
    };

    const _16a17 = {
      lunes: state8[0],
      martes: state8[1],
      meircoles: state8[2],
      jueves: state8[3],
      viernes: state8[4],
      sabado: state8[5],
    };

    const requester_availability = hidden
      ? true
      : { _8a9, _9a10, _10a11, _11a12, _12a13, _13a14, _14a15, _15a16, _16a17 };

    setLoading(true);
    instance
      .post("/task", {
        modality: stateModalidad,
        skill: stateCompetencia,
        domain: "exact_sciences",
        beliefsAndValues: getBeliefAndValue(stateBeliefsAndValues),
        description: descripcion,
        requester_availability,
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
            Solicitar Tutoría
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Complete los campos para solicitar una tutoría
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <SelectModalidad disabled={loading} />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <SelectBeliefsAndValues disabled={loading} />
            </div>
          </div>
          <div className="form-group mb-6 cgrid grid-cols-8 gap-4">
            <div className="col-span-6">
              <SelectCompetencia disabled={loading} />
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="descripcion"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"
            >
              <spam className="text-red-500">*</spam> Describe el tema a tratar
              a tu compañero
            </label>
            <textarea
              id="descripcion"
              disabled={loading}
              value={descripcion}
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Descripción..."
              onChange={(e) => setDescripcion(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">
              Elija los horarios disponibles que tiene
            </label>

            <div className="flex items-center mb-4">
              <input
                id="disponibilidad"
                disabled={loading}
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={handleChangeDisponibilidad}
              />
              <label
                for="disponibilidad"
                className="ml-2 2xl font-medium text-gray-900 dark:text-gray-300"
              >
                Tengo disponibilidad para la tutoría en cualquier horario
              </label>
            </div>
            <div
              className={`relative overflow-x-auto shadow-md sm:rounded-lg ${hidden}`}
            >
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-100">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-800">
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col"></th>
                    <th scope="col">Lunes</th>
                    <th scope="col">Martes</th>
                    <th scope="col">Miércoles</th>
                    <th scope="col">Jueves</th>
                    <th scope="col">Viernes</th>
                    <th scope="col">Sábado</th>
                  </tr>
                </thead>
                <tbody>
                  <Row0 disabled={loading} />
                  <Row1 disabled={loading} />
                  <Row2 disabled={loading} />
                  <Row3 disabled={loading} />
                  <Row4 disabled={loading} />
                  <Row5 disabled={loading} />
                  <Row6 disabled={loading} />
                  <Row7 disabled={loading} />
                  <Row8 disabled={loading} />
                </tbody>
              </table>
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
            Solicitar
          </button>
        </form>
      </div>
    </>
  );
};

export default Tutoring;
