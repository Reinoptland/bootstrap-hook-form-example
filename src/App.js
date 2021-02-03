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
      <form>
        <label>First name</label>
        <input type="text" name="firstName" />
        <label>Last name</label>
        <input type="text" name="lastName" />
        <label>Email</label>
        <input type="email" name="email" />
      </form>
    </Container>
  );
}

export default App;
