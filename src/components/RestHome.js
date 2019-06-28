import React, { Component } from 'react'
import { connect } from 'react-redux';
import {userLogInBool,signLogTog,restHomeTog,dishBool} from '../store/action';
import {logOutFun,restAllDishView,userReqsViewFun,sendInProgFun,userInProgView,sendDeliveredFun,userDeliveredView} from '../config/firebase'
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

import {newDishCat} from '../config/firebase'

import {    MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';


class AllDishes extends Component {

  constructor(){
    super()
    this.state={
      allDishes:[],

    }

}

 async componentDidMount(){
     let res = await restAllDishView()
     console.log(res)
     this.setState({
       allDishes:res
     })
}

renderAllDishes(){
  const {allDishes}=this.state

return (



allDishes.map((val,inx)=>{
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


    )

}

  render() {


      return (
          <div>
              <h1>All Dishes</h1>

          <div >
          <div className='row'>
            {this.renderAllDishes()}
          </div>
              </div>
          </div>
      )
  }
}


class Pending extends Component {
  constructor(){
    super()
    this.state={
      userReqsArr:[],

    }
  }

  async componentDidMount(){
    let res=await userReqsViewFun()
    console.log('res',res)
  // this.state.userReqsArr.push(res)
        
    
    this.setState({userReqsArr:res})

    console.log(this.state.userReqsArr)


  }

 async markAsInProg(val){
    console.log(val)

   let res=await  sendInProgFun(val)
   window.location.reload()
   if(res){
     alert('Marked as InProgress ')
   }

  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
      
 
 
        <MDBCol className='row' style={{marginBottom:'30px',marginLeft:'30px'}}>
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
          {/* <MDBBtn color='green'  onClick={} >Request Order</MDBBtn> */}
          {/* <MDBBtn color='red'>Delete</MDBBtn> */}
          <MDBBtn color='yellow'  onClick={()=>{this.markAsInProg(val)}} >Marked As InProgress</MDBBtn>

 
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
      <div >
        <h1>Pending</h1>
        {this.renderRestHome()}
      </div>
    )
  }
}


class InProgress extends Component {
  constructor(){
    super()
    this.state={
      userReqsArr:[],

    }
  }

  async componentDidMount(){
    let res=await userInProgView()
    console.log('res',res)
  // this.state.userReqsArr.push(res)
        
    
    this.setState({userReqsArr:res})

    console.log(this.state.userReqsArr)


  }

 async markAsDelivered(val){
    console.log(val)

   let res=await  sendDeliveredFun(val)
   window.location.reload()
   if(res){
     alert('Marked as Delivered ')
   }

  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
      
 
 
        <MDBCol className='row' style={{marginBottom:'30px',marginLeft:'30px'}}>
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
          {/* <MDBBtn color='green'  onClick={} >Request Order</MDBBtn> */}
          {/* <MDBBtn color='red'>Delete</MDBBtn> */}
          <MDBBtn color='yellow'  onClick={()=>{this.markAsDelivered(val)}} >Marked As InProgress</MDBBtn>

 
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
      <div >
        <h1>In Progress</h1>
        {this.renderRestHome()}
      </div>
    )
  }
}

class Delivered extends Component {
  constructor(){
    super()
    this.state={
      userReqsArr:[],

    }
  }

  async componentDidMount(){
    let res=await userDeliveredView()
    console.log('res',res)
  // this.state.userReqsArr.push(res)
        
    
    this.setState({userReqsArr:res})

    console.log(this.state.userReqsArr)


  }

 async markAsDelivered(val){
    console.log(val)

   let res=await  sendDeliveredFun(val)
   window.location.reload()
   if(res){
     alert('Marked as Delivered ')
   }

  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
      
 
 
        <MDBCol className='row' style={{marginBottom:'30px',marginLeft:'30px'}}>
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
          {/* <MDBBtn color='green'  onClick={} >Request Order</MDBBtn> */}
          {/* <MDBBtn color='red'>Delete</MDBBtn> */}
          {/* <MDBBtn color='yellow'  onClick={()=>{this.markAsDelivered(val)}} >Marked As InProgress</MDBBtn> */}

 
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
      <div >
        <h1>Delivered</h1>
        {this.renderRestHome()}
      </div>
    )
  }
}


function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    card: {
      maxWidth: 345,
    },
  }));
  
   function ScrollableTabsButtonPrevent() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    function handleChange(event, newValue) {
      setValue(newValue);
    }
  
    return (
      <div className={classes.root} >
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} variant="scrollable" scrollButtons="off">
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
            <Tab icon={<PersonPinIcon />} aria-label="Person" />
            <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
       
            <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><AllDishes /></TabContainer>}
        {value === 1 && <TabContainer> <Pending /></TabContainer>}
        {value === 2 && <TabContainer><InProgress /></TabContainer>}
        {value === 3 && <TabContainer><Delivered /></TabContainer>}
        

        
      </div>
    );
  }

  



 class RestHome extends Component {
     constructor(){
         super()
         this.state={
           dishBool:false,

         }
     }

    async logOutUser(){

     
        try{
    
            var res =await logOutFun()
            console.log(res)
            this.props.history.push('/LogIn')
            if(res){
            }

    
        } 
        catch{
            console.log('logout error')
    
        }
    
    }



dishBoolFun(){
  this.props.history.push('/AddDishes')
}

    
    render() {
        return (
            <div>
              <div >

                            <button onClick={()=>{this.logOutUser()}} className='btn btn-outline-danger'>Log Out</button>
                            {/* <button onClick={()=>this.setState({dishBool:true})}>Add New Dish </button> */}
                            <button  className='btn btn-outline-success' onClick={()=>this.dishBoolFun()}>Add New Dish </button>
              </div>

                {/* <h1>RESTHOME</h1> */}
            {
              !this.state.dishBool &&

               <ScrollableTabsButtonPrevent />
            }
            {
              // this.state.dishBool &&
              // <AddDishCats />

            } 

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

export default  connect(mapStateToProps,mapDispatchToProps)(RestHome);

