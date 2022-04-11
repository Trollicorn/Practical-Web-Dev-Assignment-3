import {Component} from "react";
import Profile from './components/Profile'
import Clock from './components/Clock'

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
      return (
          <div className="App">
              <Profile/>
              <Clock/>
          </div>
    );
  }
}
export default App;
