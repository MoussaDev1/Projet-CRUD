const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors"); // Importer le module CORS
const port = 5000;
const dotenv = require("dotenv").config();
const app = express();

// Connection à la base de données
connectDB();

// Middleware pour autoriser CORS
app.use(cors()); // Permettre toutes les origines. Tu peux le configurer pour des origines spécifiques si besoin.

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("Le serveur a démarré au port " + port));
