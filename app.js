import express from "express";

const app = express();
export default app;

import employeesRoutes from './api/employeesRouter.js'
app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use('/employees', employeesRoutes)

// Error handling is positioned last, uses "app.use" with 4 parameters!
app.use((err, req, res, next) => {
  res.send(500).send('Everything is fine 🔥')
})
