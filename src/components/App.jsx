import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar
       img="https://thumbs.dreamstime.com/b/contacts-icon-communication-collection-contacts-icon-trendy-modern-flat-linear-vector-contacts-icon-white-background-130941596.jpg"
       />
      {contacts.map((contact) =>
        <Card
          key={contact.name}
          name={contact.name}
          img={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      )}
    </div>
  );
}

export default App;
