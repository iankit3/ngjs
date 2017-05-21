var path = require('path');
var webpack =require('webpack');


module.exports = {
   context: __dirname, 
   entry: './index.js',
   output:{
       path: __dirname + "/build",
       filename: "bundle.js"
   },
   devServer: {
       port: 8000,
       host: "localhost",
       historyApiFallback: {
          index: __dirname + "index.html"
       }
   }
}