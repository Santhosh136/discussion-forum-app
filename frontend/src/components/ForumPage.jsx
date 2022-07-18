import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Comment from "./Comment";
import CommentForum from "./CommentForm";

export default function ForumPage() {

    const [comments, setComments] = useState([]);
    const params = useParams();
    const user = useSelector((state) => state.user.value);

    const topic = " topic from store";
    const description = "description from store";

    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/forums/${params.forumId}/comments`)
            .then((res) => {
                // console.log(res.data);
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <section className="container">
            <section className="contents">
                <h1>{topic}</h1>
                <p>{description}</p>
                {user.isLoggedIn && <CommentForum forumId={params.forumId} />}
                <ul className="list-container">
                    {comments.map((comment) => (
                        <Comment data={comment} />
                    ))}
                </ul>
            </section>
        </section>
    );
}