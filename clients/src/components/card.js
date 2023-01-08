import { Card } from "react-bootstrap";

export default function CardAwards({ award }) {
  return (
    <Card>
      <Card.Header>{award.type}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{award.name}</p>
          <footer className="blockquote-footer">{award.poin}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
