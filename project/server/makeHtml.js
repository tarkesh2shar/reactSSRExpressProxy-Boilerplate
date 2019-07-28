import React from 'react';
import {renderToString} from 'react-dom/server'

import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config'
import Routes from './Routes';
import {StaticRouter} from 'react-router-dom';
import serialize from 'serialize-javascript';




export default(store,req,context)=>{

    // const reactHTML=renderToString(
    
    //     <Provider store={store}>

    //         <App/>

    //     </Provider>
    
    // );

 
    
    const reactHTML=renderToString(
    
        <Provider store={store}>

            <StaticRouter location={req.path} context={context}>

               <React.Fragment>

                        {renderRoutes(Routes)}
                   
               </React.Fragment>

            </StaticRouter>

        </Provider>
    
    );


    return `

            <html>
            <head>
            
            </head>
            <body>
            <div id="root">${reactHTML}</div>
            <script>
               window.INITIAL_STATE= ${serialize(store.getState())}
            </script>
            <script src="bundle.js"></script>

            </body>
        </html>
    
    `


}