import React, { Component } from 'react'
import { connect } from 'react-redux';
import {userLogInBool,signLogTog,restHomeTog} from '../store/action';
import {logInFun} from '../config/firebase'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import {    MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import '../assests/css/appHome.css'
 class FormPage extends Component {
   constructor(){
     super();
     this.state={
       email:'',
       password:'',
       userType:'',
     

     }

    //  if(this.props.userLogInBool==true){
    //            this.props.history.push('/')

    //  }
   }

   showSignForm(){
    // this.props.signLogTog(true)
            this.props.history.push('/')


  }
   

  async LoginForm(e){

    
    const {email,password,userType}=this.state
    console.log(userType)
    
    try{

    
     e.preventDefault()
     
     console.log(email,password)
     const user={
      //  check,

      email,
      password,
      userType,

      // loggedIn:true

     }
  // console.log('chlyga')
     var res=await logInFun(user)
     console.log(res)

     if(res && userType=='loginUser'){
       this.props.userLogInBool(true)
      this.props.history.push('/UserHome')


      //  this.props.userLogInBool(true)
     }

    //  var res=await logInFun(user)
     if(res && userType=='loginRest'){
      this.props.userLogInBool(true)

      this.props.history.push('/RestHome')
      //  this.props.restHomeTog(true)
     }

     this.setState({
      email:'',
      password:'',
      // check:'',
      
      
     })
    }

   catch(e){
      console.log(e)

    }
  }


   checkFun(e){
    const {bol,check}=this.state
    if(bol==false){
      this.setState({check:'checked',bol:true})
    }
    if(bol==true){
      this.setState({check:'Unchecked',bol:false})


    }

console.log(bol,check)


   }
  
  render() {
// console.log(this.props.userLogInBool)
//     if(this.props.userLogInBool){
//       this.props.history.push('/UserHome')
//     }
  return (
    <div className='bg' style={{width:'100%', height:'657px',marginTop:'0px'}} >

   
    <MDBContainer className='col-12  bg ' style={{height:'100%',width:'100%'}}>
      <MDBRow >
        <MDBCol md="8"> 
          <MDBCard style={{marginTop:'50px',marginLeft:'45%'}}>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Log In</p>
                <div className="grey-text">
                {console.log(this.props.user)}

                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                  />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      value={this.state.password}
                    onChange={(e)=>this.setState({password:e.target.value})}
                    />
                 {/* <input type='checkbox' name='c1' onChange={(e)=>this.checkFun(e)} /> */}
               
               </div>
               <div className='row'>
                 <div className='col'>
                 <input type='radio' name='loginType' onClick={()=>this.setState({userType:'loginUser'})} value='loginUser'  /> &nbsp;&nbsp;&nbsp;Login As User

                 </div>
                 <div className='col'>
                 <input type='radio' name='loginType' onClick={(e)=>this.setState({userType:'loginRest'})} value='loginRest'/>&nbsp;&nbsp;&nbsp;LogIn As Resturant

                 </div>

               </div>
                
    
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="green"  onClick={(e)=>this.LoginForm(e)}>
                    LogIn
                  </MDBBtn>
                  <br />
                  <MDBBtn color="cyan"  onClick={(e)=>this.showSignForm(e)}>
                    Go To Home
                  </MDBBtn>
                </div>

                {/* <div className="text-center py-4 mt-3">
                  
                </div> */}

              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    )
   }
  }
    
  const mapStateToProps = state => {
    console.log(state)
    return {
        user: state.user,
        userLogInBool:state.userLogInBool,
        
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      userLogInBool: (val) => dispatch(userLogInBool(val)),
      signLogTog: (val) => dispatch(signLogTog(val)),
      restHomeTog: (val) => dispatch(restHomeTog(val)),

        // remove_user: () => dispatch(remove_user()),
        // check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(FormPage);
