import * as firebase from 'firebase';
import 'firebase/firestore';



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

function signUpFun(){

  firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((res)=>{


            let userUid = firebase.auth().currentUser.uid;
                      let userObj = {
                        userUid,
                        email,
                        password,
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
function logInFun(){

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then()
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}


export { signUpFun ,logInFun, };
// function logSignFun(email, password) {

 
  
    //  firebase.auth().createUserWithEmailAndPassword(email,password)
  //  
    //       alert("Successfully login");
  //       let userUid = firebase.auth().currentUser.uid;
  //       firebase.database().ref("allusers/" + userUid)
  //       .once('value',(data)=>{
  //         var userDetails=data.val();
  //         let userObj = {
         
  //             visitCount:userDetails.visitCount+1, 
  //           };
  //           localStorage.setItem('visits',userObj.visitCount)
      
  //           firebase
  //             .database()
  //             .ref("allusers/" + userUid)
  //             .update(userObj)
  //             .then(success => {
               
  //             })
  //             .catch(error => {
  //               var errorMessage = error.message;
  //               alert(errorMessage);
  //             });
      
      
      
  //           }).catch((err)=>{
  //               alert(err.message)
      
  //           })
      
  
  //       })
      
  //     .catch(error => {
          
  //         alert("you have not signup yet you are about to signup  ");
  //         alert(error.message);
  
  //       firebase
  //         .auth()
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(res => {
  //           let userUid = firebase.auth().currentUser.uid;
  //           let userObj = {
  //             userUid,
  //             email,
  //             password,
  //             visitCount: 0,
  //           };
  //           firebase
  //             .database()
  //             .ref("allusers/" + userUid)
  //             .set(userObj)
  //             .then(success => {
               
  //             })
  //             .catch(error => {
  //               var errorMessage = error.message;
  //               alert(errorMessage);
              
  //             });
  //         })
  //         .catch(err => {
  //           alert(err);
  //         });
  //     });
  
      
      
  
   
  // }
  
  
  
  
  
  
    // function getUsers(){
    //     firebase.database().ref("allusers/")
    //     .once('value',(data)=>{
    //         let allUsers=data.val()
    //         console.log(allUsers)
    // localStorage.setItem('allUsers',JSON.stringify(allUsers))
    //     })
    
    // }