export default function Comment({data}) {
    const {_id, text, createdDate} = data;

    return (
        <li key={_id}>
            <div className="title-description">
                <h3>{text}</h3>
                <p>{createdDate}</p>
            </div>

            <div className="button-container">
                <button className="button">edit</button>
                <button className="button">delete</button>
            </div>
        </li>
    );
}