import React from "react";
import user3 from '../images/user3.png';
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const {id , name, email } = props.contacts;
 return(
    <div className="item">
        <img className="ui avatar image" src={user3} alt="user" />
        <div className="content">
            {/* <Link to={`/contact/${id}`}> */}
            <Link to={`/contact/${id}`} state={props.contacts}>
                <div className="header">{name}</div>
                <div>{email}</div>
            </Link>
        </div>
        <i className="trash alternate outline icon" 
            style={{color:"red", marginTop :"7px"}}
            onClick={() => props.deleteClick(id)}>

            </i>
    </div>
 );
};

export default ContactCard;