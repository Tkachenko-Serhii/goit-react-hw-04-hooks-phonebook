import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import shortId from "shortid";

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");

  const getFormData = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(name + " is already in contacts");
      return;
    }
    const contact = { name, number, id: shortId.generate() };
    setContacts([contact, ...contacts]);
  };

  const stateFilter = () =>
    contacts.filter((contact) => contact.name.toLowerCase().includes(filter));

  const onContactDel = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='container'>
      <div className='addForm'>
        <h2 className='title'>Phonebook</h2>
        <Form onSubmit={getFormData} />
      </div>
      <h2 className='title'>Contacts</h2>
      <Filter
        stateFilter={filter}
        onChangeFilter={(data) => setFilter(data.toLowerCase())}
      />
      <ContactList contacts={stateFilter()} onContactDel={onContactDel} />
    </div>
  );
}
