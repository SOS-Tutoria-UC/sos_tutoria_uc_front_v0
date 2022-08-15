import { createContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import instance from "../config/axios/instance";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] =  useState({});
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const authenticate = () => {
            const token = localStorage.getItem('access_token');

            if(!token){
                setLoading(false)
                return;
            }

            instance.get('/users/profile').then( response => {
                handleSetAuth(response.data)
                setLoading(false);
              }).catch( error => {
                console.log(error.response)
            })
            
            navigate("/user");
                

        }

        authenticate();
    }, []);


    const handleSetAuth = (value) => {
        setAuth(value)
    }

    return (
        <AuthContext.Provider value={{auth, loading, setLoading, handleSetAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default AuthContext;