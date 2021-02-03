import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <Container
      className="p-1"
      style={{ backgroundColor: "white", height: "200vh" }}
    >
      <Row className="justify-content-center m-5">
        <Col md={2}>
          <Button>HELLO</Button>
        </Col>
        <Col md={4} className="d-flex justify-content-center">
          <Button>HELLO</Button>
        </Col>
        <Col md={2}>
          <Button>HELLO</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
