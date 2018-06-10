// creating express environment variables
const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");

// creating express app
const app = express ()

//creating middleware to handle servig the app
app.use("/", serveStatic ( path.join (__dirname, 'dist')))

// creating default port to serve the app on 
const port = process.env.PORT || 5000
app.listen(port)

console.log('Server started on port ' + port)