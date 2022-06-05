const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;


app.use(cors());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    console.log("Request:", req.path);
    next();
});

app.listen(PORT, async () => {
    await db.ConnectDB();
	console.log(`Server has started on port: ${PORT}`);
});





app.post("/getUser", async (req, res) => {
    // console.log("/getUser : ", result);
    // res.send(result);

});
