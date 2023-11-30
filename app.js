const express = require('express');
const { buildSchema } = require('graphql');
const {createHandler} = require('graphql-http/lib/use/express');

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


app.listen(3000, () => {
  console.log('listening on port 3000')
})
