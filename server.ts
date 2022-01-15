import express from "express";

const app = express();

import models from "./models";

models.sequelize.sync({ force: true });

app.get("/sql", async (req, res) => {
  return res.send({ done: true });
});

app.listen(8080, () => console.log(`Server is listening on port ${8080}`));
