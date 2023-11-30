const express = require('express');
const { buildSchema } = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express');
const expressPlayground = require('graphql-playground-middleware-express').default;

const app = express()

const schema = buildSchema(`
type Query {
    username: String,
    age : Int,
    email: String,
}
`);

var graphRoot = {
    username: "mohammad",
    age : 25,
    email: "test@example.com",
}

app.use("/graphql",createHandler({schema: schema,rootValue : graphRoot}));
app.get('/playground',expressPlayground({endpoint : '/graphql'}));

app.listen(3000, () => {
  console.log('listening on http://localhost:3000/playground');
})
