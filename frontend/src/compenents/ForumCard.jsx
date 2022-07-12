export default function ForumCard({forum}) {
    const {_id, topic, description} = forum;

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{topic}</h3>
                <p>{description}</p>
            </div>

            <div className="button-container">
                <button className="button">edit</button>
                <button className="button">delete</button>
            </div>
        </li>
    );
}