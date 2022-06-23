const express = require("express");
const proxy = require('express-http-proxy');
const axios = require('axios').default;
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;


app.use(cors());
app.use(express.json());

app.use(function (req, res, next) {
    console.log("Request:", req.path);
    next();
});


app.use('/user', proxy('http://localhost:8001'));
app.use('/book', proxy('http://localhost:8002'));

app.listen(PORT, async () => {
	console.log(`Server has started on port: ${PORT}`);
});



// app.get('/user/get', (req, res) => {
//     // userServiceProxy(req, res);
//     axios.get('http://localhost:8001/user/get', {
//         body: req.body
//     })
//     .then(function (response) {
//         console.log('api gw user/get basarili');
//         console.log('api gw user/get : ', response);

//         // res.send(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });

// app.post('/user/signup', (req, res) => {
//     axios.post('http://localhost:8001/signup', {
//         body: req.body
//     })
//     .then(function (response) {
//         console.log('api gw user/signup basarili');
//         console.log('api gw user/signup : ', response);

//         // res.send(response);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });

// app.post('/user/login', (req, res) => {
//     axios.post('http://localhost:8001/login', {
//         body: req.body
//     })
//     .then(function (response) {
//         console.log('api gw user/login basarili');
//         console.log(response.data);
//         res.send(response.res);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });

// app.post('/user/logout', (req, res) => {
//     axios.post('http://localhost:8001/logout', {
//         body: req.body
//     })
//     .then(function (response) {
//         console.log('api gw user/logout basarili');
//         res.send(response.res);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });

// app.post('/user/delete', (req, res) => {
//     axios.post('http://localhost:8001/delete', {
//         body: req.body
//     })
//     .then(function (response) {
//         console.log('api gw user/delete basarili');
//         res.send(response.res);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
// });