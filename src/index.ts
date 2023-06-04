import express from "express";
import { complete } from "./services/generate";
import Config from "./config/Config";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "hello world" });
});

app.post("/complete", complete);

app.listen(Config.port, () => {
  console.log(`[server] Running at http://localhost:${Config.port}`);
});
