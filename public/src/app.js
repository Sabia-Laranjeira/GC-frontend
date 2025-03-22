import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors({
  origin: "https://gc-backend-wp6d.onrender.com"
}))
app.use(express.json());
app.use(express.static('public'));

export default app;