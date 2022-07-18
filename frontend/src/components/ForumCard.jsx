import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ForumCard({forum}) {
    const {_id:forumId, topic, description, author: authorId} = forum;
    const user = useSelector((state) => state.user.value);

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

            { user.userId == authorId && 
            <div className="button-container">
                <button className="button">delete</button>
            </div>
            }
            
        </li>
    );
}