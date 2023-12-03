const {getAllProducts} = require("../data/products")
module.exports = {
    Query : {
        products : (parent,args,context,info) => {
            return getAllProducts();
        }
    }
}