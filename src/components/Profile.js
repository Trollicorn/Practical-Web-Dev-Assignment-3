import { Component } from "react";

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {username: "User", showForm: false};
        this.changeShowForm = this.changeShowForm.bind(this);
    }

    changeShowForm(event){
        this.setState(prevState => ({
            showForm: !prevState.showForm
        }));
    }

    render() {
        
        const showForm = this.state.showForm;
        let content;
        if (showForm){
            content = <h3>form here</h3>;
        }else{
            content = <h3>no form</h3>;
        }
        
        return (
            <div>
                <h2> Hello {this.state.username}! </h2>
                <button onClick={this.changeShowForm}>Edit Profile</button>
                {content}
            </div>
        );
    }
}

export default Profile