import { Request, Response } from "express";
import { MercadoPagoConfig, OAuth } from "mercadopago";

export const saveAccessToken = (req: Request, res: Response) => {
    const { query } = req
    console.log(query)

 const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
 
 const oauth = new OAuth(client);

 oauth.create({
     body: {
         'client_secret': '6bnJQjxhFs',
         'client_id': 'TESTUSER925637351',
         'code': query.code as string,
         'redirect_uri': 'https://a-q9bs8kfh2-lucassantillan0.vercel.app'
     }
 }).then((result) => console.log(result))
     .catch((error) => console.log(error));
   res.send("ok")
}