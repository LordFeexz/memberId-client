import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAward } from "../function/award";
import { swalError } from "../helpers/swal";
import Loading from "./loading";

export default function Filter() {
  const [params, setParams] = useState({
    type: "",
    name: "",
    minPoin: null,
    maxPoin: null,
    pagination: 1,
  });

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(fetchAward(params))
      .then(() => {
        setParams({
          ...params,
          type: "",
          name: "",
          minPoin: null,
          maxPoin: null,
          pagination: 1,
        });
      })
      .then(() => setLoading(false))
      .catch((err) => swalError(err));
  };

  const reset = (e) => {
    e.preventDefault();
    setParams({
      ...params,
      type: "",
      name: "",
      minPoin: null,
      maxPoin: null,
      pagination: 1,
    });
  };

  const logout = () => {
    localStorage.clear();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Control
            placeholder="Type ?"
            value={params.type}
            name="type"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name ?"
            value={params.name}
            name="name"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Min Poin</Form.Label> <br></br>
          <Form.Text>{params.minPoin}</Form.Text>
          <Form.Range
            value={params.minPoin}
            name="minPoin"
            min="0"
            max="80000"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Max Poin</Form.Label> <br></br>
          <Form.Text>{params.maxPoin}</Form.Text>
          <Form.Range
            value={params.maxPoin}
            name="maxPoin"
            min="0"
            max="80000"
            onChange={onChangeHandler}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Page</Form.Label> <br></br>
          <Form.Control
            min="1"
            max="5"
            value={params.pagination}
            name="pagination"
            onChange={onChangeHandler}
            type="number"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <Button onClick={reset} variant="primary" type="submit">
        Reset
      </Button>
      <br />
      <Button onClick={logout} variant="primary" type="submit">
        LogOut
      </Button>
    </>
  );
}
