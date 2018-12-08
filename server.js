const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/cst438-AngularProj'));

app.get('/*', function(req,res) {
  res.sendFile(path.join('./dist/cst438-AngularProj/index.html'));
});

res.sendFile('index.html', { root: __dirname });
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
