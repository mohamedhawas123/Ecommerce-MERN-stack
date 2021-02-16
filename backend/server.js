const express = require('express')
const products = require('./data/products')
var cors = require('cors')


const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.json({'success': "yes"})
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(item => item._id === req.params.id)
    console.log(product)
    res.json(product)
})

app.listen(5000, console.log("it's running right now"))