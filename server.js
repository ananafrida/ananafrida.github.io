
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import * as dotenv from "dotenv";
import process from 'process';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.static('client/public'))
app.use(express.static('client/dist'))
const port = process.env.PORT || 3000;


const database = {  
  cord: [
    {x: 41.561280, y: -72.656197},
    {x: 41.558527, y: -72.658445},
    ] 
  }

// CRUD
// Read index
async function getCorordinateByIndex(key,index) {
  console.log(database[key][index]);
  return database[key][index];
}
// Read all index
async function getCorordinates(key) {
  return database[key];
}
// create data
async function createCord(key, obj) {
  database[key].push(obj);
  console.log("Inserted");
  return obj;
}
// update data
async function updateCord(key,index, obj) {
  database[key][index] = obj;
  console.log("Update");
  return database[key][index];
}
// delete data
async function deleteCord(key,index) {
  database[key].splice(index,1)
  console.log("Deleted");
  return  database[key];
}
//TODO add authentiction middleware
app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), '/dist/index.html'));
});
app.get('/api', async(req, res) => {
  const data = await getCorordinateByIndex("cord",0);
  res.send({ data: data })
})
app.get('/api/all', async (req, res) => {
  const data = await getCorordinates("cord");
  res.send({ data: data })
})
app.get('/api/create', async (req, res) => {
  const {x, y } = req.query;
  if(!x || !y) return res.send("No params provided bro")
  const data = await createCord("cord", {
    x: Number(x),
    y: Number(y),
  });
  console.log(data);
  res.send({ data: data })
})
app.get('/api/update', async (req, res) => {
  const {x, y, index } = req.query;
  if(!x || !y || !index) return res.send("No params provided bro")
  const data = await updateCord("cord",index, {
    x: Number(x),
    y: Number(y),
  });
  res.send({ data: data })
})
app.get('/api/delete', async (req, res) => {
  const { index } = req.query;
  if( !index) return res.status(403).end()
  const data = await deleteCord("cord",index);
  res.send({ data: data })
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
