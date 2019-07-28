
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

import Reducers from '../store';

import axios from 'axios';



export default (req)=>{
   // /Using proxy for intial page renderer tricking api server to think this server is browser//
  //!masking rendering server as a browser!
   const axiosInstance=axios.create({

        baseURL:"http://react-ssr-api.herokuapp.com",
        headers:{
            cookie:req.get('cookie') || ""
        }
    })
    

    const store=createStore(Reducers,{},applyMiddleware(thunk.withExtraArgument(axiosInstance)));


    return store;
}


