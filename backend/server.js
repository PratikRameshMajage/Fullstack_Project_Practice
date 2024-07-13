import express from 'express';

const app = express();

app.get('/', function(req, res){
    res.send("hello Duniya..");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log(`server is running at http://localhost:${PORT}`);
});