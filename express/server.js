console.log("i am server and i am alive")

const express = require("express");
const app = express()

const userRouter = require("./routes/users")
app.use("/users", userRouter)

app.set("view engine", "ejs");

// node template view engines: pug jade ejs handlebars

app.get("/", (req, res) => {
    console.log("im showing")
    // res.download("./server.js")
    // res.json({message: "error"})
    res.render("index", {name: "victoria"})

   
});



app.listen(3000)