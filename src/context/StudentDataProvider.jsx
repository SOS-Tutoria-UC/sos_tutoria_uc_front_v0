import { createContext, useState } from "react";

const StudentDataContext = createContext();


const StudentDataProvider = ({ children }) => {


    return (
        <StudentDataContext.Provider value={{}}>
            { children }
        </StudentDataContext.Provider>
    );
}

export { StudentDataProvider };

export default StudentDataContext;