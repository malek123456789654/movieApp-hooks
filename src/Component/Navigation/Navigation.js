import { Rating } from "@mui/material";
import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import AddMovie from "./AddMovie";

function Navigation({
  movies,
  setMovies,
  search,
  setSearch,
  rating,
  setRating,
}) {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Movie app</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
          </Nav>
          <Rating
            name="size-small"
            size="small"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Form>
          <AddMovie movies={movies} setMovies={setMovies}></AddMovie>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
