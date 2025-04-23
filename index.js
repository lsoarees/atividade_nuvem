const express = require("express"); // Importa o módulo Express
const app = express(); // Inicializa o Express

// Rota para La Liga
app.get("/LaLiga", function(req, res) {
    res.send("<h1>LaLiga: Principal capeonato de futebol da Espanha.</h1>");
});

// Rota para Premier League
app.get("/PremierLeague", function(req, res) {
    res.send("<h1>Premier League: Liga de futebol mais prestigiada da Inglaterra.</h1>");
});

// Rota para Ligue 1
app.get("/Ligue1", function(req, res) {
    res.send("<h1>Ligue 1: Campeonato de futebol profissional da França.</h1>");
});

// Inicia o servidor
app.listen(process.env.PORT ?? 3000, function(erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor.");
    } else {
        console.log("Servidor rodando com sucesso!");
    }
});

