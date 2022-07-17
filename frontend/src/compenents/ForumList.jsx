import { useState, useEffect } from "react";
import axios from "axios";
import ForumCard from "./ForumCard";
import { Outlet } from "react-router-dom";

export default function ForumList() {

    const [forums, setForums] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/forums")
            .then((res) => {
                console.log(res.data);
                setForums(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <section className="container">
            <section className="contents">
                <h1>Forums</h1>
                <ul className="list-container">
                    {forums.map((forum) => (
                        <ForumCard forum={forum} />
                    ))}
                </ul>
            </section>
        </section>
    );
}