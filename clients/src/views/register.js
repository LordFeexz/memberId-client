import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { register } from "../function/user";

export default function Register() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(register(input))
      .then(() => navigate("/login"))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <section>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={input.username}
            name="username"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={input.email}
            name="email"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={input.password}
            name="password"
            onChange={onChangeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}
