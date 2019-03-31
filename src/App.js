import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {getAllMedia} from './utils/MediaAPI';
import Nav from './components/nav'
import Home from './views/Home';
import Profile from './views/Profile';
import Single from './views/Single';
import Login from './views/Login';




class App extends Component {

  state = {
    picArray: [],
    user: [],
  };

  componentDidMount() {
   getAllMedia().then(pics => {
     this.setState({picArray: pics});
   })
  }
  setUser = (data) => {
    this.setState({user: data});
  };
  render() {
    return (
        <Router>
        <div className="container">
          <Nav/>
          <Route exact path="/home" render={(props)=>(
              <Home {...props} picArray={this.state.picArray}/>
          )}/>
          <Route path="/profile" component={Profile}/>

          <Route path="/single/" component={Single}/>

          <Route exact path="/" render={(props) => (
              <Login {...props} setUser={this.setUser}/>
          )}/>

        </div>
        </Router>
    );
  }
}

export default App;
