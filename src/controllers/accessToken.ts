import { Request, Response } from "express";
import { OAuth } from "mercadopago";
import { API_SECRET, CLIENT_ID, REDIRECT_URI, mercadoPagoConfig } from "../config";

export const saveAccessToken = (req: Request, res: Response) => {
    const { query } = req
    console.log(query)


    const oauth = new OAuth(mercadoPagoConfig);

    oauth.create({
        body: {
            'client_secret': CLIENT_ID,
            'client_id': API_SECRET,
            'code': query.code as string,
            'redirect_uri': REDIRECT_URI
        },
        requestOptions: {}
    }).then((result) => console.log(result))
        .catch((error) => console.log(error));
    res.send("ok")
}