const update_user = (user) => {
    return {
        type: "SET_USER",
        data: user
    }
}

const checkFun=(check)=>{
   return{
    type:'CHECK',
    data:check
   }

}

const remove_user = () => {
    return {
        type: "REMOVE_USER"
    }
}

const keepLogin=()=>{
    return{
        type:'KEEP_LOGIN'

    }
}

export {
    update_user,
    remove_user,
    checkFun,
    
}