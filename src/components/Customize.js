import {Component} from "react";

class Customize extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.changeUsername(event);
    }

    render() {
        const showForm = this.props.showForm;
        let content;
        if (showForm){
            content = <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" defaultValue={this.props.username} />
                <input type="submit" value="Submit"/> 
            </form>
        }else{
            content = "";
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Customize