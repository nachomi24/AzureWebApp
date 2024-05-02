const express = require("express");
const PORT = process.env.PORT || 3000;

const app =express();

//console.log("todo bien")
app.use(express.static('dist'))

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });