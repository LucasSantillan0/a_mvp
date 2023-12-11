"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.mercadoPagoConfig = exports.REDIRECT_URI = exports.MONGO_DB = exports.CLIENT_ID = exports.API_SECRET = void 0;
var dotenv_1 = require("dotenv");
var mercadopago_1 = __importDefault(require("mercadopago"));
dotenv_1.config();
exports.API_SECRET = (_a = process.env, _a.API_SECRET), exports.CLIENT_ID = _a.CLIENT_ID, exports.MONGO_DB = _a.MONGO_DB, exports.REDIRECT_URI = _a.REDIRECT_URI;
exports.mercadoPagoConfig = new mercadopago_1.default({ accessToken: exports.API_SECRET, options: { timeout: 5000 } });
