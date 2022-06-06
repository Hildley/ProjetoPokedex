require("dotenv").config;

let message = "";

const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  setTimeout(() => {
    message = "";
  }, 1000);
  res.render("index",{message});
});

app.post('/cadastra' , (req, res) =>{
  const {nome, tipo, imagem} = req.body;
  message = `Parabens, Voce cadastrou o pokemon ${nome} com sucesso`;
  res.redirect("/", {nome: nome, tipo: tipo, imagem: imagem});
})

app.listen(3000)