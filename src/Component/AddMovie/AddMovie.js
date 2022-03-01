import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
function AddMovie({ movies, setMovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(0);
  const [trailer, setTrailer] = useState("");
  const handleAdd = () => {
    setMovies([
      ...movies,
      { title, description, rate, posterUrl, trailer, id: Math.random() },
    ]);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>title</label>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label>description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label>posterUrl</label>
            <input
              type="text"
              onChange={(e) => setPosterUrl(e.target.value)}
              value={posterUrl}
            />
            <label>rate</label>
            <input
              type="number"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <label>trailer</label>
            <input
              type="text"
              onChange={(e) => setTrailer(e.target.value)}
              value={trailer}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie;
