import "./App.css";
import Container from "react-bootstrap/Container";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"; // typescript things?
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
// - Try with bootstrap components, just add name to the field, register as normal
// - "Controller" from react hook form (hopefully we don't need this - but we'll see)
// Also: when do you import * as bla from 'bla'

function InputWithFeedback({ name, type, register, errors, humanReadbleName }) {
  return (
    <>
      <Form.Label>{humanReadbleName}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        ref={register}
        className={errors[name] ? "is-invalid" : ""} // { lastName: 'some error' }
      />
      <Form.Control.Feedback type="invalid">
        <ErrorMessage errors={errors} name={name} />
      </Form.Control.Feedback>
    </>
  );
}

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
      {/* <form onSubmit={handleSubmit(onSubmit)}>
         <label>First name</label>
         <input type="text" name="firstName" ref={register} />
         <ErrorMessage errors={errors} name="firstName" />
         <label>Last name</label>
         <input type="text" name="lastName" ref={register} />
         <label>Email</label>
         <input type="email" name="email" ref={register} />
         <input type="submit" />
       </form> */}

      <Form
        noValidate
        validated={false}
        // class="was-validated"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group controlId="formBasicEmail">
          <InputWithFeedback
            humanReadbleName="First Name"
            name="firstName"
            type="text"
            errors={errors}
            register={register}
          />
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            ref={register}
            className={errors.lastName ? "is-invalid" : ""}
          />
          <Form.Control.Feedback type="invalid">
            <ErrorMessage errors={errors} name="lastName" />
          </Form.Control.Feedback>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            className={errors.email ? "is-invalid" : ""}
            ref={register}
          />
          <Form.Control.Feedback type="invalid">
            <ErrorMessage errors={errors} name="email" />
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
