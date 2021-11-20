const getSlot= require('./getSlot');
const express = require('express');

const app = express();

// static content access
app.use(express.static('static'))



//handling dynamic access
app.get('/admin', (req, res) => {
    res.redirect("admin.html");
});
app.get('/guest', (req, res) => {
    res.redirect("guest.html");
});
app.get('/previous', (req, res) => {

    let content = getTimes();
    res.send(content);
});
app.listen(80);
