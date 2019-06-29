import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { update_user } from '../store/action';
import {restSignUp} from '../config/firebase'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import {signLogTog} from '../store/action'
import '../assests/css/appHome.css'

 class FormPage extends Component {
   constructor(){
     super();
     this.state={
      fullName :'',
      restName:'',
      email:'',
    
      country:'',
      city:'',
      password:'',
      cnfrmPass:'',

     }
   }

   showLogForm(){
    //  this.props.signLogTog(false)
            this.props.history.push('/')
     console.log('signwala')

   }

   submitForm(e){
     const {fullName,email,password,cnfrmPass,country,city,restName}=this.state
     e.preventDefault()
    //  console.log(userName,email,password,cnfrmPass,check)
     const user={

      fullName ,
      restName,
      email,
      
      
      country,
      city,
      password,
      cnfrmPass,

     }
    //  this.props.store_user(user);

    restSignUp(user)

     this.setState({
      fullName :'',
      restName:'',
      email:'',
      country:'',
      city:'',
      password:'',
      cnfrmPass:'',
     })
   }
  
  render() {
  return (
   
  
    <div className='bg' style={{width:'100%', height:'1100px',marginTop:'0px'}}>

   
    <MDBContainer className='col-12  bg ' style={{height:'100%',width:'100%'}}>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard style={{marginTop:'50px',marginLeft:'45%'}} >
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4"> Resturant Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.fullName}
                    onChange={(e)=>this.setState({fullName:e.target.value})}
                  />

                   <MDBInput
                    label="Your Restaurant Name"
                    icon="Home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.restName}
                    onChange={(e)=>this.setState({restName:e.target.value})}
                  />
                 
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
                    label="Your country"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.country}
                    onChange={(e)=>this.setState({country:e.target.value})}
                  />
                   <MDBInput
                    label="Your city"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.city}
                    onChange={(e)=>this.setState({city:e.target.value})}
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
                    {/* <MDBInput label="Filled-in unchecked" checked type="checkbox" id="checkbox2" /> */}
                 {/* <input type='checkbox' name='c1' onChange={(e)=>this.setState({check:e.target})} /> */}
                  <MDBInput
                    label="Confirm your Password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.cnfrmPass}
                    onChange={(e)=>this.setState({cnfrmPass:e.target.value})}
                  />

            
                </div>
                
    
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="green"  onClick={(e)=>this.submitForm(e)}>
                    Register
                  </MDBBtn>
                  <br />
                  <br />
                  <MDBBtn color="cyan"  onClick={(e)=>this.showLogForm(e)}>
                   Back to Home
                  </MDBBtn>
                </div>

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
        user: state.user
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      signLogTog: (val) => dispatch(signLogTog(val)),

        // store_user: (user) => dispatch(update_user(user)),
        
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(FormPage);