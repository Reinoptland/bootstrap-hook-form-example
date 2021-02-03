import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log("VALUES:", data);

  return (
    <Container
      className="p-1"
      style={{ backgroundColor: "white", height: "200vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input type="text" name="firstName" ref={register} />
        <label>Last name</label>
        <input type="text" name="lastName" ref={register} />
        <label>Email</label>
        <input type="email" name="email" ref={register} />
        <input type="submit" />
      </form>
    </Container>
  );
}

export default App;
