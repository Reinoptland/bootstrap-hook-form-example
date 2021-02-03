import logo from "./logo.svg";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function App() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log("VALUES:", data);

  console.log("FORM ERRORS:", errors);
  return (
    <Container
      className="p-1"
      style={{ backgroundColor: "white", height: "200vh" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          ref={register({
            required: "FILL THIS IN, SILLY PERSON",
            minLength: {
              value: 3,
              message: "YOUR NAME HAS 3 LETTERS AT LEAST, FUCK YOU: BO!",
            },
          })}
        />
        <ErrorMessage errors={errors} name="firstName" />
        {/* {errors?.firstName?.message && <p>{errors.firstName.message}</p>} */}
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
