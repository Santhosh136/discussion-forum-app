import { useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";

export default function ProtectedRoutes() {
    const [auth, setAuth] = useState(true);

    axios
        .get("http://localhost:3001/api/auth/user",
        { withCredentials: true })
        .then(res => {
            console.log(res);
            if(res.status == 200) setAuth(true);
        })
        .catch(error => {
            if (error.response.status == 401) {
                console.log("Unauthorized in ProtectedRoute");
                setAuth(false);
            } 
            else console.log(error);
        });

    return auth ? <Outlet /> : <LoginForm />;
}