// Charger les variables d'environnement (.env)
require("dotenv").config();

// Connexion à MongoDB
require("./db");

const express = require("express");

const app = express();

// Middleware pour lire le JSON
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

// Utiliser le PORT depuis .env
const PORT = process.env.PORT || 3000;

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});