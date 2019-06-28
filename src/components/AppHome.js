import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import c1 from '../assests/c1.jpg'
import c2 from '../assests/c2.jpg'
import c3 from '../assests/c3.jpg'
import c4 from '../assests/c4.jpg'
import '../assests/css/appHome.css'
import {restSignTog,userLogInBool,signLogTog} from '../store/action'
import { connect } from 'react-redux';


//



 class AppHome extends Component {

    constructor(){
        super()
        this.state={
       


        }
    }

    showUserSign(){
// this.props.userLogInBool(true)
this.props.history.push('/SignUp')

    }

    showRestSign(){
// this.props.restSignTog(true)
this.props.history.push('/RestSignUp')

    }

goToLogIn(){
  this.props.history.push('/LogIn')
}
    
    render() {
        return (
            <div className='bg ' style={{height:'657px'}} >
     <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Food Panda</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href="#features"></Nav.Link>
      <Nav.Link href="#pricing"></Nav.Link>
    </Nav>
    <Form inline>
  

      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      <Button variant="outline-info"  onClick={ ()=>{this.goToLogIn()} } >Log In  </Button>
    </Form>
  </Navbar>

  <div  className=' col-md-8 offset-md-2' style={{marginTop:'10%'}} >
          <h1 style={{color:'white'}}>Welcome To Our Website Have a Nice Meal</h1>
  </div>


            <div className=' col-md-4 offset-md-4 mx-auto' style={{marginTop:'5%'}} >

            <button type="button" onClick={()=>{this.showUserSign()}} class="btn btn-success">Sign Up as User</button>
            <button type="button"  onClick={()=>{this.showRestSign()}} class="btn btn-warning">Restaurant Sign Up </button>
            </div>



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
      userLogInBool: (val) => dispatch(userLogInBool(val)),
      signLogTog: (val) => dispatch(signLogTog(val)),
      restSignTog: (val) => dispatch(restSignTog(val)),
      

        // remove_user: () => dispatch(remove_user()),
        // check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(AppHome);