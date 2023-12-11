import express from 'express';
import mongoose from 'mongoose'
import { json } from 'body-parser';
import { router } from './routes'
import { MONGO_DB } from './config';
import { User } from './models/user';

const app = express()
app.use(json())
app.use(router)

mongoose.connect(MONGO_DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')

})

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})