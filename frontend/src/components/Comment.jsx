import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ListGroup, Button } from "react-bootstrap";
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
        
        navigate(`/forums`, { replace: true });
    }

    return (
        <ListGroup.Item as="li" key={_id}>
            <p>{text} - by {user.username}</p> 
            { user.userId == authorId &&
            <Button className="button-sm" variant="danger" onClick={handleDelete}>delete</Button> }
        </ListGroup.Item>
    );
}