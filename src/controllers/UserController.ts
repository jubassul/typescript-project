import { Request, Response } from "express"
const users = [
    {
        name: 'Herllon', email: 'herllon@teste.com',
    }
]


export default{
    async list(req: Request, res: Response){
        return res.json(users)
    }
}