import { Request, Response } from "express";
import { MercadoPagoConfig, OAuth } from "mercadopago";

export const saveAccessToken = (req: Request, res: Response) => {
    const { query } = req
    console.log(query)

 const client = new MercadoPagoConfig({ accessToken: 'access_token', options: { timeout: 5000 } });
 
 const oauth = new OAuth(client);

 oauth.create({
     body: {
         'client_secret': 'TEST-679298462899911-121017-dad4168e5b2a2757ac3b9da145d6838b-418436878',
         'client_id': '679298462899911',
         'code': query.code as string,
         'redirect_uri': 'https://a-q9bs8kfh2-lucassantillan0.vercel.app'
        
     },
     requestOptions:{}
 }).then((result) => console.log(result))
     .catch((error) => console.log(error));
   res.send("ok")
}