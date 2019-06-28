import React, { Component } from 'react'
import { connect } from 'react-redux';
import {userLogInBool,signLogTog,restHomeTog} from '../store/action';
import {logOutFun} from '../config/firebase'
import { MDBFileInput } from "mdbreact";

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

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

import {dishBool} from '../store/action'
import {newDishCat} from '../config/firebase'

class AddDishCats extends Component {
    constructor(){
      super()
      this.state={
        dshName:'',
        dshPrice:'',
        dshImg:'',
        dshImg:'',
      
 
      }
    }

    goBack(){
        this.props.history.push('/RestHome')
    }
 
    getFile(e){
     let fName=e.target.name
     let file=e.target.files[0]
     this.setState({dshImg:file})
 
     console.log(this.state.dshImg)
    }
 
       async addDishForm(e){
 
     const {dshName,dshImg,dshPrice,dshId}=this.state
     let dishObj={
       dshName,
       dshImg,
       dshImg,
       dshPrice,
       
 
     }
    console.log(dishObj)
       let res=await newDishCat(dishObj)

       if(res){
                   this.props.history.push('/RestHome')

       }
       
    this.setState({
     dshName:'',
     dshImg:'',
     dshCat:'',
     dshPrice:'',
     
 
    })
 
    }
 
   render() {
     return (
       <div>
 
 <MDBContainer className='col-md-8 offset-md-2'>
       <MDBRow>
         <MDBCol md="6"> 
           <MDBCard>
             <MDBCardBody>
               <form>
                 <p className="h4 text-center py-4">Add New Dish</p>
                 <div className="grey-text">
                
                 
                   <MDBInput
                     label="Dish Name"
                     icon="envelope"
                     group
                     type="text"
                     validate
                     error="wrong"
                     success="right"
                     value={this.state.dshName}
                     onChange={(e)=>this.setState({dshName:e.target.value})}
                   />
                     <MDBInput
                       label="Enter Dish Price"
                       icon="lock"
                       group
                       type="text"
                       validate
                       value={this.state.dshPrice}
                     onChange={(e)=>this.setState({dshPrice:e.target.value})}
                     />

            <MDBInput
                       label="Enter Dish Category"
                       icon="lock"
                       group
                       type="text"
                       validate
                       value={this.state.dshCat}
                     onChange={(e)=>this.setState({dshCat:e.target.value})}
                     />
 
                   <div className="input-group">
                     <div className="input-group-prepend">
                       <span className="input-group-text" id="inputGroupFileAddon01">
                         Upload
                       </span>
                     </div>
                     
                     <div className="custom-file">
                       <input
                         type="file"
                         className="custom-file-input"
                         id="inputGroupFile01"
                         aria-describedby="inputGroupFileAddon01"
                         onChange={(e)=>this.getFile(e)}
                       />
                       <label className="custom-file-label" htmlFor="inputGroupFile01">
                         Choose file
                       </label>
                     </div>
                   </div>
 
                
                </div>
                

     
                 <div className="text-center py-4 mt-3">
                   <MDBBtn color="cyan"  onClick={(e)=>this.addDishForm(e)}>
                     Add Dish
                   </MDBBtn>
                   <MDBBtn color="red"  onClick={()=>this.goBack()}>
                     Back
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
        user: state.user,
        dishBool:state.dishBool
    }
}

  const mapDispatchToProps = dispatch => {
    return {
      restHomeTog: (val) => dispatch(restHomeTog(val)),
      dishBool: (val) => dispatch(dishBool(val)),
       
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(AddDishCats);


 
 