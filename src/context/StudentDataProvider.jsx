import { createContext, useState } from "react";

const StudentDataContext = createContext();


const StudentDataProvider = ({ children }) => {
    const [ studentData, setStudentData ] = useState({
        first_name:''
    });


    const handleSetStudentData = (data) => {
        setStudentData(data)
    }

    return (
        <StudentDataContext.Provider value={{studentData, handleSetStudentData}}>
            { children }
        </StudentDataContext.Provider>
    );
}

export { StudentDataProvider };

export default StudentDataContext;