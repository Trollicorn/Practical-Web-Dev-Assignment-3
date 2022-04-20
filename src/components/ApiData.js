import {Component} from "react";
import axios from 'axios';

class ApiData extends Component {
    constructor(props){
        super(props);
        this.state = {
            debits: [],
            credits: [],
            showDebits: true
        };
        this.changeShowing = this.changeShowing.bind(this);
    }

    async componentDidMount(){
        try {
            let response = await axios.get("https://moj-api.herokuapp.com/debits");
            //console.log(response.data);
            this.setState({debits: response.data});
            //console.log(this.state.debits);
        }
        catch(error) {
            if (error.response){
                console.log(error.response.data);
            }
        }
        try {
            let response = await axios.get("https://moj-api.herokuapp.com/credits");
            this.setState({credits: response.data});
            //console.log(this.state.credits);
        }
        catch(error) {
            if (error.response){
                console.log(error.response.data);
            }
        }
        //console.log(this.state.items);
    }

    changeShowing(event){
        this.setState(prevState => ({
            showDebits: !prevState.showDebits
        }));
    }

    makeTable(){
        let arr = this.state.showDebits ? this.state.debits : this.state.credits;
        let table = [];
        for (let i = 0; i < arr.length; ++i){
            let row = arr[i];
            table.push(
                <tr key={row.id}>
                    <td>{row.description}</td>
                    <td>{row.amount}</td>
                    <td>{row.date}</td>
                </tr>
            );
        }
        return table;
    }

    render() {
        return (
            <div>
                <table>
                    <caption>
                        Showing {this.state.showDebits?"Debits":"Credits"}
                        <br/>
                        <button onClick={this.changeShowing}>View {this.state.showDebits?"Credits":"Debits"} instead</button>
                    </caption>
                    <thead><tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Date</th>
                    </tr></thead>
                    <tbody>
                        {this.makeTable()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ApiData