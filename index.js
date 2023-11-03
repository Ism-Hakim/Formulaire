import express from "express";
import 'dotenv/config';

const port = process.env.PORT || 3400;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public')); 

app.listen(port, () => {
    console.log(`Le serveur est en écoute sur http://localhost:${port}`);
});
