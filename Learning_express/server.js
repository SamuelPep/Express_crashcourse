//importing express object (from node.js) for our program to use
//will import the object as "express"
const express = require('express')
const path = require('path')


//creating instance of express object 
const app = express();



//bring in "path module"
const path = re
//when someone 
//not understanding the second parameter can we give it another 
//argument and it would still work? 
app.get('/', (req,res) => {
    //when sending data back via a GET request
    //can accept HTML and 
    //when client requests / route, will 
    //return file back to client? 
    res.sendFile(path.join(__dirname, public, 'index.html' )
});

//specify the port number for our server
//second parameter for app.listen will display a string in our terminal  
app.listen(8001, () => console.log('Server is running, just looking for practice!'));

