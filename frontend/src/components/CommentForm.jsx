import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CommentForum({ forumId }) {

  let navigate = useNavigate();

  const [data, setData] = useState({
    "text": "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
        .post(`http://localhost:3001/api/forums/${forumId}/comments`, data)
        .then((res) => {
            setData({ text: "" });
            console.log(res.data.message);
        })
        .catch((err) => {
            console.log("Error couldn't add comment");
            console.log(err.message);
        });
    
    navigate("/forums")
  }

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <label className="label" htmlFor="comment">
              Comment
          </label>
          <input 
          type="text"
          name="text"
          placeholder='Enter a new comment...'
          onChange={handleChange}
          value={data.text}
          />
          <button >Add comment</button>
        </form>
      </div>
  )
}