import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom";
// import {uuid} from 'uuidv4';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contactskey = "contacts";
  const [contacts,setContacts] = useState([]);

 useEffect(() => {
  const retrieveContacts = JSON.parse(localStorage.getItem(contactskey));
  if (retrieveContacts) setContacts(retrieveContacts);
 }, []);
  
  useEffect(() => {
    console.log("from set")
    localStorage.setItem(contactskey, JSON.stringify(contacts));
  },[contacts]);

  const addcontacthandler = (contact) => {
    setContacts([...contacts, {id: contact.email + Math.floor(Math.random() * 10), ...contact}]);
  };

  const RemoveContact = (id) => {
    const newContact = contacts.filter(
      contact =>  {return contact.id !== id}
    );

    setContacts(newContact);
  }

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ContactList contacts={contacts} deleteHandler={RemoveContact}/>} />
          <Route path="/add" exact element={<AddContact addcontacthandler = {addcontacthandler}/>} />
        </Routes>
        {/* <AddContact addcontacthandler = {addcontacthandler}/> */}
        {/* <ContactList contacts={contacts} deleteHandler={RemoveContact}/> */}
      </Router>
      
    </div>
    
  );
};

export default App;
