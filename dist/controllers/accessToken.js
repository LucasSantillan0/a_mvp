"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAccessToken = void 0;
var mercadopago_1 = require("mercadopago");
var config_1 = require("../config");
exports.saveAccessToken = function (req, res) {
    var query = req.query;
    console.log(query);
    var oauth = new mercadopago_1.OAuth(config_1.mercadoPagoConfig);
    oauth.create({
        body: {
            'client_secret': config_1.CLIENT_ID,
            'client_id': config_1.API_SECRET,
            'code': query.code,
            'redirect_uri': config_1.REDIRECT_URI
        },
        requestOptions: {}
    }).then(function (result) { return console.log(result); })
        .catch(function (error) { return console.log(error); });
    res.send("ok");
};
