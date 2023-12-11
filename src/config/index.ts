import { config } from "dotenv";
import MercadoPagoConfig from "mercadopago";

config()


export const { API_SECRET, CLIENT_ID, MONGO_DB, REDIRECT_URI } = process.env as Record<string, string>

export const mercadoPagoConfig = new MercadoPagoConfig({ accessToken: API_SECRET, options: { timeout: 5000 } });