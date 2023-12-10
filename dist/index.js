"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var routes_1 = require("./routes");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(routes_1.router);
//mongoose.connect('mongodb://localhost:27017/test-todo', {
//  useNewUrlParser: true,
//  useCreateIndex: true,
//  useUnifiedTopology: true
//}, () => {
//  console.log('connected to database')
//})
app.listen(3000, function () {
    console.log('server is listening on port 3000');
});
