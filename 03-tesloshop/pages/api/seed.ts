// snippet nextapi, rafc, rafce
import type { NextApiRequest, NextApiResponse } from 'next'
import { db, seeDatabase } from '../../database'
import { Product } from '../../models'

type Data = {
    message: string
}

export default async function handler (req: NextApiRequest, res: NextApiResponse<Data>) {

    if (process.env.NODE_ENV === 'production'){
        return res.status(401).json ({ message: 'mp tienes acceso a esta API'})
    }
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany( seeDatabase.initialData.products )
    await db.disconnect();
    res.status(200).json({ message: 'Proceso realizado correctamente' })
}
