import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] =  useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const authenticate = async () => {
            const token = localStorage.getItem('access_token');

            if(!token){
                setLoading(false)
                return;
            }

           await handleSetAuth({id:'1'});
           setLoading(false);
        }

        authenticate();
    }, []);

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