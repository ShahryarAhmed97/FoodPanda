import React, { Component } from 'react'
import { connect } from 'react-redux';


 class Home extends Component {

    logOutFun(){
        
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
        // user: state.user
    }
}

  const mapDispatchToProps = dispatch => {
    return {
        // remove_user: () => dispatch(remove_user()),
        // check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Home);
