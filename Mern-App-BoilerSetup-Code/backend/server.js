const express = require("express");
const app = express();
const cors=require('cors')

const roomRouter = require("./routes/RoomRoutes");

const dbConfig = require("../backend/config/dbconfig");
const dotenv = require("dotenv");

const port = process.env.PORT || 5500;

app.use(cors())
app.use(express.json())
app.use("/api/rooms",roomRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
