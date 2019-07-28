const path=require('path')

const merge=require('webpack-merge');

const baseConfig=require('./webpack.base');

const config={
    mode: 'development',
    entry:"./project/client/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"public")
    }
}

module.exports= merge(baseConfig,config)