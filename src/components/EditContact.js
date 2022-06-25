import React from "react";
import { useNavigate , useLocation } from 'react-router-dom';


class EditContactClass extends React.Component{
  constructor(props){
    super(props)
    const{ id , name , email } = props.location.state;
    this.state = {
        id,
        name,
        email
    }
  }

    update = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All the fields are needed")
            return
        }
        this.props.updatehandler(this.state);
        this.setState({
            name:'',
            email:'',
        });
        console.log('from editcontact',this.props);
        this.props.navigate('/');

    }
    render(){
        return(
            <div className="ui main">
                <h2>Edit Contact</h2>
                <form className="ui form" onSubmit={this.update}>
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
                    <button className="ui button blue">Update</button>
                </form>
            </div>
        );
    }
}

function EditContact(props) {
    let navigate = useNavigate();
    let location = useLocation().state;
    return <EditContactClass {...props} navigate={navigate} location={location} />
}

export default EditContact;