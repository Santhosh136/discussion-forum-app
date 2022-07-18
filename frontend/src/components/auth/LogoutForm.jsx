import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogoutForm() {

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        axios
            .post("http://localhost:3001/api/auth/logout",  
            { withCredentials: true },)
            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => {
                if (err) {
                    console.log("Not able to log out" + err.message);
                }
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <p>Are you sure want to logout?</p>
                <button>Yes</button>
                <Link to='/'>
                    <button>No</button>
                </Link>
            </form>
            
        </div>
    )
}