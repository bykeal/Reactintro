import React from "react";
import user3 from '../images/user3.png'

const ContactCard = (props) => {
    const {id , name, email } = props.contacts;
 return(
    <div className="item">
        <img className="ui avatar image" src={user3} alt="user" />
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
        </div>
        <i className="trash alternate outline icon" 
            style={{color:"red", marginTop :"7px"}}
            onClick={() => props.deleteClick(id)}>

            </i>
    </div>
 );
};

export default ContactCard;