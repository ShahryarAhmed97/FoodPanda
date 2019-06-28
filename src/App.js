
import './App.css'

// import LogIn from './components/LogIn'
// import SignUp from './components/SignUp'

import {store,persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import Screens  from './components/screens'
import Navigations from './config/router';


import React, { Component } from 'react'

 class App extends Component {
   constructor(){
     super()
     this.state={
      
     }
   }

  
  render() {
    return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <div>
        {/* <Screens /> */}
        {/* <div style={{border: '2px dashed white', padding: 20, width: '100%'}}> */}
                <Navigations />
              {/* </div> */}
      </div>
         </PersistGate>
         </Provider>
    )
  }
}



export default App

