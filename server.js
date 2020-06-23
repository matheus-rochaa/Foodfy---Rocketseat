const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const cardsRecipe = require("./data")

// Configurando o nunjucks
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// Rota 'Home - Index - "/" '
server.get("/", function(req, res) {
    return res.render("home",  { items: cardsRecipe }) // Estou criando um atributo(var) 'item' e inserindo nele os 'cards de Receitas'
})

// Rota 'About'
server.get("/about", function(req, res) { 
    return res.render("about")
})

// Rota 'Recipe'
server.get("/recipe", function(req, res) { 
    return res.render("recipe", { items: cardsRecipe })
})

// Rota description recipe - TESTANDO
server.get("/recipes/:index", function (req, res) {
    const recipes = cardsRecipe // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    console.log(receipts[recipeIndex]);
  })
// server.get("/description", function(req, res) {
    // const id = req.params.id

    // const description = cardsRecipe
    // return req.render( `/description/:id`, { description })

    // const description = cardsRecipe.find(function(description) {
    //     if (description.id == id) {
    //         return true
    //     }
    // })

    // if (!description) {
    //     return res.send("Description not found!")
    // }

    // return res.render("description", { description })
// })

// Rota de Erro - Tirar do comentario depois
server.use(function(req, res) {
    res.status(404).render("not-found");
});

// Ligando o servidor
server.listen(5000, function() {
    console.log("Server is running")
})