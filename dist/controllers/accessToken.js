"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAccessToken = void 0;
var mercadopago_1 = require("mercadopago");
exports.saveAccessToken = function (req, res) {
    var query = req.query;
    console.log(query);
    var client = new mercadopago_1.MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
    var oauth = new mercadopago_1.OAuth(client);
    oauth.create({
        body: {
            'client_secret': 'TEST-679298462899911-121017-dad4168e5b2a2757ac3b9da145d6838b-418436878',
            'client_id': 'TEST-d801492c-bb66-45d7-9fef-41ef3fc3a5a0',
            'code': query.code,
            'redirect_uri': 'https://a-q9bs8kfh2-lucassantillan0.vercel.app'
        },
        requestOptions: {}
    }).then(function (result) { return console.log(result); })
        .catch(function (error) { return console.log(error); });
    res.send("ok");
};
