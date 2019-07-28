import express from 'express';
import "babel-polyfill"
import renderer from '../server/makeHtml';
import ServerStore from './makeStore';
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy';
import Routes from '../server/Routes';


const app=express();

//Using proxy for intial page renderer tricking api server to think this server is browser//
app.use('/api', proxy('http://react-ssr-api.herokuapp.com',{
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host']="localhost:3000";
        return opts;
    }
}))

app.use(express.static('public'));
 


app.get('*',(req,res)=>{

    const store=ServerStore(req)


    const matchedRoute=matchRoutes(Routes,req.path);


   const promiseArray= matchedRoute.map((r)=>{

    return r.route.loadData?r.route.loadData(store):null

    }).map(promise=>{
        if(promise){
           
            return new Promise((resolve,reject)=>{

                promise.then(resolve).catch(resolve);
            })
        }
    })



 Promise.all(promiseArray).then(()=>{
    const context={};

    const htmlcontent= renderer(store,req,context) 
    if(context.url){
        return res.redirect(301,context.url)
    }
    if(context.notFound){
        res.status(404);
    }

    res.send(htmlcontent);
 })

    


})
 


app.listen(3000,()=>{

    console.log("listening to port 3000");
})


 

