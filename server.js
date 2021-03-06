const express = require("express");
const mongoose = require("mongoose");
const rolRoutes = require("./routes/rolRoutes.js");
const usuarioRoutes = require("./routes/usuarioRoutes.js");
const productoRoutes = require("./routes/productoRoutes.js");
const categoriaRoutes = require("./routes/categoriaRoutes.js");

const app = express();

app.use(express.json());
mongoose.connect(
    "mongodb+srv://she_codes_26:T3csup3347@crud.gsoii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", async(err) => {
        if (err) throw err;
        console.log("connected to db")
    }
);

app.set('port', process.env.PORT || 3000);

app.use(rolRoutes);
app.use(usuarioRoutes);
app.use(productoRoutes);
app.use(categoriaRoutes);

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});