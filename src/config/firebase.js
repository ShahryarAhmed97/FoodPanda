import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyB8p7917au3-Nfudds5_po0iZyM7RJHgGc",
    authDomain: "database-shary.firebaseapp.com",
    databaseURL: "https://database-shary.firebaseio.com",
    projectId: "database-shary",
    storageBucket: "database-shary.appspot.com",
    messagingSenderId: "912855744314",
    appId: "1:912855744314:web:ad552a8f4f92d94d"
  };

  

firebase.initializeApp(firebaseConfig);



function signUpFun(user){

  firebase.auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res)=>{


            let userUid = firebase.auth().currentUser.uid;
                      let userObj = {
                        userUid,
                        user,
                        userType:'loginUser'
                        // email:user.email,
                        // password:user.password,
                      };
                      firebase
                        .database()
                        .ref("allusers/" + userUid)
                        .set(userObj)
                        .then(success => {
                          alert(success.message)
                         
                        })
                        .catch(error => {
                          var errorMessage = error.message;
                          alert(errorMessage);
                        
                        });

          })


}




function restSignUp(user){
  alert('hbhbhj')

  firebase.auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res)=>{


            let userUid = firebase.auth().currentUser.uid;
                      let userObj = {
                        userUid,
                        user,
                        userType:'loginRest'
                      //   email:user.email,
                      //   password:user.password,
                      };
                      firebase
                        .database()
                        .ref("allRests/" + userUid)
                        .set(userObj)
                        .then(success => {
                          alert(success.message)
                         
                        })
                        .catch(error => {
                          var errorMessage = error.message;
                          alert(errorMessage);
                        
                        });

          })


}

function logInFun(user){

  return new Promise((resolve,reject)=>{

  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
  .then((success)=>{
    // alert('Rest')
    let userUid = firebase.auth().currentUser.uid;


    if(user.userType=='loginRest'){

      firebase.database().ref("allRests/")
      .once('value')
      .then((data)=>{
        var users=data.val()
        console.log(users)

        for(var k in users){
          console.log(k==userUid)
          if(k==userUid){
            console.log(success)
            localStorage.setItem('userUid',userUid)
            localStorage.setItem('currentUserData',JSON.stringify(user))
            resolve(success)

          }

        }
          

    })
  
    
  }

    if(user.userType=='loginUser'){

      firebase.database().ref("allusers/")
      .once('value')
      .then((data)=>{
        var users=data.val()
        console.log(users)

        for(var k in users){
          if(k==userUid){
            console.log(success)
            localStorage.setItem('userUid',userUid)
            localStorage.setItem('currentUserData',JSON.stringify(user))

            resolve(success)

          }

        }
     
  
      })
   

    }
   
  
   


  })
  .catch(function(error) {
    // Handle Errors here.
        reject({
          message:'something went wrong '
        })
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...func
  });

})

}





function logOutFun(){

  return new Promise((resolve,reject)=>{
  firebase.auth().signOut().then(function(suc) {

    localStorage.setItem('userUid',null)
    localStorage.setItem('currentUserData',null)
    resolve(suc)
  }).catch(function(error) {

    reject({
      message:'something went wrong '
    })
     
  })
  
})

}


function restListsFun(){

  return new Promise((resolve,reject)=>{
    firebase.database().ref('allRests/')
    .on('value',(data)=>{
      let  allRests=data.val()
      let allRestArr=[]

      for(var k in allRests){
        allRestArr.push(allRests[k])

      }

      resolve(allRestArr)

    })
    
  })



}

function newDishCat(dishObj){
  return new Promise((resolve,reject)=>{

   let userUid=localStorage.getItem('userUid')
    firebase.database().ref(`allRests/${userUid}/dishCats/`)
    .push(dishObj)
    .then((sc)=>{
      resolve(sc)
      
    })
    .catch((er)=>{
      reject({
        message:'not Properly stored '
      })
    })
    
    
  })

}


function restAllDishView(){

  return new Promise((resolve,reject)=>{

  
let userUid=localStorage.getItem('userUid')
  firebase.database().ref(`allRests/${userUid}/dishCats/`)
  .on('value',(data)=>{
    let dishes=data.val()
    let dishesArr=[]

    for(var k in dishes){
      dishesArr.push(dishes[k])

    }

    resolve(dishesArr)


  })

})
}




function userDishView(){

  return new Promise((resolve,reject)=>{

    let d=localStorage.getItem('selectedRestData')
    let dat=JSON.parse(d)
    console.log('dat',dat.userUid)

// let userUid=localStorage.getItem('userUid')
  firebase.database().ref(`allRests/${dat.userUid}/dishCats/`)
  .on('value',(data)=>{
    let dishes=data.val()
    let dishesArr=[]

    for(var k in dishes){
      dishesArr.push(dishes[k])

    }

    resolve(dishesArr)


  })

})

}


