import express from 'express';
import bcrypt from 'bcryptjs';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PrismaClient } from "@prisma/client";

const app = express()
const port = 3000

const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());

app.get('/keyboard/:id', async (req, res) => {
app.use(express.json());

app.post('/users/:userID', async (req, res) => {
  const { userID } = req.body;

  try {
    const user = await prisma.user.findFirst({
      where: { id: userID },
    });

    if (user) {
      res.json({ user });
    } else {
      res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }
  } catch (error) {
    console.error('Fehler beim Abfragen des Benutzers:', error);
    res.status(500).json({ error: 'Serverfehler' });
  }
});



app.get('/users/:userID', async (req, res) => {
  const userID = Number(req.params.userID)
  const user = await prisma.user.findFirst({
    where: { id: userID },
  })
  res.json({ firstName: user.firstName, lastName: user.lastName })
})
// Findet die obersten x Punktestände 
app.get('/points/leaderboard/:topX', async (req, res) => {
  const topX = Number(req.params.topX);

  try {
    const topScores = await prisma.point.findMany({
      take: topX,
      orderBy: {
        score: 'desc', // Sortiere absteigend nach Punktestand
      },
      include: {
        user: true, // Dies nimmt die Benutzerinformationen mit auf
      },
    });
    res.json({ data: topScores });
  } catch (error) {
    console.error('Fehler beim Abfragen der Punktestände:', error);
    res.status(500).json({ error: 'Serverfehler' });
  }
});



// Alle Punktestände eines Benutzers
app.get('/points/:userID', async (req, res) => {
  const userID = Number(req.params.userID);

  try {
    const userScores = await prisma.point.findMany({
      where: { userId: userID }, // Verwenden Sie hier 'userId' anstelle von 'id'
      orderBy: {
        score: 'desc', // Sortiere absteigend nach Punktestand
      },
    });

    res.json({ data: userScores });
  } catch (error) {
    console.error('Fehler beim Abfragen der Punktestände:', error);
    res.status(500).json({ error: 'Serverfehler' });
  }
});

//get username
app.get('/username/:userID', async (req, res) => {
  const userID = Number(req.params.userID)

  const user = await prisma.user.findFirst({
    where: { id: Number(userID) },
  })
  res.json({ firstName: user.userName })
})

//get firstname
app.get('/firstname/:userID', async (req, res) => {
  const userID = Number(req.params.userID)

  const user = await prisma.user.findFirst({
    where: { id: Number(userID) },
  })
  res.json({ firstName: user.firstName })
})

//get lastname
app.get('/lastname/:userID', async (req, res) => {
  const userID = Number(req.params.userID)

  const user = await prisma.user.findFirst({
    where: { id: Number(userID) },
  })
  res.json({ lastName: user.lastName })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Regist
app.post('/regist', async (req, res) => {
  const{ firstName, lastName, email, userName, password, repeatpassword } = req.body;

  if (password == repeatpassword && firstName != "" && lastName != "" && email != "" && userName != "" && password != "" && repeatpassword != ""){

    try {
    
      const hashedPassword = await bcrypt.hash(password, 10);

      // Speicher User in datenbank
      const user = await prisma.user.create({
        data: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          userName: userName,
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
    console.log('Empfangene Daten:', req.body);
    console.log('Passwörter verglichen:', password, repeatpassword);

    console.log("Passwörter nicht gleich!")
    res.status(400).json({ message: 'Passwörter stimmen nicht überein' });  
  }
  

})

// Login
app.post('/login', async (req, res) => {
  const authHeader = req.headers.authorization;

  // Logge den Authorization-Header
  console.log('Authorization-Header:', authHeader);

  if(!authHeader || !authHeader.startsWith('Basic')) {
      return res.status(401).json({ message: 'Ungültige Anmeldeinformationen' });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [email, userName, password] = credentials.split(':');

  // Logge die extrahierten Anmeldeinformationen
  console.log('Extrahierte Anmeldeinformationen:', { email, userName, password });

  try {

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        userName: userName
      },
    });

    if(!user){
      return res.status(401).json({ message: 'Ungültige Anmeldeinformationen2' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log("PasswordMatch: ", passwordMatch);

    if(passwordMatch) {

      res.status(200).json({ email: user.email, userName: user.userName })
      console.log("Login erfolgreich!");

    } else {

      res.status(401).json({ message: 'Ungültige Anmeldeinformationen!3'})
      console.log("Login fehlgeschlagen!");

    }

  } catch (error) {

    console.error('Fehler bei der Anmeldung:', error);
    res.status(500).json({ message: 'Interner Serverfehler' });

  }

});


