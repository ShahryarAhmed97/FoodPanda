import React from 'react';
import SignUp from '../components/userSignUp'
import RestSignUp from '../components/RestSignUp'
import LogIn from '../components/userLogIn'
import RestHome from '../components/RestHome'
import UserHome from '../components/userHome'
import AppHome from '../components/AppHome'
import AddDishes from '../components/AddDishes'
// import RestUserHomeView from '../components/RestUserHomeView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navigations() {
    return (
        //this.props.history.push('/dashboard')
        <Router>
            {/* optional */}
            {/* <ul>
                <li><Link to="/">App Home</Link></li>
                <li><Link to="/SignUp">Sign Up</Link></li>
                <li><Link to="/RestSignUp">RestSignUp</Link></li>
                <li><Link to="/LogIn">LogIn</Link></li>
                <li><Link to="/RestHome">RestHome</Link></li>
                <li><Link to="/UserHome">UserHome</Link></li>
            </ul> */}
            {/* optional */}

            
            <div>
                <Route exact path="/" component={AppHome} />
                <Route path="/SignUp" component={SignUp} />
                <Route exact path="/RestSignUp" component={RestSignUp} />
                <Route path="/RestHome" component={RestHome} />
                <Route path="/LogIn" component={LogIn} />

                <Route path="/UserHome" component={UserHome} />
                <Route path="/AddDishes" component={AddDishes} />
                {/* <Route path="/RestUserHomeView" component={RestUserHomeView} /> */}


                {/* this.props.match.params.username */}
            </div>
        </Router>
    );
}

export default Navigations