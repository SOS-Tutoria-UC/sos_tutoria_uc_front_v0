import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [ auth, setAuth ] =  useState({});
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const authenticate = () => {
            setLoading(true);
            const token = localStorage.getItem('access_token');

            if(!token){
                setLoading(false)
                return;
            }

            setAuth({id:1});
            setLoading(false);
        }

        authenticate();
    }, []);

    return (
        <AuthContext.Provider value={{auth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider };

export default AuthContext;