import React from "react";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Spinner } from "../spinner/Spinner";
import moment from "moment";
//Hooks
import { useSelect } from "../../hooks/inputs/useSelect";

//Constantes
import {
  Q01OPTIONS,
  Q03AOPTIONS,
  Q03BOPTIONS,
  Q08OPTIONS,
  Q09OPTIONS,
  Q03OPTIONS,
  SKILLS,
} from "../../utils/constantes";

//Axios
import instance from "../../config/axios/instance";

//Components
import { RadioButton } from "../../layout/components/RadioButton";
import { Accordion } from "../../layout/components/Accordion";

const RegisterForm = (props) => {
  /*Datos personales*/
  const [personalInfo, setOersonalInfo] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  /*Survey */
  const [birthdate, setBirthdate] = useState("");
  const [stateq06, setStateq06] = useState({});
  const [stateq08, setStateq08] = useState({});
  const [stateq09, setStateq09] = useState({});
  const [loadingQ06, setLoadingQ06] = useState(false);
  const [loadingPsy, setLoadingPsy] = useState(false);
  const [loadingGP, setLoadingGP] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputCon = useRef();

  const [stateq01, Selectq01] = useSelect(
    "gender",
    "¿Cuál es su sexo?",
    Q01OPTIONS,
    "Seleccione el sexo"
  );
  const [stateq03b, Selectq03b] = useSelect(
    "major",
    "Q03.b ¿Cuál es tu carrera?",
    Q03OPTIONS,
    "Seleccione una carrera"
  );
  const [stateq03a, Selectq03a] = useSelect(
    "campus",
    "Q03.a ¿Cuál es tu campus?",
    Q03AOPTIONS,
    "Seleccione un campus"
  );
  const [stateq04, Selectq04] = useSelect(
    "degree_programme",
    "Q04 ¿Cuál es la etapa de la carrera (que te identifique mejor) este año?",
    Q03BOPTIONS,
    "Seleccione una etapa"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const createSkillsObject = () => {
      setLoadingQ06(false);
      const objects = {};
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
      ].forEach((element) => {
        objects[element.id] = {
          name: element.id,
          ontology: "competence",
          level: element.level,
        };
      });
      setStateq06(objects);
      setLoadingQ06(true);
    };
    createSkillsObject();
  }, []);

  useEffect(() => {
    const createPsyObject = () => {
      setLoadingPsy(false);
      const objects = {};
      Q09OPTIONS.forEach((element) => {
        objects[element.id] = {
          name: element.id,
          level: element.level,
        };
      });
      setStateq09(objects);
      setLoadingPsy(true);
    };
    createPsyObject();
  }, []);

  useEffect(() => {
    const createGuidingPrinciplesObject = () => {
      setLoadingGP(false);
      const objects = {};
      Q08OPTIONS.forEach((element) => {
        objects[element.id] = {
          name: element.id,
          level: element.level,
        };
      });
      setStateq08(objects);
      setLoadingGP(true);
    };
    createGuidingPrinciplesObject();
  }, []);

  const handleChangeScore = (e, n) => {
    setStateq06({
      ...stateq06,
      [e.target.name]: {
        name: n,
        level: Number(e.target.value),
        ontology: "competence",
      },
    });
    console.log(stateq06);
  };

  const handleChangeQ09 = (e, n) => {
    setStateq09({
      ...stateq09,
      [e.target.name]: { name: n, level: Number(e.target.value) },
    });
  };

  const handleChangeQ08 = (e, n) => {
    setStateq08({
      ...stateq09,
      [e.target.name]: { name: n, level: Number(e.target.value) },
    });
  };

  const handleSetStudentData = (data) => {
    setOersonalInfo(data);
  };

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

    //Validaciones para inputs nombre, apellido, email, password, confirm
    if (props.authData) {
      if (
        [
          personalInfo.nombre,
          personalInfo.apellido,
          personalInfo.email,
          personalInfo.password,
          personalInfo.confirmPassword,
        ].includes("")
      ) {
        modal(
          "Campos obligatorios!",
          "Completar los campos requeridos en Datos Personales.",
          "warning"
        );
        return;
      }

      if (personalInfo.password !== personalInfo.confirmPassword) {
        modal("Contraseñas no coinciden!", "", "warning");
        return;
      }
    }
    //Validaciones q01 hasta q04
    if (stateq01 === "") {
      modal("Campos obligatorios!", 'Completar el campo "SEXO"', "warning");
      return;
    }
    if (stateq03a === "") {
      modal("Campos obligatorios!", 'Completar el campo "CAMPUS"', "warning");
      return;
    }
    if (stateq03b === "") {
      modal("Campos obligatorios!", 'Completar el campo "CARRERA"', "warning");
      return;
    }
    if (stateq04 === "") {
      modal(
        "Campos obligatorios!",
        'Completar el campo "GRADO ACADÉMICO"',
        "warning"
      );
      return;
    }

    //Validaciones q01 hasta q04
    if (birthdate === "") {
      modal("Campos obligatorios!", "Completar fecha de nacimiento", "warning");
      return;
    }
    setLoading(true);
    instance
      .post("/users", {
        ...personalInfo,
        Q01_Q02: {
          dateOfBirth: {
            year: moment(birthdate).year(),
            month: moment(birthdate).month(),
            day: moment(birthdate).day(),
          },
          gender: stateq01 === "Prefiero no decirlo" ? "not-say" : stateq01[0],
        },
        /**MATERIALS */
        Q03a: {
          name: "campus",
          description: stateq03a,
          quantity: 1,
          classification: "university_status",
        },
        Q03b: {
          name: "dyspline",
          description: stateq03b,
          quantity: 1,
          classification: "university_status",
        },
        Q04: {
          name: "study_year",
          description: stateq04,
          quantity: 1,
          classification: "university_status",
        },
        /******** */
        Q06: Object.values(stateq06),
        Q08: stateq08,
        Q09: stateq09,
      })
      .then((response) => {
        modal(response.data.msg, "", "success");
        setLoading(false);
        navigate("/user");
      })
      .catch((error) => {
        console.log(error.response);
        modal("Error!", error.response.data.msg, "error");
        setLoading(false);
      });
  };

  if (loadingQ06 && loadingPsy && loadingGP)
    return (
      <>
        <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
          {loading && <Spinner />}
          {props.authData && (
            <div className="p-5 mt-10 mb-5 bg-blue-50">
              <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                Datos de autenticación
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Los datos a continuación son requeridos para poder iniciar
                sesión.
                <span className="font-bold">
                  La contraseña debe tener mínimo 6 carateres.
                </span>
              </p>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            {props.authData && (
              <>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    disabled={loading}
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                    placeholder="Nombre"
                    name="nombre"
                    id="nombre"
                    value={personalInfo.nombre}
                    onChange={(e) =>
                      handleSetStudentData({
                        ...personalInfo,
                        nombre: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="text"
                    disabled={loading}
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Apellido"
                    name="apellido"
                    id="apellido"
                    value={personalInfo.apellido}
                    onChange={(e) =>
                      handleSetStudentData({
                        ...personalInfo,
                        apellido: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="email"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      handleSetStudentData({
                        ...personalInfo,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Contraseña"
                    name="password"
                    id="password"
                    pattern=".{6,}"
                    title="Mínimo 6 caracteres"
                    value={personalInfo.password}
                    onChange={(e) =>
                      handleSetStudentData({
                        ...personalInfo,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group mb-6">
                  <input
                    type="password"
                    className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Confirmar contraseña"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={personalInfo.confirmPassword}
                    onChange={(e) =>
                      handleSetStudentData({
                        ...personalInfo,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
              </>
            )}
            <div className="p-5 mt-10 mb-5 bg-blue-50">
              <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
                Cuestionario
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                El cuestionario a continuación se utilizará para el
                matching de tutorías, así como también para análisis futuros
              </p>
            </div>
            <div className="form-group mb-6">
              <Selectq01 disabled={loading} />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="birthdate"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"
              >
                Q02. ¿Cuál es tu fecha de nacimiento?
              </label>
              <input
                type="date"
                className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                name="birthdate"
                id="birthdate"
                value={birthdate}
                disabled={loading}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </div>
            <div className="form-group mb-6">
              <Selectq03a disabled={loading} />
            </div>
            <div className="form-group mb-6">
              <Selectq03b disabled={loading} />
            </div>
            <div className="form-group mb-6">
              <Selectq04 disabled={loading} />
            </div>
            <div className="form-group mb-20 gap-2">
              <label
                htmlFor="degree"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"
              >
                Q06 ¿Cómo calificarías tu nivel de conocimiento sobre las siguientes competencias? 1=nada, 2=poco, 3=moderado,
                4=bastante alto, 5=muy alto
              </label>
              <Accordion
                skills={SKILLS["Ciencias exactas"]}
                handleChangeScore={handleChangeScore}
                label="Ciencias Exactas"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Ciencias de la computación"]}
                handleChangeScore={handleChangeScore}
                label="Ciencias de la computación"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Salud"]}
                handleChangeScore={handleChangeScore}
                label="Salud"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Administrativas y Contables"]}
                handleChangeScore={handleChangeScore}
                label="Administrativas y Contables"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Ciencias Sociales"]}
                handleChangeScore={handleChangeScore}
                label="Ciencias Sociales"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Jurídicas"]}
                handleChangeScore={handleChangeScore}
                label="Jurídicas"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Ciencias de la Electrónica"]}
                handleChangeScore={handleChangeScore}
                label="Ciencias de la Electrónica"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Diseño y Construcción"]}
                handleChangeScore={handleChangeScore}
                label="Diseño y Construcción"
                disabled={loading}
              />
              <Accordion
                skills={SKILLS["Ambiental"]}
                handleChangeScore={handleChangeScore}
                label="Ambiental"
                disabled={loading}
              />
            </div>
            <div className="form-group mb-10 gap-2">
              <label
                htmlFor="degree"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"
              >
                Q08 Utilizando la siguiente escala, indica qué tan importante
                consideras cada valor como un principio rector en tu vida. 1=
                nada importante, 2= poco importante, 3= algo importante, 4=
                importante, 5= muy importante
              </label>
              {Q08OPTIONS.map((c) => (
                <div className="items-center mb-4 grid grid-cols-6" key={c.id}>
                  <label
                    htmlFor={c.id}
                    className="ml-2 text-lg font-bold text-gray-500 col-span-4"
                  >
                    {c.name}
                  </label>
                  <RadioButton
                    id={c.id}
                    name={c.name}
                    handleChangeScore={handleChangeQ08}
                    disabled={loading}
                  />
                </div>
              ))}
            </div>
            <div className="form-group mb-10 gap-2">
              <label
                htmlFor="degree"
                className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"
              >
                Q09 Descríbete a ti mismo como generalmente eres ahora, no como
                deseas ser. Utiliza esta escala a continuación para calificar con qué 
                precisión lo describe cada afirmación 1= No se parece en
                nada a mí, 2= no se parece mucho a mí, 3= se parece un poco a
                mí, 4= se parece bastante a mí, 5= se parece mucho a mí
              </label>
              {Q09OPTIONS.map((c) => (
                <div className="items-center mb-4 grid grid-cols-6" key={c.id}>
                  <label
                    htmlFor={c.id}
                    className="ml-2 text-lg font-bold text-gray-500 col-span-4"
                  >
                    {c.name}
                  </label>
                  <RadioButton
                    id={c.id}
                    name={c.name}
                    handleChangeScore={handleChangeQ09}
                    disabled={loading}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2">
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
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </>
    );
};

export default RegisterForm;
