import React from "react";
import { useNavigate } from 'react-router-dom';


class AddContactClass extends React.Component{
    state = {
        name:'',
        email:'',
    };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are needed")
            return
        }
        this.props.addcontacthandler(this.state);
        this.setState({
            name:'',
            email:'',
        });
        console.log('from addcontact',this.props);
        this.props.navigate('/');

    }
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" 
                            name="name"
                            placeholder="Name" 
                            value={this.state.name}
                            onChange={ (e) => this.setState({name: e.target.value})}
                         />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email " value={this.state.email}
                            onChange={ (e) => this.setState({email: e.target.value})}
                         />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

function AddContact(props) {
    let navigate = useNavigate();
    return <AddContactClass {...props} navigate={navigate} />
}

export default AddContact;