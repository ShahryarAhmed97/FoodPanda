import React, { Component } from 'react'
import { connect } from 'react-redux';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

import {logOutFun} from '../config/firebase'
import {userLogInBool} from '../store/action';
// import { MDBTabPane, MDBTabContent } from 'mdbreact';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
//
import Chip from '@material-ui/core/Chip';
//

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import res1 from '../assests/res1.jpg'
import {restListsFun,restAllDishView} from '../config/firebase'
import {    MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';


 
 
 
 class RestUserHomeView extends Component {
    constructor(){
      super()
      this.state={
    
        allCatsBool:true,
        currentRestData:'',
        allDishes:[],
 
      }
    }


    restAllCats(val){
    
        console.log(val)
        this.setState({
         currentRestData:val,
          allCatsBool:false
        })
    
    
      }
 
   
   async renderRestHome(){
     console.log(this.state.currentRestData)
     let res =[]
     res= await restAllDishView()
     console.log(res)
     // this.setState({
     //   allDishes:res
     // })
 
     return(
       <div>
         <button onClick={()=>this.setState({allCatsBool:true})}>Go Back</button>
         {
 res.map((val,inx)=>{
 return(
 
 
 
     <MDBCol style={{marginBottom:'30px'}}>
       <MDBCard style={{ width: "20rem" }}>
         <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
         <MDBCardBody>
           <MDBCardTitle>{val.dshName} </MDBCardTitle>
           <MDBCardTitle>{val.dshCat}</MDBCardTitle>
 
           <MDBCardTitle>RS:{val.dshPrice}</MDBCardTitle>
 
           {/* <MDBCardText>
             Some quick example text to build on the card title and make
             up the bulk of the card&apos;s content.
           </MDBCardText> */}
           <MDBBtn color='yellow'>Edit</MDBBtn>
           <MDBBtn color='red'>Delete</MDBBtn>
 
         </MDBCardBody>
       </MDBCard>
     </MDBCol>
 )
   })
 }
 
 
       </div>
     )
 
   }
 
 
   render() {
     return (
       <div>
         
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
        // remove_user: () => dispatch(remove_user()),
        // check_fun: (check) => dispatch(checkFun(check)),
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(RestUserHomeView);
