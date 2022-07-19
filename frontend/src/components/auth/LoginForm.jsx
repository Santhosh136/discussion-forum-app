import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../features/user";

export default function LoginForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [data, setData] = useState({
        "username": "",
        "password": ""
    });

    const [loginError, setLoginError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    
        axios
            .post("/api/auth/login", data, 
            { withCredentials: true },)
            .then((res) => {
                dispatch(login({userId:res.data, username: data.username, isLoggedIn: true}));
                setData({ username: "", password: "" });
                navigate("/forums");
            })
            .catch((err) => {
                if (err.response.status == 401) {
                    setLoginError(true);
                    setData({ username: "", password: "" });
                }
                console.log("Error couldn't create user" + err.message);
            });
    }

    function handleChange(e) {
        setData({
          ...data,
          [e.target.name] : e.target.value
        });
    }

    function handleCancel(e) {
        setData({
            "username": "",
            "password": ""
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                {loginError && <p>Username or password is incorrect</p>}

                <label className="label" htmlFor="username"> Username </label>
                <input 
                    type="text"
                    name="username"
                    placeholder='Enter your email...'
                    onChange={handleChange}
                    value={data.username}
                />
                <label className="label" htmlFor="password"> Password </label>
                <input 
                    type="password"
                    name="password"
                    placeholder='Enter your password...'
                    onChange={handleChange}
                    value={data.password}
                />
                <button>Login</button>
                <button onClick={handleCancel} >Cancel</button>

                <p>New user? sign up here 
                    <Link to="/register" >Sing up</Link>
                </p>
            </form>
        </div>
    )
}