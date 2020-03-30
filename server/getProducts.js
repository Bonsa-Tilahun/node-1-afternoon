const products = require('../products.json')

module.exports = {
    getProducts: (req, res) => {
        const filteredProducts = products.filter(product => {
            let include = true
            for (const key in req.query) {
                if (typeof product[key] === 'number') {
                    if (product[key] !== +req.query[key]) {
                        include = false
                        console.log(product[key], ' does not equal 1.51')
                    }
                    continue
                }
                if (product[key].includes(req.query[key])) {
                    console.log(product[key], product['price'])
                    include = false
                }
                console.log(include)
            }
            return include
        })
        res.status(200).send(filteredProducts)
    }
}