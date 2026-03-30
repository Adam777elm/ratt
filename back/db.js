const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB connecté !");
})
.catch((err) => {
    console.error("Erreur MongoDB :", err);
});