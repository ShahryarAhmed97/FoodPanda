 import React, { Component } from 'react'
import { connect } from 'react-redux';
import LogIn from './userLogIn'
import UserHome from './userHome'
import SignUp from './userSignUp';
import RestSignUp from './RestSignUp'
import {signLogTog} from '../store/action'
import RestHome from './RestHome'
import AppHome from './AppHome'


class Screens extends Component {
    constructor(){
        super()
        this.state={
            localCheck:true,


        }
     }




render() {
        return (
            <div>
                {console.log(this.props.signLogTog)}
           {/* {!this.props.userLogInBool && this.props.signLogTog && <SignUp /> } */}
           {/* { !this.props.userLogInBool && !this.props.restSignTog && <RestSignUp />} */}
           {/* {   !this.props.restHomeTog && !this.props.userLogInBool && this.props.signLogTog  && <LogIn />} */}
           {/* {    this.props.restHomeTog && <RestHome />}          */}
          {/* {  this.props.userLogInBool && <UserHome /> } */}
         
               {/* { <AppHome />} */}
             {/* {   <RestHome />} */}
            {/* <UserHome /> */}
            {/* <SignUp /> */}
            {/* <LogIn /> */}
            {/* <RestSignUp /> */}


           

         
            </div>

        )
    }
}




const mapStateToProps = state => {
//   console.log('In screens',state)
  return {
    //   user: state.user ? state.user :{},
     
      userLogInBool:state.userLogInBool ,
      restHomeTog:state.restHomeTog,
      restSignTog:state.restSignTog,
      signLogTog:state.signLogTog ? state.signLogTog :true,

  }
}


const mapDispatchToProps = dispatch => {
    return {
        // check_fun: (check) => dispatch(checkFun(check)),
        signLogTog: (val) => dispatch(signLogTog(val)),

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Screens);




