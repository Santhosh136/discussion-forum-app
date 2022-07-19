import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Comment({data, forumId}) {
    const {_id, text, createdDate, author: authorId} = data;
    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();

    function handleDelete(e) {
        e.preventDefault();

        axios
            .delete(`/api/forums/${forumId}/comments/${_id}`)
            .then((res) => console.log(res.data.message))
            .catch(err => console.log("Could not delete a comment",err.message));
        
        navigate(`/forums/${forumId}`);
    }

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{text}</h3>
                <p>{createdDate}</p>
            </div>

            { user.userId == authorId &&
            <div className="button-container">
                <button className="button" onClick={handleDelete}>delete</button>
            </div>}
        </li>
    );
}