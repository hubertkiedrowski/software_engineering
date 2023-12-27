import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express()
const port = 3000

const prisma = new PrismaClient();

app.get('/keyboard/:ID', async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { ID: Number(req.params.ID) },
  })
  res.json({ data: user.firstName, data: user.lastName })
})

app.get('/leaderboard/:userID', async (req, res) => {
  const user = await prisma.point.findFirst({
    where: { userID: Number(req.params.userID) },
  })
  res.json({ data: user.score })
})

//get first / lastname
app.get('/home/:ID', async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { ID: Number(req.params.ID) },
  })
  res.json({ firstName: user.firstName, lastName: user.lastName })
})

//TODO  
//wie sieht die url bei pw eingabe genau aus??
app.get('/login/:ID:password', async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { ID: Number(req.params.ID) },

  })
  if (req.params.password == user.password) {
    //hier noch ein delay
    // passwort ist nicht verschlüsselt und auslesbar
    res.json({ data: user })
  }
})

app.post(() => { });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
