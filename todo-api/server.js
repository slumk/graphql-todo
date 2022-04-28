import express from 'express'
import { dbConnect } from './db_connect.js'

const app = express()
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.listen(8000, () => (
  console.log('Listening')
))
dbConnect()
