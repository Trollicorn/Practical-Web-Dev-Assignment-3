import {Component} from "react";
import axios from 'axios';

class ApiData extends Component {
    constructor(props){
        super(props);
        this.state = {
            debits: [],
            credits: [],
            showing: "debit"
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
        console.log(event.target.value);
        this.setState({showing: event.target.value});
    }

    makeTable(){
        let arr = this.state.showing === "debit" ? this.state.debits : this.state.credits;
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
                        Currently viewing 
                        <select name="view" onChange={this.changeShowing}>
                            <option value="debit">Debit</option>
                            <option value="credit">Credit</option>
                        </select>
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