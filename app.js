const express = require('express');
const { buildSchema } = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;
const path = require('path');
const productList = require("./data/products");
const orderList = require("./data/order");
const {loadFilesSync} = require("@graphql-tools/load-files");
const {makeExecutableSchema} = require("@graphql-tools/schema");


const schemaArray = loadFilesSync(path.join(__dirname,"**/*.graphql"));

const schema = makeExecutableSchema({typeDefs: schemaArray});

var shoapRoot = {products : productList,orders : orderList}

const app = express();
app.use("/graphql",createHandler({schema: schema,rootValue : shoapRoot}));
app.get('/playground',expressPlayground({endpoint : '/graphql'}));

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/playground');
})
