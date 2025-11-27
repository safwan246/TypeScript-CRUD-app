import express from 'express'
import { deleteProduct, getProduct, postProduct, putProduct , } from '../controller/UserController.js'

const userRouter = express.Router()

userRouter.get('/',getProduct)
userRouter.post('/',postProduct)
userRouter.put('/',putProduct)
userRouter.delete('/',deleteProduct)


export default userRouter