
import Dummy from '../client/pages/dummyPage';
import App from '../client/pages/App';
import NotFound from '../client/pages/notFoundPage'

export default[
    {
       ...App,
        path:"/",
        exact:true

    },
    {
        path:"/dummy",
        ...Dummy
    },
    {
        ...NotFound
    }
]

// export default[

        
//     {
//         ...App,

//         routes:[

//             {
//                 path:"/dummy",
//                 ...Dummy,
                
//             }
//         ]

//     }


// ]


// export default ()=>{


//     const routes=[

    
//         {
//             ...App,

//             routes:[

//                 {
//                     path:"/",
//                     ...App,
//                     exact:true
//                 },
//                 {
//                     path:"/dummy",
//                     ...Dummy
//                 }
//             ]

//         }

//     ]


//     // return(

//     //     <React.Fragment>

//     //       <Route path="/" exact component={App}/>
          
//     //       <Route path="/dummy" component={Dummy} />
         
//     //     </React.Fragment>

//     // )

//     return routes;
// }
