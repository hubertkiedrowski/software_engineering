import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express()
const port = 3000

const prisma = new PrismaClient();

app.get('/keyboard/:id', async (req, res) => {
  const user = await prisma.user.findFirst({
    where: { id: Number(req.params.id) },
  })
  console.log('user')
  console.log(user)
  res.json({ data: user })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
