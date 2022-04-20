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
        this.setState({username: event.target.username.value});
    }

    render() {      
        return (
            <div>
                <h2> Hello {this.state.username}! 
                <button onClick={this.changeShowForm}>Edit Profile</button> </h2>
                <Customize 
                showForm={this.state.showForm} 
                username={this.state.username}
                changeUsername={this.changeUsername}
                changeShowForm={this.changeShowForm}
                changeTextColor={this.props.changeTextColor}
                txcolor={this.props.txcolor}/>
            </div>
        );
    }
}

export default Profile