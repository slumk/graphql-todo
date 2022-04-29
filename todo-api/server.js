import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { dbConnect } from './db_connect.js'
import { typeDefs } from './resources/notes/notes.typedefs.js'
import { resolvers } from './resources/notes/notes.resolvers.js'
const app = express()
dbConnect().then(() => console.log('db connected'))
const gserver = new ApolloServer(
  {
    typeDefs,
    resolvers
  }
)
app.use(express.urlencoded({
  extended: true
}))
gserver.start().then(() => {
  gserver.applyMiddleware({ app })
  app.listen(1234, () => (console.log('Started')))
})
