import { useSelector } from "react-redux";

export default function Comment({data}) {
    const {_id, text, createdDate, author: authorId} = data;
    const user = useSelector((state) => state.user.value);

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{text}</h3>
                <p>{createdDate}</p>
            </div>

            { user.userId == authorId &&
            <div className="button-container">
                <button className="button">delete</button>
            </div>}
        </li>
    );
}