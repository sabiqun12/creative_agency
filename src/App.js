import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import { createContext, useState } from 'react';
import Login from './components/Home/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Order from './components/Dashboard/Order/Order';
import Review from './components/Dashboard/Review/Review';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';
import AddService from './components/Admin/AddService/AddService';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';

import Services from './components/Dashboard/Services/Services';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <p>Name: {loggedInUser.name}</p>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/admin">
            <AdminDashboard></AdminDashboard>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/servicelist">
            <Services></Services>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
