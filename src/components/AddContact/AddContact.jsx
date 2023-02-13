import React, { useState } from "react";
import { Button, Modal, FormControl } from "react-bootstrap";

const AddContact = ({ show, handleClose, addContact }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  function createContact() {
    if (!name || !surname || !phone) {
      alert("some input are empty!");
      return;
    }

    let newObj = {
      name,
      surname,
      phone,
      id: Date.now(),
    };

    addContact(newObj);

    setName("");
    setSurname("");
    setPhone("");

    handleClose();
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form">
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <FormControl
              size="lg"
              className="my-3"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={createContact}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddContact;
