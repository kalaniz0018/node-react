"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001;
app.get("/data", (req, res) => {
    //cuando tener problemas con los cors
    //res.serHeader('Access-Control-Allaw-Origin', '*')
    const data = { foo: "bar" };
    res.json(data);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
