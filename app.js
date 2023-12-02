const express = require('express');
const { buildSchema } = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;

const app = express()

const schema = buildSchema(`
type Query {
    products : [Product]
    orders : [Order]
}

type Product {
    id : ID!
    title : String
    description : String
    price : Float
    review : [Review]
}

type Review {
    rating : Int!
    comment : String
}

type Order {
    date : String!
    totalPrice : Float
    items : [OrderItem]
}

type OrderItem {
    product : Product!
    quantity : Int!
}
`);

var shoapRoot = {
    products : [
    {
        id: "Hat1",
        title: "Hat 1 product",
        description : "this product is hat 1",
        price : 127.63
    },
    {
        id: "Hat2",
        title: "Hat 2 product",
        description : "this product is hat 2",
        price : 45.99
    },
    {
        id: "Hat3",
        title: "Hat 3 product",
        description : "this product is hat 3",
        price : 12.39
    }
  ],
  orders : [
    
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
}

app.use("/graphql",createHandler({schema: schema,rootValue : shoapRoot}));
app.get('/playground',expressPlayground({endpoint : '/graphql'}));

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/playground');
})
