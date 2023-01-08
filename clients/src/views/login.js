import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../components/loading";
import { login } from "../function/user";
import { swalError } from "../helpers/swal";

export default function Login() {
  const [input, setInput] = useState({
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
    dispatch(login(input))
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .then(() => navigate("/"))
      .catch((err) => swalError(err))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <section>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={input.email}
            name="email"
            onChange={onChangeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
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
