import { useState, useEffect } from "react";
import axios from "axios";
import ForumCard from "./ForumCard";
import { Outlet } from "react-router-dom";
import { Container, ListGroup } from "react-bootstrap";

export default function ForumList() {

    const [forums, setForums] = useState([]);

    useEffect(() => {
        axios
            .get("/api/forums")
            .then((res) => {
                setForums(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return (
        <Container>
            <h4 className="my-3 " >Forums</h4>
            <ListGroup variant="flush" as="ul" className="list-unstyled">
                {forums.map((forum) => (
                    <ForumCard forum={forum} />
                ))}
            </ListGroup>
        </Container>
    
                
    );
}