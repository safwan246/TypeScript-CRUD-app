import express from 'express'
import { deleteProduct, getProduct, postProduct, putProduct , } from '../controller/UserController.js'

const userRouter = express.Router()

userRouter.get('/get',getProduct)
userRouter.post('/create',postProduct)
userRouter.put('/update/:id',putProduct)
userRouter.delete('/delete/:id',deleteProduct)


export default userRouter