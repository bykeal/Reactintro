import React from "react";
import user3 from '../images/user3.png';
import { Link } from "react-router-dom";

const ContactDetail = (props) => {
 return(
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user3} alt='user'/>
            </div>
            <div className="content">
                <div className="header">Names</div>
                <div className="description">Emails</div>
            </div>
        </div>
    </div> 
 );
};

export default ContactDetail;