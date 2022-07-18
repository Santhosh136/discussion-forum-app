import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ForumForm() {

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.value);

  const [data, setData] = useState({
    "topic": "",
    "description": ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
        .post("/api/forums",
        {
          ...data,
          "author": user.userId
        },
        { withCredentials: true })
        .then((res) => {
            setData({ topic: "", description: "" });
            console.log(res.data.message);
        })
        .catch((err) => {
            console.log("Error couldn't create forum");
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
          <label className="label" htmlFor="topic">
              Topic
          </label>
          <input 
          type="text"
          name="topic"
          placeholder='Enter some topic...'
          onChange={handleChange}
          value={data.topic}
          />

          <label className="label" htmlFor="description">
              Description
          </label>
          <textarea 
          type="text"
          name="description"
          placeholder="Enter some small description..."
          onChange={handleChange}
          value={data.description}
          />
          <button >Create</button>
          <button type="cancel">Cancel</button>
        </form>
      </div>
  )
}