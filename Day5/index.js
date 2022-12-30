    const express = require('express');
    const app = express()
    const port = 3000

    
    app.use("/public", express.static(__dirname + "/day5"));

    app.listen(port, function(){
        console.log('http://localHost:3000')
    })

    app.get("/home", function (req, res) {
    //   res.send("<h1>home</h1>");
        res.sendFile(__dirname+"/index.html")
    });

    app.get('/',function(req,res){
        res.send("메인 화면")
    })

    