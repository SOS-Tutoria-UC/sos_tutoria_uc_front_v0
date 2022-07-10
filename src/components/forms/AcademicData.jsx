import React from 'react'
import { useState, useEffect } from 'react';

//Hooks
import { useSelect } from '../../hooks/inputs/useSelect'

//Constantes
import { Q01OPTIONS, Q03AOPTIONS, Q03BOPTIONS, Q09OPTIONS, COMPETENCIAS } from '../../utils/constantes';


const AcademicData = ({ handleChangeStep }) => {

  const [ stateq06, setStateq06 ] = useState({});
  const [ stateq09, setStateq09 ] = useState({});
  const [ loading, setLoading ] = useState(false);
  const [ loadingPsy, setLoadingPsy ] = useState(false);


  const [ stateq01, Selectq01 ] = useSelect("Q01. ¿Cuál es su género?", Q01OPTIONS, "Seleccione un género");
  const [ stateq03a, Selectq03a ] = useSelect("Q03.a ¿Cuál es tu campus?", Q03AOPTIONS, "Seleccione un campus");
  const [ stateq03b, Selectq03b ] = useSelect("Q04 ¿Cuál es su programa de grado este año? (lo que te identifique mejor)", Q03BOPTIONS, "Seleccione un programa");

  useEffect(() => {
    const createSkillsObject = () => {
      setLoading(false);
      const objects = {};
      COMPETENCIAS.forEach(element => {
        objects[element.id] = {
          name: element.name,
          cal: 1
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
          cal: "N"
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
  
  console.log(stateq06);

  if(loading && loadingPsy)
  return (
    <>
    <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
      <div className='mb-5'>
          <h3 className="text-3xl leading-6 font-bold text-gray-900 mb-4">
            Cuestionario
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            
          </p>
        </div>
      <form>
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
          <label for="career" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q03.b ¿Cuál es tu carrera?</label>
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
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="career"
            placeholder="Carrera"/>
        </div>
        <div className="form-group mb-6">
          <Selectq03b />
        </div>
        <div className="form-group mb-20 gap-2">
          <label for="degree" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q06 ¿Cómo calificaría su nivel de conocimiento o competencia (el que sea mayor) en lo siguiente? 1=nada, 2=poco, 3=moderado, 4=bastante alto, 5=muy alto</label>
          {
            COMPETENCIAS.map((c) => (
              <div className="mb-4 grid grid-cols-6" key={c.id}> 
                <label htmlFor={c.id} className="ml-2 text-lg font-bold text-gray-500 col-span-4">{c.id} - {c.name}</label>
                <div className="flex justify-end items-center mb-2 col-span-2 gap-2">
                  <div>
                    <input id="1" type="radio" value="1" name={c.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, c.name)}/>
                    <label htmlFor="1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">1</label>
                  </div>
                  <div>
                    <input id="2" type="radio" value="2" name={c.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, c.name)}/>
                    <label htmlFor="2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">2</label>
                  </div>
                  <div>
                    <input id="3" type="radio" value="3" name={c.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, c.name)}/>
                    <label htmlFor="3" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">3</label>
                  </div>
                  <div>
                    <input id="4" type="radio" value="4" name={c.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, c.name)}/>
                    <label htmlFor="4" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">4</label>
                  </div>
                  <div>
                    <input id="5" type="radio" value="5" name={c.id} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={ (e) => handleChangeScore(e, c.name)}/>
                    <label htmlFor="5" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">5</label>
                  </div>
                </div>
              </div>
            ))
          }   
        </div>
        <div className="form-group mb-10 gap-2">
          <label for="degree" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Q09 Descríbete a ti mismo como generalmente eres ahora, no como deseas ser. Utilice la escala a continuación para calificar con qué precisión lo describe cada afirmación.</label>
          {
            Q09OPTIONS.map((c) => (
              <div className="items-center mb-4 grid grid-cols-6" key={c.id}> 
              <label for={c.id} className="ml-2 text-lg font-bold text-gray-500 col-span-4">{c.id} - {c.name}</label>
              <select id={c.id} name={c.id} value={stateq09[c.id].cal} onChange={(e) => {setStateq09({...stateq09, [e.target.name]:{cal: e.target.value}})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2">
                <option value="1">Nada</option>
                <option value="2">Poco</option>
                <option value="3">Moderado</option>
                <option value="4">Bastante</option>
                <option value="5">Muy Alto</option>
              </select>
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
            ease-in-out" onClick={() => handleChangeStep(-1)}>Anterior</button>
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
            ease-in-out" onClick={() => handleChangeStep(1)}>Siguiente</button>
        </div>
       
      </form>
    </div>
    
    </>
  )
}

export default AcademicData