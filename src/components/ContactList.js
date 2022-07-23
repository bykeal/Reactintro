import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    const inputEl = useRef("");

    // console.log(props);

    const deleteClick = (id) => {
        props.deleteHandler(id)
    }

    const renderContactList =props.contacts.map(contact => {
        return(
            <ContactCard 
            contacts={contact} 
            deleteClick={deleteClick}
            key={contact.id}>      
            </ContactCard>
        );
    }); 

    const getsearchterm = () => {
        props.searchhandle(inputEl.current.value);
        // console.log(inputEl.current.value);
    }

    return(
        <div className="" >
            <h2 className="py-12">Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contact</button>
                </Link>
            </h2>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.Term} onChange={getsearchterm}/>
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {renderContactList.length > 0 
                    ? renderContactList
                    : "No Contacts available"
                }
            </div>
        </div>
        
    );
};

export default ContactList;