import React, { useState } from 'react'
import { useSelect } from '../../../../hooks/inputs/useSelect';
import { useRow } from '../../../../hooks/inputs/useRow';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"



import { COMPETENCIAS } from '../../../../utils/constantes';
import instance from '../../../../config/axios/instance';


const Tutoring = props => {
  const [ stateModalidad, SelectModalidad ] = useSelect('m1', 'Qué modalidad prefieres que sea la tutoría?', [{id:'p', name:'Presencial'}, {id:'r', name:'Remoto'}, {id:'i', name:'Indiferente'}], "Seleccione modalidad")
  const [ stateCompetencia, SelectCompetencia ] = useSelect('c1', 'Elija sobre qué competencia', COMPETENCIAS, "Seleccione compentencia")
  const [ descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();

  const [ state0, Row0] = useRow("8:00 a 9:00");
  const [ state1, Row1] = useRow("9:00 a 10:00");
  const [ state2, Row2] = useRow("10:00 a 11:00");
  const [ state3, Row3] = useRow("11:00 a 12:00");
  const [ state4, Row4] = useRow("12:00 a 13:00");
  const [ state5, Row5] = useRow("14:00 a 15:00");
  const [ state6, Row6] = useRow("15:00 a 16:00");
  const [ state7, Row7] = useRow("16:00 a 17:00");

  const [ hidden, setHidden ] = useState("")


  const modal = (title, text, icon) => {
    Swal.fire({
      title, text, icon, 
      confirmButtonText: 'Ok'
    })
  }

  const handleChangeDisponibilidad = () => {
    if(hidden){setHidden("")} else setHidden("hidden")
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(stateModalidad === ""){
      modal('Campo obligatorio!', 'Seleccione una Modalidad!', 'warning');
      return;
    }
    if(stateCompetencia === ""){
      modal('Campo obligatorio!', 'Seleccione una Competencia!', 'warning');
      return;
    }
    if(descripcion === ""){
      modal('Campo obligatorio!', 'Descripción del tema a tratar', 'warning');
      return;
    }

    if(!state0.includes(true) && !state1.includes(true) && 
    !state2.includes(true) && !state3.includes(true) && 
    !state4.includes(true) && !state5.includes(true) && 
    !state6.includes(true) && !state7.includes(true)){
      modal('Campo obligatorio!', 'Seleccione un horario disponible', 'warning');
      return;
    }

    instance.post('/request', {stateModalidad, stateCompetencia, descripcion, state0, state1, state2, state3,
    state4, state5, state6, state7}).then( response => {
      modal(response.data.msg, '', 'success');
      navigate('/user');
    }).catch( error => {
      console.log(error.response)
      modal('Error!', error.response.data.msg, 'error');
    })

  }
  
  
  return (
<>
    <div className="p-6 rounded-lg shadow-lg bg-white lg:w-3/4 m-auto">
      <div className='mb-5'>
          <h3 className="text-3xl leading-6 font-bold text-gray-900 mb-4">
            Solicitar Tutoría
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Complete los campos para solicitar una tutoría
          </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-6">
          <SelectModalidad />
        </div>
        <div className="form-group mb-6">
          <SelectCompetencia />
        </div>

        <div className='mb-5'>
          <label htmlFor="descripcion" className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold"><spam className="text-red-500">*</spam> Describe el tema a tratar a tu compañero</label>
          <textarea id="descripcion" value={descripcion} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descripción..."
          onChange={(e) => setDescripcion(e.target.value)}></textarea>
        </div>


        <div className="form-group mb-6">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-gray-400 text-bold">Elija los horarios disponibles que tiene</label>
          
          <div className="flex items-center mb-4">
            <input id="disponibilidad" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={handleChangeDisponibilidad}/>
            <label for="disponibilidad" className="ml-2 2xl font-medium text-gray-900 dark:text-gray-300">Tengo disponibilidad para la tutoría en cualquier horario</label>
         </div>
          <div className={`relative overflow-x-auto shadow-md sm:rounded-lg ${hidden}`}>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr style={{textAlign:"center"}}>
                          <th scope="col">
                          </th>
                          <th scope="col">
                              Lunes
                          </th>
                          <th scope="col">
                              Martes
                          </th>
                          <th scope="col">
                              Miércoles
                          </th>
                          <th scope="col">
                              Jueves
                          </th>
                          <th scope="col">
                              Viernes
                          </th>
                          <th scope="col">
                              Sábado
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                    <Row0 />
                    <Row1 />
                    <Row2 />
                    <Row3 />
                    <Row4 />
                    <Row5 />
                    <Row6 />
                    <Row7 />
                  </tbody>
              </table>
          </div>

        </div>
        
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
            ease-in-out">Solicitar</button>
      </form>
    </div>
    
    </>  
    )
}


export default Tutoring;