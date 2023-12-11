"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = require("body-parser");
var routes_1 = require("./routes");
var config_1 = require("./config");
var app = express_1.default();
app.use(body_parser_1.json());
app.use(routes_1.router);
mongoose_1.default.connect(config_1.MONGO_DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function () {
    console.log('connected to database');
});
app.listen(3000, function () {
    console.log('server is listening on port 3000');
});
