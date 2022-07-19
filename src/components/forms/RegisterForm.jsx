import React from 'react'
import { useState, useEffect } from 'react';

//Hooks
import { useSelect } from '../../hooks/inputs/useSelect'

//Constantes
import { Q01OPTIONS, Q03AOPTIONS, Q03BOPTIONS, Q09OPTIONS, Q03OPTIONS, COMPETENCIAS, SKILLS } from '../../utils/constantes';


//Components

import { RadioButton } from '../../layout/components/RadioButton';
import { Accordion } from '../../layout/components/Accordion';


const RegisterForm = ({handleSetStudentData, studentData}) => {

  const [ stateq06, setStateq06 ] = useState({});
  const [ stateq09, setStateq09 ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ loadingPsy, setLoadingPsy ] = useState(false);


  const [ stateq01, Selectq01 ] = useSelect("Q01. ¿Cuál es su género?", Q01OPTIONS, "Seleccione un género");
  const [ stateq03, Selectq03 ] = useSelect("Q03.b ¿Cuál es tu carrera?", Q03OPTIONS, "Seleccione una carrera");
  const [ stateq03a, Selectq03a ] = useSelect("Q03.a ¿Cuál es tu campus?", Q03AOPTIONS, "Seleccione un campus");
  const [ stateq03b, Selectq03b ] = useSelect("Q04 ¿Cuál es su programa de grado este año? (lo que te identifique mejor)", Q03BOPTIONS, "Seleccione un programa");

  useEffect(() => {
    const createSkillsObject = () => {
      setLoading(false);
      const objects = {};
      [...SKILLS["Ciencias exactas"], ...SKILLS["Ciencias de la computación"],
      ...SKILLS["Salud"], ...SKILLS["Administrativas y Contables"], ...SKILLS["Ciencias Sociales"],
      ...SKILLS["Jurídicas"],...SKILLS["Ciencias de la Electrónica"],...SKILLS["Diseño y Construcción"]].forEach(element => {
        objects[element.id] = {
          name: element.name,
          cal: element.cal
        };
      })
    setStateq06(objects);
    setLoading(true);
    }
    createSkillsObject();
  }, [])

  useEffect(() => {
    const createPsyObject = () => {
      setLoadingPsy(false);
      const objects = {};
      Q09OPTIONS.forEach(element => {
        objects[element.id] = {
          name: element.name,
          cal: element.cal
        };
      })
    setStateq09(objects);
    setLoadingPsy(true);
    }
    createPsyObject();
  }, [])

  const handleChangeScore = (e, n) => {
    setStateq06({...stateq06, [e.target.name]:{name: n, cal: e.target.value}})
  }
  
  const handleChangeQ09 = (e, n) => {
    setStateq09({...stateq09, [e.target.name]:{name: n, cal: e.target.value}})
  }

  if(loading && loadingPsy)
  return (
    <>
    <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
    <div className='p-5 mt-10 mb-5 bg-blue-50'>
          <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
            Datos de autenticación
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Los datos a continuación son requeridos para poder iniciar sesión
          </p>
       </div>
      <form>
      <div className="form-group mb-6">
            <input type="text" className="form-control block
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
              name="first_name"
              id="first_name"
              value={studentData.first_name}
              onChange={(e) => handleSetStudentData({...studentData, first_name:e.target.value})}
              />
          </div>
          <div className="form-group mb-6">
            <input type="text" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Apellido"/>
          </div>
          <div className="form-group mb-6">
            <input type="email" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Email"/>
          </div>
          <div className="form-group mb-6">
            <input type="password" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Contraseña"/>
          </div>
          <div className="form-group mb-6">
            <input type="password" className="form-control block
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
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
              placeholder="Confirmar contraseña"/>
          </div>
          <div className='p-5 mt-10 mb-5 bg-blue-50'>
            <h3 className="text-2xl leading-6 font-bold text-gray-900 mb-4">
              Cuestionario
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              El cuestionario a continuación se utilizará para realizar el matching de tutorías,
              así también como análisis futuros
            </p>
        </div>
        <div className="form-group mb-6">
          <Selectq01 /> 
        </div>
        <div className="form-group mb-6">
          <label for="birthdate" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q02. ¿Cuál es tu fecha de nacimiento?</label>
          <input type="date" className="form-control block
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
            focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="birthdate"/>
        </div>
        <div className="form-group mb-6">
          <Selectq03a />
        </div>
        <div className="form-group mb-6">
          <Selectq03 /> 
        </div>
        <div className="form-group mb-6">
          <Selectq03b />
        </div>
        <div className="form-group mb-20 gap-2">
          <label for="degree" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q06 ¿Cómo calificaría su nivel de conocimiento o competencia (el que sea mayor) en lo siguiente? 1=nada, 2=poco, 3=moderado, 4=bastante alto, 5=muy alto</label>
          <Accordion skills={SKILLS["Ciencias exactas"]} handleChangeScore={handleChangeScore} label="Ciencias Exactas" />
          <Accordion skills={SKILLS["Ciencias de la computación"]} handleChangeScore={handleChangeScore} label="Ciencias de la computación" />
          <Accordion skills={SKILLS["Salud"]} handleChangeScore={handleChangeScore} label="Salud" />
          <Accordion skills={SKILLS["Administrativas y Contables"]} handleChangeScore={handleChangeScore} label="Administrativas y Contables" />
          <Accordion skills={SKILLS["Ciencias Sociales"]} handleChangeScore={handleChangeScore} label="Ciencias Sociales" />
          <Accordion skills={SKILLS["Jurídicas"]} handleChangeScore={handleChangeScore} label="Jurídicas" />
          <Accordion skills={SKILLS["Ciencias de la Electrónica"]} handleChangeScore={handleChangeScore} label="Ciencias de la Electrónica" />
          <Accordion skills={SKILLS["Diseño y Construcción"]} handleChangeScore={handleChangeScore} label="Diseño y Construcción" />

        </div>
        <div className="form-group mb-10 gap-2">
          <label for="degree" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q09 Descríbete a ti mismo como generalmente eres ahora, no como deseas ser. Utilice la escala a continuación para calificar con qué precisión lo describe cada afirmación 1= No se parece en nada a mí, 2= no se parece mucho a mí, 3= se parece un poco a mí, 4= se parece bastante a mí, 5= se parece mucho a mí</label>
          {
            Q09OPTIONS.map((c) => (
              <div className="items-center mb-4 grid grid-cols-6" key={c.id}> 
              <label for={c.id} className="ml-2 text-lg font-bold text-gray-500 col-span-4">{c.id} - {c.name}</label>
              <RadioButton id={c.id} name={c.name} handleChangeScore={handleChangeQ09} />
              </div>
            ))
          }   
        </div>
        <div className='flex justify-center gap-2'>
          <button className="
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
            ease-in-out">Confirmar</button>
        </div>
       
      </form>
    </div>
    
    </>
  )
}

export default RegisterForm