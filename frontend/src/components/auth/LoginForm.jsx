import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {

    let navigate = useNavigate();

    const [data, setData] = useState({
        "username": "",
        "password": ""
    });

    const [loginError, setLoginError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    
        axios
            .post("http://localhost:3001/api/auth/login", data, 
            { withCredentials: true },)
            .then((res) => {
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
                <button type="cancel">Cancel</button>

                <p>New user? sign up here 
                    <Link to="/register" >Sing up</Link>
                </p>
            </form>
        </div>
    )
}