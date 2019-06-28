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
import {restListsFun,restAllDishView,userDishView,userReqFun,userReqsViewFun,userInProgView,userDeliveredView} from '../config/firebase'
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

async componentDidMount(){
    let res =[]
    res= await userDishView()
    if(res){
      this.state.allDishes.push(res)
       this.setState({
      allDishes:this.state.allDishes
    })
    {console.log(res)}
      
    {console.log(this.state.allDishes)}
    }
  this.setState({
    allDishes:res
  })
}



 async reqOrderFun(val){
    let res =await userReqFun(val)
    console.log(res)
    alert('Requested Successfully ')


    
    // console.log(JSON.parse(localStorage.getItem('selectedRestData')))

  }
 
 
  renderRestHome(){
  

   return(
     <div className='row'>
       {
this.state.allDishes.map((val,inx)=>{
return(
 


   <MDBCol className='row' style={{marginBottom:'30px'}}>
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
         <MDBBtn color='green'  onClick={()=>this.reqOrderFun(val)} >Request Order</MDBBtn>
         {/* <MDBBtn color='red'>Delete</MDBBtn> */}

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

     <div className='row'>
       {this.renderRestHome()}
     </div>
     </div>
   )
 }
}





 class ResList extends Component {
   constructor(){
     super()
     this.state={
       allRests:[],
       allCatsBool:true,
       currentRestData:'',
       allDishes:[],
       search:''
    
    }

    
  }



  async componentDidMount(){
    let allRests= await restListsFun()
 
    console.log(allRests)
    this.setState({allRests:allRests})

  }





gotoRestUserView(val){
  localStorage.setItem('selectedRestData',JSON.stringify(val))
  // this.props.history.push('/UserHome/RestUserHomeView')
  
 this.setState({
   allCatsBool:false
 })

  

}








renderLists(){
    const {allRests} =this.state
    return (
      <div  style={{ margin:'10px'}} >


{
  allRests.map((val,inx)=>{
    return(

  <Card className="bg-light text-black" style={{boxShadow:'0px 0px 10px gray',height:'60px',width:'700px',color:'black',marginBottom:'20px'}} >
        {/* <Card.Img src={res1} alt="Card image" style={{height:'150px',width:'500px', filter: 'blur(0.5px)'}} /> */}
        <Card.ImgOverlay>
       <Card.Title>
         <button style={{backgroundColor:'transparent',border:'0px',color:'#1044d1'}} onClick={()=>{this.gotoRestUserView(val)}} >{val.user.restName}</button>  
         {/* <button type="button" class="btn btn-light">{val.user.restName}</button> */}
           </Card.Title>
         {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content.
         </Card.Text> */}
         {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
      </Card>

      


    )  
})      
}
     </div>
    
    )
  }

  searchFun(e){
    console.log(e)
    const {allRests,search}=this.state
    // this.setState({search:e})
    
    allRests.filter((val,inx)=>{
      if(val.user.restName.substr().toLowerCase()==e.substr().toLowerCase())
      return(

        <Card className="bg-light text-black" style={{boxShadow:'0px 0px 10px gray',height:'60px',width:'700px',color:'black',marginBottom:'20px'}} >
        {/* <Card.Img src={res1} alt="Card image" style={{height:'150px',width:'500px', filter: 'blur(0.5px)'}} /> */}
        <Card.ImgOverlay>
       <Card.Title>
         <button style={{backgroundColor:'transparent',border:'0px',color:'#1044d1'}} onClick={()=>{this.gotoRestUserView(val)}} >{val.user.restName}</button>  
         {/* <button type="button" class="btn btn-light">{val.user.restName}</button> */}
           </Card.Title>
         {/* <Card.Text>
          This is a wider card with supporting text below as a natural lead-in to
          additional content.
         </Card.Text> */}
         {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
        </Card.ImgOverlay>
      </Card>

      )


    })

  }
 
 
 
  render() {
    
    return (
     <div className='row'>
       <div className='col-3'>

       </div>

       <div className='col-12'>
         <div className='col-10'>
                  <h1>Resturants</h1>
                 </div>
                 
                  <div className=''>
                    <MDBInput
                    label="Your search"
                    icon="search"
                    group
                    type="search"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.search}
                    onChange={(e)=>{this.searchFun(e.target.value)}}
                    />
                  </div>
                  <div className='col'>

                  </div>
                {
              !this.state.allCatsBool &&
                <button onClick={()=>this.setState({allCatsBool:true})} className='btn btn-outline-warning'>Go Back</button>
                }

       { this.state.allCatsBool && this.renderLists()}
       {this.state.allCatsBool && this.searchFun()}
       {/* {this.renderLists()} */}
       { !this.state.allCatsBool && <RestUserHomeView />}

     
       </div>
       

       <div className='col-0'>

       </div>
     </div>
    )
  }
}


 class Restaurants extends Component {

  constructor(){
    super()
    this.state={
      search:'',
    }
  }
  render() {
    return (
      <div>

        <div className='row'>
                 {/* <div className='col-5'>
                  <h1>Resturants</h1>
                 </div>
                 
                  <div className='col-5'>
                    <MDBInput
                    label="Your search"
                    icon="search"
                    group
                    type="search"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.search}
                    onChange={(e)=>this.setState({search:e.target.value})}
                    />
                  </div>
                  <div className='col'>

                  </div> */}
                  <ResList />
        </div>
      
      </div>
    )
  }
}


class MyRequests extends Component {
  constructor(){
    super()
    this.state={
      userReqsArr:[],

    }
  }

  async componentDidMount(){
    let res=await userReqsViewFun()
  // this.state.userReqsArr.push(res)
    this.setState({userReqsArr:res})

    console.log(res)


  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
 
 
        <MDBCol className='row' style={{marginBottom:'30px'}}>
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
        <h1>Pending Requests</h1>
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
  // this.state.userReqsArr.push(res)
    this.setState({userReqsArr:res})

    console.log(res)


  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
 
 
        <MDBCol className='row' style={{marginBottom:'30px'}}>
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
  // this.state.userReqsArr.push(res)
    this.setState({userReqsArr:res})

    console.log(res)


  }

  renderRestHome(){
  
console.log('prob',this.state.userReqsArr)
    return(
      <div className='row'>
        {
    this.state.userReqsArr.map((val,inx)=>{
     console.log(val)
     
     return(
    
 
 
        <MDBCol className='row' style={{marginBottom:'30px'}}>
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
          <Tab icon={<PersonPinIcon />} aria-label="Person" />
          {/* <Tab icon={<HelpIcon />} aria-label="Help" /> */}
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" />

     
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer> <Restaurants /></TabContainer>}
      {value === 1 && <TabContainer><MyRequests /></TabContainer>}
      {value === 2 && <TabContainer><InProgress /></TabContainer>}
      {value === 3 && <TabContainer><Delivered /></TabContainer>}
      
    </div>
  );
}






 class userHome extends Component {

    constructor(){
        super();
        this.state={

        }
    }

     

   async logOutUser(){

  
    try{
      
      var res =await logOutFun()
      console.log(res)
      if(res){
        localStorage.setItem('selectedRestData',null)
        }
       


    } 
    catch{
        console.log('logout error')

    }
    finally{
      this.props.history.push('/LogIn')
    }

}

  
    render() {

      

        return (
            <div>
            <button onClick={()=>{this.logOutUser()}} className='btn btn-outline-danger' >Log Out</button>
          
             <ScrollableTabsButtonPrevent />
           

          
           

           


        

            
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

export default  connect(mapStateToProps,mapDispatchToProps)(userHome);

