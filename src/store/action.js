


// const restHomeTog = (val) => {
//     console.log(val)    
//     return {
//             type: "REST_HOME_TOG",
//             data: val==undefined ? true : val

//         }
//     }



const restSignTog = (val) => {
    console.log(val)    
    return {
            type: "REST_SIGN_TOG",
            data: val

        }
    }

 const userLogInBool = (val) => {
    console.log(val)    
    return {
            type: "USER_LOGIN_BOOL",
            data: val

        }
    }

    const restHomeTog = (val) => {
        console.log(val)    
        return {
                type: "REST_HOME_TOG",
                data: val==undefined ? true : val
    
            }
        }

    const signLogTog = (val) => {
        // if(val==undefined || val==null){
        //     val=true
        // }
        
        return {
            type: "SIGN_LOG_TOG",
            data: val 
        }
    }


    const dishBool = (val) => {
        console.log(val)    
        return {
                type: "DISH_BOOL",
                data: val
    
            }
        }


export{userLogInBool,signLogTog, restHomeTog,restSignTog,dishBool}
// const update_user = (user) => {
//     return {
//         type: "SET_USER",
//         data: user
//     }
// }

// const checkFun=(check)=>{
//    return{
//     type:'CHECK',
//     data:check
//    }

// }

// const remove_user = () => {
//     return {
//         type: "REMOVE_USER"
//     }
// }

// const keepLogin=()=>{
//     return{
//         type:'KEEP_LOGIN'

//     }
// }

// export {
//     update_user,
//     remove_user,
//     checkFun,
    
// }