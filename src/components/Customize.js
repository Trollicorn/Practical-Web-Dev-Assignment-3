import {Component} from "react";

class Customize extends Component {
    constructor(props){
        super(props);

    }

    render() {
        const showForm = this.props.showForm;
        let content;
        if (showForm){
            content = <input type="text" onChange={this.props.changeUsername} value={this.props.username} />
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