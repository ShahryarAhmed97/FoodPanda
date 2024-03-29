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

// import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';






class RestUserHomeView extends Component {
  constructor(){
    super()
    this.state={
  
      allCatsBool:true,
      currentRestData:'',
      allDishes:[],
      search:'',
       result:[],

    }
  }

  //  useStyles = makeStyles(theme => ({
  //   root: {
  //     display: 'flex',
  //     justifyContent: 'center',
  //     flexWrap: 'wrap',
  //   },
  //   chip: {
  //     margin: theme.spacing(1),
  //   },
  // }));

 

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


searchChipsFun(cat){

  const {allDishes,search}=this.state
  // this.setState({search:e})
  console.log(cat)
  const result=allDishes.filter((val,inx)=>{
    console.log(val.dshCat.toLowerCase()==cat.toLowerCase())
    return val.dshCat.toLowerCase()==cat.toLowerCase()



  })
  this.setState({result,search:cat})


}

renderChipsFun(){
  const {allDishes} =this.state
// const distArr=[...new Set(allDishes)]
//  console.log('distrr',distArr)
  return(

    <div className='row ' style={{marginLeft:'30px',boxShadow:'0px 0px 10px grey',padding:'10px'}} >
      {
        allDishes.map((val,inx)=>{
          return(
       
        <div  onClick={()=>this.searchChipsFun(val.dshCat)}  style={{padding:'5px',height:'40px',width:'100px',marginLeft:'30px',border:'1px solid blue' ,borderRadius:'20px'}}>
          <b>

          {val.dshCat}
          </b>

        </div>
         

          
          )

        })
      }

    </div>

  )

  
}


 async reqOrderFun(val){
    let res =await userReqFun(val)
    console.log(res)
    alert('Requested Successfully ')


    
    // console.log(JSON.parse(localStorage.getItem('selectedRestData')))

  }
 
  searchFun(e){
    console.log(e)
    const {allDishes,search}=this.state
    // this.setState({search:e})
    
    const result=allDishes.filter((val,inx)=>{
      return val.dshName.substr(0,e.length).toLowerCase().indexOf(e.toLowerCase())!==-1 



    })
    this.setState({result,search:e})

  }
 
  renderRestHome(){

    const {allDishes,result,search}=this.state
    const showTable=result.length && search.length ? result : allDishes 
    console.log('all Dishes',result)
  

   return(
     <div className='row'>

      <div className='col-10'>
                          <MDBInput
                          label="Search by Dish Name"
                          icon="search"
                          group
                          type="search"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.search}
                          onChange={(e)=>this.searchFun(e.target.value)}
                          />
                        </div>
      {/* //chips DIV */}
        <div className='col-10' style={{height:'100px'}}>
          {
            this.renderChipsFun()
          }


         </div>
       
       {
showTable.map((val,inx)=>{
return(
 


   <MDBCol className='row' style={{marginBottom:'30px',marginLeft:'15px'}}>
     <MDBCard style={{ width: "18rem" }}>
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

     <div >
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
       search:'',
       result:[],
    
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
    
    const result=allRests.filter((val,inx)=>{
      return val.user.restName.substr(0,e.length).toLowerCase().indexOf(e.toLowerCase())!==-1 



    })
    this.setState({result,search:e})

  }
 
 
 
  render() {

    const {allRests,result,search}=this.state
    const showTable=result.length && search.length ? result : allRests 
 
  
    {console.log(result)}
    return (
     <div className='row'>
       
   <div className='col-12'>
                  <div className='col-10'>
                  <h1>Resturants</h1>
                 </div>

                 {

this.state.allCatsBool &&
                 
                  <div className='col-12'>
                    <MDBInput
                    label="Your search"
                    icon="search"
                    group
                    type="search"
                    validate
                    error="wrong"
                    success="right"
                    value={this.state.search}
                    onChange={(e)=>this.searchFun(e.target.value)}
                    />
                  </div>
                 }

                  
                 
                {
              !this.state.allCatsBool &&
                <button onClick={()=>this.setState({allCatsBool:true})} className='btn btn-outline-warning'>Go Back</button>
                }

      
    
       
  <div className=''>

         
{
  this.state.allCatsBool &&
  showTable.map((val,inx)=>{
    return(

  <Card className="bg-light text-black" style={{boxShadow:'0px 0px 10px gray',height:'60px',width:'900px',color:'black',marginBottom:'20px',marginLeft:'30px'}} >
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
    
        <div>

       
       { !this.state.allCatsBool && <RestUserHomeView />}
        </div>

     
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
    
 
 
        <MDBCol className='row' style={{marginBottom:'15px'}}>
      <MDBCard style={{ width: "15rem" }}>
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
    
 
 
        <MDBCol className='row' style={{marginBottom:'15px'}}>
      <MDBCard style={{ width: "15rem" }}>
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
    
 
 
        <MDBCol className='row' style={{marginBottom:'15px'}}>
      <MDBCard style={{ width: "15rem" }}>
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

  chip: {
    margin: theme.spacing(1),
  },
  root: {
    flexGrow: 1,
    width: '100%',
    // width: '500px',
    //chips
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    

    backgroundColor: theme.palette.background.paper,
  },
  card: {
    maxWidth: 345,
    // color:'blue',
    // maxWidth: 800,
    // padding:800,

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
          <Tab icon={<PersonPinIcon />} aria-label="Person" label='HOME' />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" label='My Requests' />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" label='In Progress' />
          <Tab icon={<ShoppingBasket />} aria-label="Shopping" label='Delivered' />

     
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
   

//     componentWillUnmount(){

//       console.log('unmount')
     
//           this.props.history.push('/UserHome')
       

       

// }
   

     

   async logOutUser(){

  
    try{
      
      var res =await logOutFun()
      console.log(res)
      this.props.userLogInBool(false)
      localStorage.setItem('selectedRestData',null)

      this.props.history.push('/LogIn')
      if(res){

        }
       


    } 
    catch{
        console.log('logout error')

    }
    finally{
      
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
        user: state.user,
        userLogInBool:state.userLogInBool
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

