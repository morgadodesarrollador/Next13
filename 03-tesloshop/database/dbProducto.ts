import { db } from "./"
import { IProducto } from "../interfaces";
import ProductModel from '../models/Products';

export const getProductoBySlug = async( slug: string ): Promise<IProducto | null> => {

    await db.connect();
    const producto = await ProductModel.findOne({ slug }).lean();
    await db.disconnect();

    if (!producto)
        return null

    return JSON.parse(JSON.stringify(producto));
}

interface ProductSlug {
    slug: string;
}
export const getAllProductSlugs = async(): Promise<ProductSlug[]> => {

    await db.connect();
    const slugs = ProductModel.find().select('slug -_id').lean();
    await db.disconnect();
    return slugs;

}