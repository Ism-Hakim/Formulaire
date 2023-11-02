// importation express
import { Express } from "express";
// importaion dotenv
import 'dotenv/config'

import router from "./app/router.js";

import express from "express";
import 'dotenv/config';

const port = process.env.PORT || 3400

const app = express()

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.listen(port, () => {
    console.log(`serveur en écoute sur http://localhost:${port}`)
})