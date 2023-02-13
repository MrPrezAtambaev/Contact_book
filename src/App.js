import React, { useState } from "react";
import Header from "./components/Header/Header";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //! Edit
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  const [contacts, setContacts] = useState([]);

  const [editedContact, setEditedContact] = useState({});

  function addContact(newObj) {
    // let newContacts = [...contacts];
    // newContacts.push(newObj);
    // setContacts(newContacts);

    setContacts([...contacts, newObj]);
  }

  function getOneContact(id) {
    let obj = contacts.find((item) => item.id === id);
    setEditedContact(obj);
    setShowEditModal(handleEditShow);
  }

  function saveChanges(newObj) {
    let newContacts = contacts.map((item) => {
      if (item.id === newObj.id) {
        return newObj;
      }
      return item;
    });
    setContacts(newContacts);
    setShowEditModal(false);
  }

  function deleteContact(id) {
    let newContacts = contacts.filter((item) => item.id != id);
    setContacts(newContacts);
  }

  return (
    <>
      <Header handleShow={handleShow} />
      <AddContact
        show={show}
        handleClose={handleClose}
        addContact={addContact}
      />
      <ContactList
        contacts={contacts}
        getOneContact={getOneContact}
        deleteContact={deleteContact}
      />
      {showEditModal && (
        <EditContact
          showEditModal={showEditModal}
          handleEditClose={handleEditClose}
          editedContact={editedContact}
          saveChanges={saveChanges}
        />
      )}
    </>
  );
};

export default App;
