const express = require("express");
const app = express();

// app.get("/",(req,res)=>{
//     res.send(" <h1> hello aziz<h1/>")
// })

const authMiddleware = (req, res, next) => {
  const auth = false;
  if (auth) {
    next();
  } else {
    res.send("you are not authorized");
  }
};
app.use(authMiddleware);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./static/home.html ");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "./static/contact.html ");
});

app.get("/style.css", (req, res) => {
  res.sendFile(__dirname + "./static/style.css ");
});

app.use(express.static(__dirname + "/static"));

const PORT = 5000;
app.listen(PORT, () => console.log("listening en port:", PORT));
