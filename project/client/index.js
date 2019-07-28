import React from 'react';
import ReactDOM from 'react-dom';

import "babel-polyfill"
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import Reducer from '../store';

import {BrowserRouter} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import axios from 'axios';

import Routes from '../server/Routes';

const axiosInstance=axios.create({
    baseURL:"/api"
});
  
const store=createStore(Reducer,window.INITIAL_STATE,applyMiddleware(thunk.withExtraArgument(axiosInstance)))


ReactDOM.hydrate(

    <Provider store={store}>

        <BrowserRouter>

            
                <React.Fragment>

                {renderRoutes(Routes)}
                
                </React.Fragment>

        
        </BrowserRouter>


    </Provider>


,document.querySelector("#root"));





