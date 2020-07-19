const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
    console.log(`Listening on: http://localhost:4000${PORT}`);
}
app.listen(PORT, handleListening);