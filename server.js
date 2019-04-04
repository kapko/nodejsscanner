const express = require('express');
const path = require('path');
const app = express();
const staticRoot = __dirname;  

app.use(express.static(path.join(__dirname, './templates/')));

app.set('port', (process.env.PORT || 3000));  

app.use(express.static(staticRoot));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.listen(app.get('port'), function() {  
    console.log('app running on port', app.get('port'));
});
