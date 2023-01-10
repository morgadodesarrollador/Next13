import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANTS } from '../../../database'
import { IProducto } from '../../../interfaces'
import { Product } from '../../../models'


type Data = 
    | { message: string }
    | IProducto[]


export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch( req.method ){
        case 'GET': 
            return getProducts( req, res )
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { gender = 'all'} = req.query; // si no viene gender=all es el x defecto
    let condition = {}; // condition = { gender: 'kid'}
    if ( gender !== 'all' && SHOP_CONSTANTS.validGenders.includes(`${gender}`)){
        condition = { gender } // { gender: gender }
    }
    await db.connect();
    const products = await Product.find( condition )
                                    .select('title images price inStock sulug -_id')
                                    .lean();
    return res.status(200).json (products);
    await db.disconnect();
}
