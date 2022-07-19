import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ForumCard({forum}) {
    const {_id:forumId, topic, description, author: authorId, comments} = forum;
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    function handleDelete(e) {
        e.preventDefault();

        axios
            .delete(`/api/forums/${forumId}`)
            .then((res) => console.log(res.data.message))
            .catch(err => console.log("Could not delete a forum",err.message));
        navigate("/forums");
    }

    return (
        <li key={forumId}>
            <div className="title-description">
                <Link 
                    to={`/forums/${forumId}`}
                    key={forumId}
                >
                    <h3>{topic}</h3>
                </Link>
                
                <p>{description}</p>
                <p>#comments ({comments.length})</p>
            </div>

            { user.userId == authorId && 
            <div className="button-container">
                <button className="button" onClick={handleDelete}>delete</button>
            </div>
            }
            
        </li>
    );
}