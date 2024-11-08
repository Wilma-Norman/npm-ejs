import express from "express"
import heroRouter from "./routes/heroes.js";
import villanRouter from "./routes/villans.js";
import * as path from "path";

const app = express();
const port = process.env.PORT || 3000;
const __dirname = path.resolve();

app.get(`/`, (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Avatar',
        subTitle: "The last airbender",
        className: "homepage",
        underline: true
    })
})

app.use(`/heroes`, heroRouter)
app.use(`/villans`, villanRouter)

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


app.listen(port, () => console.log(`listening on ${port}`))