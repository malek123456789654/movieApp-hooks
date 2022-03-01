import { Rating } from "@mui/material";
import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard({ movie }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title> {movie.title} </Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <Rating name="size-small" size="small" value={movie.rate} />
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
