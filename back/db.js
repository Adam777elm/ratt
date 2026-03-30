const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/rattDB")
.then(() => {
    console.log("MongoDB connecté !");
})
.catch((err) => {
    console.log("Erreur MongoDB :", err);
});