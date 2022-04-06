import { Component } from "react";
import Customize from "./Customize";

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {username: "User", showForm: false, userChange: this.changeUsername};
        this.changeShowForm = this.changeShowForm.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
    }

    changeShowForm(event){
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    changeUsername(event){
        this.setState({username: event.target.value});
    }

    render() {
                
        return (
            <div>
                <h2> Hello {this.state.username}! </h2>
                <button onClick={this.changeShowForm}>Edit Profile</button>
                <Customize 
                showForm={this.state.showForm} 
                username={this.state.username}
                changeUsername={this.changeUsername}/>
            </div>
        );
    }
}

export default Profile