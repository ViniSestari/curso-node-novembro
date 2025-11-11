const express = require('express');
const app = express();
app.get('/dc', function (req, res) {
    const herois = ['Mulher Maravilha', 'Batman', 'Superman']
    res.send(herois)
})

app.get('/marvel', function (req, res) {
    const herois = ['Homem Aranha', 'Capitã Marvel', 'Capitão América']
    res.send(herois)
})

app.listen(3000)