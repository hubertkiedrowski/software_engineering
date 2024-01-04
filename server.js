import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
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

app.use(cors());

// Regist
app.post('/regist', async (req, res) => {
  const{ firstname, lastname, email, username, password, repeatpassword } = req.body;

  if (password === repeatpassword && firstname != null && lastname != null && email != null && username != null && password != null){

    try {
    
      const hashedPassword = await bcrypt.hash(password, 10);

      // Speicher User in datenbank
      const user = await prisma.user.create({
        data: {
          email: email,
          firstName: firstname,
          lastName: lastname,
          userName: username,
          password: hashedPassword,
        },
      });

      res.status(201).json({ message: 'Benutzer erfolreich Registriert!'})
      console.log("Regist erfolgreich!");
      
    } catch (error) {

      console.log('Fehler beim Registrieren:', error);
      res.status(500).json( {message: 'Interner Serverfehler' });

    }

  }else {

    console.log("Passwörter nicht gleich!")

  }
  

})

// Login
app.post('/login', async (req, res) => {
  const {username, password} = req.body;

  try {

    const user = await prisma.user.findUnique({
      where: { username },
    })

    if(!user){
      return res.status(401).json({ message: 'Ungültige Anmeldeinformationen' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch) {

      res.status(200).json({ message: 'Erfolgreiche Anmeldung!'})
      console.log("Login erfolgreich!");

    } else {

      res.status(401).json({ message: 'Ungültige Anmeldeinformationen!'})
      console.log("Login fehlgeschlagen!");

    }

  } catch (error) {

    console.error('Fehler bei der Anmeldung:', error);
    res.status(500).json({ message: 'Interner Serverfehler' });

  }

});


