import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "./Comment";
import CommentForum from "./CommentForm";
import { Container, Alert, ListGroup } from "react-bootstrap";

export default function ForumPage() {

    const [comments, setComments] = useState([]);
    const params = useParams();
    const user = useSelector((state) => state.user.value);

    const topic = " topic from store";
    const description = "description from store";

    useEffect(() => {
        axios
            .get(`/api/forums/${params.forumId}/comments`)
            .then((res) => {
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <Container className="me-auto my-3">
            <Alert><h4 className="my-1 " >{topic}</h4></Alert>
            <p>{description}</p>
            {user.isLoggedIn && <CommentForum forumId={params.forumId} />}
            <ListGroup variant="flush" as="ul" className="list-unstyled">
                {comments.map((comment) => (
                    <ListGroup.Item li="li" >
                        <Comment forumId={params.forumId} data={comment} />
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
}