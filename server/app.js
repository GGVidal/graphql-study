const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://GGVidal:o7wCUUSkOOk6O2sx@teste.ckoz8.mongodb.net/graphqlDB?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connecnted"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {
  console.log("Listening request");
});
