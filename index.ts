import express, { Request, Response } from "express";
const indexRoute = require("./src/routes");
const rateLimit = require("express-rate-limit");

const app = express();
const port = 3000;

//middleware
app.use(
  rateLimit({
    windowMs: 12 * 60 * 60 * 1000, //12 hrs(in ms)
    max: 5, //max 5 requests
    message: "You exceeded 100 requests in 12 hour limit!", //user gets whenever they have exceeded the limit.
    headers: true, //whether to add headers to show the total number of requests and the duration to wait before trying to make requests again.
  })
);

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello World");
// });
app.use("/posts", indexRoute);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
