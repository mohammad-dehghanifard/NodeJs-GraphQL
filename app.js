const express = require('express');
const { buildSchema } = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const path = require('path');
const {loadFilesSync} = require("@graphql-tools/load-files");
const {makeExecutableSchema} = require("@graphql-tools/schema");


const schemaArray = loadFilesSync(path.join(__dirname,"**/*.graphql"));

const schema = makeExecutableSchema({typeDefs: schemaArray});

var shoapRoot = {
    products : [
  
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
const app = express();
app.use("/graphql",createHandler({schema: schema,rootValue : shoapRoot}));
app.get('/playground',expressPlayground({endpoint : '/graphql'}));

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/playground');
})
