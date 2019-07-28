
import {DUMMY,FETCH_CURRENT_USER} from './type'


export const dummyFetch=()=>async (dispatch,getState,api)=>{

  
  const res= await api.get("/users");

  dispatch({
      type:DUMMY,
      payload:res
  })
}
export const fetchCurrentUser=()=>async (dispatch,getState,api)=>{

  const res=await api.get('/current_user')

  dispatch({
    type:FETCH_CURRENT_USER,
    payload:res

  })
}