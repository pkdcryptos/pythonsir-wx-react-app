const initstate = {
    list: [],
    listloading:true,
    currentUser: {},
}


function user(state = initstate,{type,payload}){

    switch(type){
        case "currentUser":
            return {
                ...state
            }
        case "saveCurrentUser":
            return {
                ...state,
                currentUser:payload.$body
            }
        case 'changeNotifyCount':
        return {
            ...state,
            currentUser: {
              ...state.currentUser,
              notifyCount: payload,
            },
          };
        case 'listload':
          return {
              ...state,
            listloading:payload,
          }
        case 'userList':

            return {
                ...state,
                list:payload,
            }  

        default:
            return state
    }



}

export default user;