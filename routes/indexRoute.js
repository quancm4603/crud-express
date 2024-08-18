import express from "express";
import {
  create,
  deleteUser,
  fetch,
  update,
} from "../controller/userController.js";

const route = express.Router();

route.get("/", (req, res) => res.render("home"));

route.get("/form", (req, res) => res.render("form"));

route.post("/form", (req, res) => {

    const { name, email, address, image } = req.body;
    console.log("POSt",  { name, email, address, image });
    req.body = { name, email, address };
    //res.send(image.path);
    create(req, res);
});

route.post ("/form",create)

export default route;
