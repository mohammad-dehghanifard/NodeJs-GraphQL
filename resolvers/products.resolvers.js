const {getAllProducts,filterProductsPrice,addNewProduct,selectProductById} = require("../model/products")
module.exports = {
    Query : {
        products : (parent,args,context,info) => {
            return getAllProducts();
        },
        filterProductPrice : (parent,args) => {
            return filterProductsPrice(args.min, args.max)
        },
        getProductById : ( _ ,args) => {
            return selectProductById(args.id)
        }
    },

    Mutation : {
        addNewProduct : ( parent , args) =>{
            return addNewProduct(args.id,args.title,args.description,args.price);
        }
    }
}