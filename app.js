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
   // TODO: implement test data
}

app.use("/graphql",createHandler({schema: schema,rootValue : graphRoot}));
app.get('/playground',expressPlayground({endpoint : '/graphql'}));

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/playground');
})
