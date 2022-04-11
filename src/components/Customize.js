import {Component} from "react";

class Customize extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeTextColor = this.changeTextColor.bind(this);
        this.state = {txcolor: "#0000FF"};
    }


    handleSubmit(event){
        event.preventDefault();
        this.props.changeUsername(event);
        this.changeBackgroundColor(event.target.bgcolor.value);
        this.changeTextColor(event.target.txcolor.value);
        this.props.changeShowForm(event);
    }

    changeBackgroundColor(color){
        document.body.style.backgroundColor = color;
    }

    changeTextColor(color){
        this.setState({txcolor: color});
    }

    render() {
        const showForm = this.props.showForm;
        let content;
        let txcolor = this.state.txcolor;
        if (showForm){
            content = <form onSubmit={this.handleSubmit}>
                <fieldset>
                <legend>Change your profile here</legend>
                Username: <input type="text" name="username" defaultValue={this.props.username} /><br/>
                Background Color: <input type="text" name="bgcolor" defaultValue="#FFFFFF"/><br/>
                Text Color: <input type="text" name="txcolor" defaultValue="#000000"/><br/>
                <input type="submit" value="Submit"/> 
                </fieldset>
            </form>
        }else{
            content = "";
        }
        return (
            <div style={{color:{txcolor}}}>
                {content}
            </div>
        );
    }
}

export default Customize