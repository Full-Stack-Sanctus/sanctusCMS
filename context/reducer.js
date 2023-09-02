export const initialState = {
    user : null,
    authService : 'LOGIN'
}




export function AuthReducer (state = initialState, {payload , type }) {
  switch (type) {
    case "SET_USER":
    return { ...state, 
       user : payload
    } ;
    case "LOGOUT_USER":
    return { ...state, 
       user : null
    } ;
    case "SIGNUP_USER":
    return { ...state, 
      authService  : 'SIGNUP'
    } ;
    case "LOGIN_USER":
    return { ...state, 
      authService  : 'LOGIN'
    } ;

  default:
    return state
  }
}

