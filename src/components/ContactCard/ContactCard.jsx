import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";

const ContactCard = ({ item, getOneContact, deleteContact }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{item.name}</ListGroup.Item>
          <ListGroup.Item>{item.surname}</ListGroup.Item>
          <ListGroup.Item>{item.phone}</ListGroup.Item>
        </ListGroup>
        <Button variant="outline-danger" onClick={() => deleteContact(item.id)}>
          Delete
        </Button>
        <Button variant="outline-dark" onClick={() => getOneContact(item.id)}>
          Edit
        </Button>
      </Card>
    </>
  );
};

export default ContactCard;
