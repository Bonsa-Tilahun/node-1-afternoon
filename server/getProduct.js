const products = require('../products.json')

module.exports = {
    getProduct: (req, res) => {
        const product = products.find(e => e.id === +req.params.id)
        product ? res.status(200).send(product) : res.status(404).send('Product not found')

    }
}