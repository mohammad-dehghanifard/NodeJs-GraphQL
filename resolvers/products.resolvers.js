const {getAllProducts,filterProductsPrice} = require("../model/products")
module.exports = {
    Query : {
        products : (parent,args,context,info) => {
            return getAllProducts();
        },
        filterProductPrice : (parent,args) => {
            return filterProductsPrice(args.min, args.max)
        }
    }
}