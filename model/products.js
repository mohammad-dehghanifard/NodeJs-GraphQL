const productList =  [
    {
        id: "Hat1",
        title: "Hat 1 product",
        description : "this product is hat 1",
        price : 127.63,
        review : []
    },
    {
        id: "Hat2",
        title: "Hat 2 product",
        description : "this product is hat 2",
        price : 45.99,
        review : []
    },
    {
        id: "Hat3",
        title: "Hat 3 product",
        description : "this product is hat 3",
        price : 12.39,
        review : []
    },
    {
        id: "Hat4",
        title: "Hat 4 product",
        description : "this product is hat 3",
        price : 15.39,
        review : []
    }
]

// actions
exports.getAllProducts = () => productList;

exports.filterProductsPrice = (min,max) => {
    return productList.filter(product =>{
        return product.price > min && product.price < max;
    })
}

exports.addNewProduct = (id,title,description,price) => {
    const newProduct = {id,title,description,price};
    productList.push(newProduct);
    return newProduct;
}

exports.selectProductById = (id) =>{
    return productList.find(product =>{
        return product.id === id;
    });
}