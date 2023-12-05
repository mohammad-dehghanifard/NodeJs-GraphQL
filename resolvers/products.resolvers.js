const {getAllProducts,filterProductsPrice,addNewProduct} = require("../model/products")
module.exports = {
    Query : {
        products : (parent,args,context,info) => {
            return getAllProducts();
        },
        filterProductPrice : (parent,args) => {
            return filterProductsPrice(args.min, args.max)
        }
    },

    Mutation : {
        addNewProduct : ( parent , args) =>{
            return addNewProduct(args.id,args.title,args.description,args.price);
        }
    }
}