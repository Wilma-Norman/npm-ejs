import express from "express"
import { good } from "../data/characters.js";

const heroRouter = express.Router();

heroRouter.get(`/`, (req, res) => 
res.render("pages/story", 
    {
        pageTitle: "Heroe Characters",
        subTitle: "Heroes are good",
        className: "good",
        charcters: good
    })
)

heroRouter.get(`/aang`, (req, res) => {
    res.render("pages/aang", { 
        pageTitle: "Aang",
        subTitle: "The Avatar",
        className: "good",
        charcters: good.filter(char => char.name === "Aang")
    });
});

heroRouter.get(`/katarah`, (req, res) => {
    res.render("pages/katarah", { 
        pageTitle: "Katara",
        subTitle: "Wather bender",
        className: "good",
        charcters: good.filter(char => char.name === "Katara")
    });
});

export default heroRouter;