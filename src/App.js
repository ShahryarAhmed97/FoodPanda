
import './App.css'

import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

import {store,persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Screens  from './components/screens'

import React, { Component } from 'react'

 class App extends Component {
   constructor(){
     super()
     this.state={
      //  loggedIn:'',
      //  check:''
     }
   }

  //  logInFun(log,check){
  //    this.setState({loggedIn:log,check:check})
  //  }
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
        <Screens />
       
      </div>
         </PersistGate>
         </Provider>
    )
  }
}



export default App

