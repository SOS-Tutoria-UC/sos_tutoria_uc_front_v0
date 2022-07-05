import React, { useState } from 'react'

//Components
import BasicData from '../../../components/forms/BasicData';
import AcademicData from '../../../components/forms/AcademicData';

//Context
import useStudentData from '../../../hooks/useStudentData';

export const Register = () => {

  const { studentData, handleSetStudentData } = useStudentData();

  const STEPS = [1,2];

  const [ step, setStep ] = useState(STEPS[0]);


  const handleChangeStep = (value) => {
    console.log(step)
    setStep(step+value);
    console.log(step)

  }


  if(step === STEPS[0]){
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-6 mb-10">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Registro de nuevo usuario</span>
          </div>
        </nav>
        <BasicData studentData={studentData} handleChangeStep={handleChangeStep} handleSetStudentData={handleSetStudentData} />
      </>
    )
  }
  if(step === STEPS[1]){
    return (
      <>
        <nav className="flex items-center justify-between flex-wrap bg-cyan-600 p-6 mb-10 sticky top-0 z-50">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">Registro de nuevo usuario</span>
          </div>
        </nav>
        <AcademicData handleChangeStep={handleChangeStep}/>
      </>
    )
  }
}
