import { useContext } from 'react'
import StudentDataContext from '../context/StudentDataProvider'

const useStudentData = () => {
  return useContext(StudentDataContext)
}

export default useStudentData