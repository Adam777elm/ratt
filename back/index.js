// Connexion à MongoDB
require("./db");

const express = require("express");

const app = express();

// Middleware pour lire JSON
app.use(express.json());

// Route test
app.get("/", (req, res) => {
    res.send("Backend Node.js + MongoDB fonctionne !");
});

// Exemple route API
app.get("/api/test", (req, res) => {
    res.json({
        message: "API fonctionne correctement"
    });
});

// Port serveur
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Serveur lancé sur http://localhost:" + PORT);
});