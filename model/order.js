const orderList= [
    {
        date : '2022-06-18',
        totalPrice : 236.84,
        items : [
            {
                product : {
                    id: "Hat2",
                    title: "Hat 2 product",
                    description : "this product is hat 2",
                    price : 45.99
                },
                quantity: 6
            }
        ]
    }
]

exports.getAllOrder = () => orderList;