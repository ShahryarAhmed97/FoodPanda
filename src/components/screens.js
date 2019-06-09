import React, { Component } from 'react'
import { connect } from 'react-redux';
import LogIn from './LogIn'
import Home from './Home'
import SignUp from './SignUp'
import { checkFun } from '../store/action';



 class Screens extends Component {
constructor(){
    super()
    this.state={
        localCheck:true

    }

    

}



componentDidMount(){
    this.setState({localCheck:false})
    console.log(this.state.localCheck)

    // window.addEventListener('onbeforeunload',()=>{


    //     console.log('mount chala',this.props.user.check)
    // if(this.props.user.check=='Unchecked'){

    //     this.props.check_fun(false)
    //     // this.setState({localCheck:false})
    //     // console.log(this.state.localCheck)
    
    // }

    // })

}



// componentWillUpdate(newState,newProps){

//     console.log('mount chala',this.props.user.check)
//     if(this.props.user.check=='Unchecked'){

//         this.props.check_fun(false)
//     }

// }

// componentWillUnmount(){
//     console.log('mount chala',this.props.user.check)
//     if(this.props.user.check=='Unchecked'){

//         this.props.check_fun(false)
//         // this.setState({localCheck:false})
//         // console.log(this.state.localCheck)
    
//     }

// }



    render() {
        

        
        return (
            <SignUp />

        )
    }
}




const mapStateToProps = state => {
//   console.log('In screens',state)
  return {
      user: state.user ? state.user :{},
      check:state.check  ,

  }
}


const mapDispatchToProps = dispatch => {
    return {
        check_fun: (check) => dispatch(checkFun(check)),
       
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Screens);







// <div >

// {/* <SignUp /> */     console.log(this.state.localCheck)
// }
// {/* {console.log(this.props.user.loggedIn)} */}
// {/* {!this.props.loggedIn && <LogIn   /> } 
// { this.props.loggedIn && <Home /> }
//          */}

// {!this.props.user.loggedIn   &&  <LogIn   /> } 
// {
    
//     this.props.user.loggedIn && this.props.check &&  <Home />
     
// }
// {
//   this.props.user.loggedIn && this.state.localCheck && <Home />
// }
// {/* { this.props.user.loggedIn && this.state.localCheck==true && <Home /> } */}
//     </div>
// )