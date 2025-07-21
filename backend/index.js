const express = require("express");
const app = express();
const port = 4000;


const users = [
    {id: 1, name: "John", email: "john@gmail.com"},
    {id: 2, name: "Jane", email: "jane@gmail.com"},
    {id: 3, name: "Jim", email: "jim@gmail.com"},
]

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});