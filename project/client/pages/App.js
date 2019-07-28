import React from 'react'
import {fetchCurrentUser} from '../../store/actions'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


 function App(props) {

    console.log("my auth status is Auth",props.auth)
    return (
        <div>
            I am an App Component ! for now !

            <button onClick={()=>console.log("Button Clickedd!")}>
                Click me !
            </button>

         

            <div>
                <Link to="/">React Home SSR  </Link>
                <Link to="/dummy"> DUMMY</Link>

                {props.auth?(
                <a href="/api/logout">
                    Logout
                </a>):
                ( <a href="/api/auth/google">
                    Login
                </a>)
            }

            </div>
 
           
        </div>
    )
}

function mapStateToProps({auth}){
    return {auth};
}
export default {
    component:connect(mapStateToProps)(App),
    loadData:({dispatch})=>dispatch(fetchCurrentUser())
}
 