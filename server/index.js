const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const PORT = 4000

const app = express()

app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProduct.getProduct)

app.listen(PORT, () => console.log('server up and running'))