function userReqFun(val){
  
  return new Promise((resolve,reject)=>{
    let reqData=JSON.parse(localStorage.getItem('selectedRestData'))

    let userUid=localStorage.getItem('userUid')
    let userData= JSON.parse(localStorage.getItem('currentUserData'))
    
       val.userUid=userUid
      //  val.reqData=reqData
       val.restUid=reqData.userUid

     firebase.database().ref(`allPendingReq/${reqData.userUid}/${userUid}/`)
     .push(val)
     .then((sc)=>{
      firebase.database().ref(`allPendingReq/${userUid}/${reqData.userUid}/`)
      .push(val)
      .then((sc1)=>{

        resolve(sc)
      })
      .catch((er1)=>{
        reject({
          message:'Internal Error '
        })

      })

       
     })
     .catch((er)=>{
       reject({
         message:'Internal Error '
       })
     })
     
     
   })



}
//also used for restview
function userReqsViewFun(){


  return new Promise((resolve,reject)=>{

    let userUid=localStorage.getItem('userUid')
   
   
    firebase.database().ref(`allPendingReq/${userUid}/`)
    .on('value',(da)=>{

      let data=da.val()
      let dishesArr=[]

      for(var k in data){
        console.log(data[k])
        console.log(k)
        
        for(var k1 in data[k]){
       console.log(k1)
       data[k][k1].pushId=k1

            dishesArr.push(data[k][k1])
          

        }
  
      }
      console.log(dishesArr)
  
      resolve(dishesArr)


    })
      

       
    
     
   })



}



function sendInProgFun(val){

  return new Promise((resolve,reject)=>{

    firebase.database().ref(`allInProgReq/${val.restUid}/${val.userUid}/${val.pushId}/`)
    .set(val)
    .then((sc)=>{
     firebase.database().ref(`allInProgReq/${val.userUid}/${val.restUid}/${val.pushId}/`)
     .set(val)
     .then((sc1)=>{

      firebase.database().ref(`allPendingReq/${val.restUid}/${val.userUid}/${val.pushId}`)
      .remove()
      .then((sc2)=>{

        firebase.database().ref(`allPendingReq/${val.userUid}/${val.restUid}/`)
        .once('value')
        .then((da)=>{
          let data=da.val()
          for(var k in data){
            if(data[k].dshName==val.dshName && data[k].restUid==val.restUid && data[k].userUid==val.userUid){
              firebase.database().ref(`allPendingReq/${val.userUid}/${val.restUid}/${k}`)
              .remove()
              .then((sc3)=>{
                
                resolve(sc) ///resolve yahan
              })



            }
          }



        })


      })



     })
     .catch((er1)=>{
       reject({
         message:'Internal Error '
       })

     })

      
    })
    .catch((er)=>{
      reject({
        message:'Internal Error '
      })
    })
    
    




  })

}


function userInProgView(){

  return new Promise((resolve,reject)=>{

    let userUid=localStorage.getItem('userUid')
   
   
    firebase.database().ref(`allInProgReq/${userUid}/`)
    .on('value',(da)=>{

      let data=da.val()
      let dishesArr=[]

      for(var k in data){
        console.log(data[k])
        console.log(k)
        
        for(var k1 in data[k]){
       console.log(k1)
       data[k][k1].pushId=k1

            dishesArr.push(data[k][k1])
          

        }
  
      }
      console.log(dishesArr)
  
      resolve(dishesArr)


    })
      

       
    
     
   })


}



function sendDeliveredFun(val){

  return new Promise((resolve,reject)=>{

    firebase.database().ref(`allDeliveredReq/${val.restUid}/${val.userUid}/${val.pushId}/`)
    .set(val)
    .then((sc)=>{
     firebase.database().ref(`allDeliveredReq/${val.userUid}/${val.restUid}/${val.pushId}/`)
     .set(val)
     .then((sc1)=>{

      firebase.database().ref(`allInProgReq/${val.restUid}/${val.userUid}/${val.pushId}`)
      .remove()
      .then((sc2)=>{

        firebase.database().ref(`allInProgReq/${val.userUid}/${val.restUid}/`)
        .once('value')
        .then((da)=>{
          let data=da.val()
          for(var k in data){
            if(data[k].dshName==val.dshName && data[k].restUid==val.restUid && data[k].userUid==val.userUid){
              firebase.database().ref(`allInProgReq/${val.userUid}/${val.restUid}/${k}`)
              .remove()
              .then((sc3)=>{
                
                resolve(sc) ///resolve yahan
              })



            }
          }



        })


      })



     })
     .catch((er1)=>{
       reject({
         message:'Internal Error '
       })

     })

      
    })
    .catch((er)=>{
      reject({
        message:'Internal Error '
      })
    })
    
    




  })

}




function userDeliveredView(){

  return new Promise((resolve,reject)=>{

    let userUid=localStorage.getItem('userUid')
   
   
    firebase.database().ref(`allDeliveredReq/${userUid}/`)
    .on('value',(da)=>{

      let data=da.val()
      let dishesArr=[]

      for(var k in data){
        console.log(data[k])
        console.log(k)
        
        for(var k1 in data[k]){
       console.log(k1)
       data[k][k1].pushId=k1

            dishesArr.push(data[k][k1])
          

        }
  
      }
      console.log(dishesArr)
  
      resolve(dishesArr)


    })
      

       
    
     
   })


}






export { signUpFun ,logInFun,logOutFun,restSignUp,restListsFun,
  newDishCat,restAllDishView,userDishView,userReqFun,userReqsViewFun
  ,sendInProgFun,userInProgView,sendDeliveredFun,userDeliveredView

}









