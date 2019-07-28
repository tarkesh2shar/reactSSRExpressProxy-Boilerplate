import {DUMMY} from '../actions/type'

export default function (state=[],action) {

  console.log("calling dummy reducers now!",action);

  switch(action.type){
      case DUMMY:
          return action.payload.data;
    default :
    return state;
  }

} 