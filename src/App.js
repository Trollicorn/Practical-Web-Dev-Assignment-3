import {Component} from "react";
import Profile from './components/Profile'
import Clock from './components/Clock'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {txcolor: "#000000"};
    this.changeTextColor = this.changeTextColor.bind(this);
  }

  changeTextColor(color){
    this.setState({txcolor: color});
  }

  render() {
      return (
          <div className="App" style={{color: this.state.txcolor}}>
              <Profile changeTextColor={this.changeTextColor} txcolor={this.state.txcolor}/>
              <Clock/>
          </div>
    );
  }
}
export default App;
