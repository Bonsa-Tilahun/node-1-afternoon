const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const filteredProducts = products.filter(product => {
            let include = true
            for (const key in req.query) {
                if (typeof product[key] === 'number') {
                    if (product[key] !== +req.query[key]) {
                        include = false
                    }
                    continue
                }
                if (product[key].includes(req.query[key])) {
                    include = false
                }
            }
            return include
        })
        res.status(200).send(filteredProducts)
    }
}