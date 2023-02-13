import React from "react";
import ContactCard from "../ContactCard/ContactCard";

const ContactList = ({ contacts, getOneContact, deleteContact }) => {
  return (
    <>
      <center style={{ fontSize: "30px", margin: "20px" }}>Contacts</center>
      <div className="d-flex justify-content-between flex-wrap w-75 m-auto">
        {contacts?.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            getOneContact={getOneContact}
            deleteContact={deleteContact}
          />
        ))}
      </div>
    </>
  );
};

export default ContactList;
