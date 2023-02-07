import { useEffect, useCallback, useState } from "react";
import AuthService from "../services/AuthService";

export function useAuth() {
    const [user, setUser] = useState();

    const login = useCallback((data) => {
        console.log(data)
        // AuthService.loginUser(data)
        // .then(({data}) => {
        //     console.log(data)
        // })
    }, [])

    return {
        user: user, login
    }
}