import { useContext } from "react";
import { AuthContext } from "../AuthProviter/AuthProviders";





const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;