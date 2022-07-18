import { Link } from "react-router-dom";

export default function ForumCard({forum}) {
    const {_id:forumId, topic, description} = forum;

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
            </div>

            <div className="button-container">
                <button className="button">edit</button>
                <button className="button">delete</button>
            </div>
        </li>
    );
}