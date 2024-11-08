import express from "express";
import { evilpeople } from "../data/characters.js";

const villanRouter = express.Router();

villanRouter.get(`/`, (req, res) => 
    res.render("pages/story", 
    {
        pageTitle:"Villan Characters",
        subTitle: "They are bad",
        className: "bad",
        charcters: evilpeople
    })
)

villanRouter.get(`/zuko`, (req, res) => {
    res.render("pages/zuko", {
        pageTitle:"Zuko",
        subTitle: "Prins of the firenation",
        className: "bad",
        charcters: evilpeople.filter(char => char.name === "Zuko")
    })
})

villanRouter.get(`/ozai`, (req, res) => {
    res.render("pages/ozai", {
        pageTitle:"Ozai",
        subTitle: "Fire Lord",
        className: "bad",
        charcters: evilpeople.filter(char => char.name === "Fire Lord Ozai")
    })
})


export default villanRouter;