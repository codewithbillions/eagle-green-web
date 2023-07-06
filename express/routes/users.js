const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

module.exports = router

// ejs https://youtu.be/XvOudqRsVW0

// pug https://youtu.be/ILviQic0c8g

// handlebars https://youtu.be/SfQFoMOd_ng



// https://youtu.be/qwfE7fSVaZM