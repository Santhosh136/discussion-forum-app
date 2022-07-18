import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logout } from "../../features/user";

export default function LogoutForm() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
    
        axios
            .post("http://localhost:3001/api/auth/logout",  
            { withCredentials: true },)
            .then((res) => {
                dispatch(logout());
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