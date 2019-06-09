import React, { Component } from 'react'
import { connect } from 'react-redux';
import { update_user ,remove_user,checkFun } from '../store/action';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


 class FormPage extends Component {
   constructor(){
     super();
     this.state={
       email:'',
       password:'',
       bol:false,
       check:'Unchecked',
       loggedIn:false

     }
   }


   LoginForm(e){
     const {email,password,check,loggedIn}=this.state
     e.preventDefault()
     
     console.log(email,password,check,loggedIn)
     const user={
       check,

      email,
      password,
      loggedIn:true

     }

     this.props.store_user(user);
     this.props.check_fun(true)


    // if(check=='Unchecked'){
    //   this.props.check_fun(false)

    // }
    // if(check=='unchecked'){

    //   this.props.check_fun(true)
    // }


    


     this.setState({
      email:'',
      password:'',
      check:'',
      
      
     })
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
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
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
                 <input type='checkbox' name='c1' onChange={(e)=>this.checkFun(e)} />
               
               </div>
                
    
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan"  onClick={(e)=>this.LoginForm(e)}>
                    Register
                  </MDBBtn>
                </div>

              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
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
        store_user: (user) => dispatch(update_user(user)),
        remove_user: () => dispatch(remove_user()),
        check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(FormPage);