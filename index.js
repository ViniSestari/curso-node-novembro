const express = require('express');
const app = express();
app.get('/herois', function (req, res) {
    const herois = ['Mulher Maravilha', 'Batman', 'Superman']
    res.send(herois)
})

app.get('/herois/:id', function(req, res){
    const id = req.params.id
    res.send(herois[id-1])
})

app.post('/herois', (req, res) => {
    console.dir(req.body)
})

app.listen(3000)