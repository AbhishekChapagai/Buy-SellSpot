import React from 'react';
// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Home from './pages';
import './App.css';
import browseVehicle from './pages/browseVehicle';
import AddVehicle from './pages/addvehicle';
import signin from './pages/signin';
import UpdateProduct from './pages/UpdateProduct';
import addvehicle from './pages/addvehicle';
import Signup from './pages/signup';
import about from './pages/about';
import vehicleDetails from './pages/vehicleDetails';
import profile from './pages/profile';
import myVehicle from './pages/myvehicle';
import updateProfile from './pages/updateProfile';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/browsevehicle" component={browseVehicle} exact />
        <Route path="/vehicleDetails/:id" component={vehicleDetails} exact />
        <Route path="/addvehicle" component={addvehicle} exact />
        <Route path="/about" component={about} exact />
        <Route path="/myvehicle" component={myVehicle} exact />
        <Route path="/profile" component={profile} exact />
        <Route path="/signin" component={signin} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/updateProfile" component={updateProfile} exact />
        <Route path="/update/:id" component={UpdateProduct} exact />
      </Switch>
    </Router>
  );
}

export default App;
