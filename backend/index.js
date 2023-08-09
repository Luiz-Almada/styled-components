import axios from 'axios';
import path from 'path';
import express from 'express';
import cors from "cors";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.get("/csr", (req, res) => {
  //Client Side Rendering
  //Javascript gerando página HTML no client

  res.sendFile(path.join(__dirname, 'csr.html'));
});

app.get("/ssr", (req, res) => {
  //Server Side Rendering
  //Javascript gerando página HTML no servidor
  //console.log("I'm running inside the server!")
  axios
    .get(
      // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&per_page=10$page=1&sparkline-false"
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=volume_desc&$page=1&sparkline-false"
    )
    .then((axiosRes) => {
      res.send(`
        <ul>
          ${axiosRes.data.map((item) => `<li>${item.id}</li>`).join("\n")}
        </ul>
      `);
    })
    .catch(() => {
      res.send(`
        <div>
          Error
        </div>
      `);
    });
});

app.get("/ssg", (req, res) => {
  //Static Side Generation
  //Javascript gerando página HTML no servidor em build time
  res.sendFile(path.join(__dirname, 'ssg.html'));
});

app.get("/spa", (req, res) => {
  //Single Page Application
  res.sendFile(path.join(__dirname, 'spa.html'));

});

app.listen(port, () => {
  console.log(`Server run in port ${port}`)
})
