"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveAccessToken = void 0;
exports.saveAccessToken = function (req, res) {
    var query = req.query;
    console.log(query);
    // const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
    // 
    // const oauth = new OAuth(client);
    //
    // oauth.create({
    //     body: {
    //         'client_secret': '6bnJQjxhFs',
    //         'client_id': 'TESTUSER925637351',
    //         'code': query.code as string,
    //         'redirect_uri': 'redirect-uri'
    //     }
    // }).then((result) => console.log(result))
    //     .catch((error) => console.log(error));
    res.send("ok");
};
