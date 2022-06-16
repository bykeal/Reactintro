import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    const deleteClick = (id) => {
        props.deleteHandler(id)
    }

    const renderContactList = props.contacts.map(contact => {
        return(
            <ContactCard 
            contacts={contact} 
            deleteClick={deleteClick}
            key={contact.id}>      
            </ContactCard>
        );
    }); 
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
};

export default ContactList;