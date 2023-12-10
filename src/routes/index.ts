import express, { Request, Response } from 'express'
import { saveAccessToken } from '../controllers/accessToken'

export const router = express.Router()

router.get('',saveAccessToken)



