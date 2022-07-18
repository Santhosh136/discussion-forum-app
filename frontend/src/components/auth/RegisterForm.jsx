import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterForm() {

    let navigate = useNavigate();

    const [data, setData] = useState({
        "username": "",
        "password": ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        axios
            .post("http://localhost:3001/api/auth/register", data, 
            { withCredentials: true})
            .then((res) => {
                console.log(res);
                setData({ username: "", password: "" });
            })
            .catch((err) => {
                console.log("Error couldn't create forum");
                console.log(err.message);
            });
        
        navigate("/login")
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
                <button>Register</button>
                <button type="cancel">Cancel</button>
            </form>
        </div>
    )
}