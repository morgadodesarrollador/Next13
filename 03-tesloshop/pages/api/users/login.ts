import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { User } from '../../../models'
import bcrypt from 'bcryptjs';

type RespuestaLogin = {
    token: string,
    user: {
        email: string, 
        role: string, 
        name: string
    }
}

type Data = 
| { message: string }
| RespuestaLogin;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'POST': 
            return loginUser(req, res)
        default: 
            res.status(400).json({
                message: 'Bad request'
            })
    }

}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { email = '', password = '' } = req.body;
    await db.connect();
    const user = await User.findOne({ email });
    await db.disconnect();

    if (!user){
        return res.status(400).json({message: 'Email o password no válidos -@'})
    }

    if (!bcrypt.compareSync(password, user.password!)){ 
        // no son inguales
        return res.status(400).json({message: 'Email o password no válidos -Pass'})
    }

    const { role, name } = user;
    const  data =  {
                token: '',
                user: {
                    email, role, name
                }
            }
    return res.status(200).json(data);
}
