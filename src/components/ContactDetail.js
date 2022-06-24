import React from "react";
import user3 from '../images/user3.png';
import { Link , useLocation} from "react-router-dom";

const ContactDetail = (props) => {
    const Detailstate = useLocation().state;
    const {email, name} = Detailstate;
    console.log(email);
 return(
    <div className="main">
        <div className="ui card centered">
            <div className="image">
                <img src={user3} alt='user'/>
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="description">{email}</div>
            </div>
        </div>
    </div> 
 );
};

export default ContactDetail;