import React from 'react'

 function notFoundPage({staticContext ={} }) {

    staticContext.notFound=true;
    return (
        <div>

            <h1>Oops , Route not Found!</h1>
            
        </div>
    )
}


export default{
    component:notFoundPage
}
