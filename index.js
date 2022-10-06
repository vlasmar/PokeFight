const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
const pokemonRouter = require('./routes/pokemon');

app.use(cors());
app.use("/pokemons", pokemonRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
