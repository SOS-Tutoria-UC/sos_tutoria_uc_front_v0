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
            
            if(location.pathname === "/" || location.pathname === "/register")
                navigate("/user");
                
            handleSetAuth({id:'1'});
           /* instance.post('/auth/login', user).then( response => {
                localStorage.setItem('access_token', response.data.token);
                handleSetAuth(response.data)
                navigate('/user');
              }).catch( error => {
                console.log(error.response)
                setError(error.response.data);
              }) */
            setLoading(false);
        }

        authenticate();
    }, [location.pathname, navigate]);


    const handleSetAuth = (value) => {
        setAuth(value)
    }

    return (
        <AuthContext.Provider value={{auth, loading, handleSetAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default AuthContext;