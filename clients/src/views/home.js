import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardAwards from "../components/card";
import { fetchAward } from "../function/award";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../components/filter";

export default function Home() {
  const dispatch = useDispatch();
  const { awards } = useSelector((s) => s);
  useEffect(() => {
    dispatch(fetchAward());
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col md="3" lg="3" sm="3" xl="3">
            <Filter />
          </Col>
          <Col md="9" lg="9" sm="9" xl="9">
            <header>
              <h1>Awards</h1>
            </header>
            {awards.length > 0 ? (
              awards.map((award) => <CardAwards award={award} key={award.id} />)
            ) : (
              <h1>No Data</h1>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}
