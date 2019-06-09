import React, { Component } from 'react'
import { connect } from 'react-redux';
import {remove_user,checkFun} from '../store/action'


 class Home extends Component {

    logOutFun(){
this.props.check_fun(false)
        this.props.remove_user()
        
    }
    
    render() {
        return (
            <div>
                <button onClick={()=>this.logOutFun()}>Log Out</button>
               <h1>Welcome to Home </h1> 

                
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        remove_user: () => dispatch(remove_user()),
        check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Home);
