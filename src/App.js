import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const lang = "EN";

function translateError() {
  const messages = {
    NL: "VUL DIT VELD IN, DOMKOP",
    DE: "VUL DIESE FELD IN, DUMKOPF",
    EN: "FILL THIS IN, SILLY PERSON, right ho",
  };

  return messages[lang];
}

const schema = yup.object().shape({
  firstName: yup.string().required(translateError),
  lastName: yup.string(),
  email: yup.string().email().required(),
});

// Custom error messages -> just read yup docs, and pass a string or message
// Also: how to bootstrappify this form??

function App() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log("VALUES:", data);

  console.log("FORM ERRORS:", errors);
  return (
    <Container
      className="p-1"
      style={{ backgroundColor: "white", height: "200vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input type="text" name="firstName" ref={register} />
        <ErrorMessage errors={errors} name="firstName" />
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
