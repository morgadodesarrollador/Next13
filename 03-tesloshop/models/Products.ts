import mongoose, { Schema, model, Model } from 'mongoose';
import { IProducto } from '../interfaces/productos';


const productSchema = new Schema ({
    description: { type: String, required: true },
    images: [{ type: String }],
    inStock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    sizes: [{
        type: String,
        enum: {
            values: [ 'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} no es un tamaño válido'
        }
    }],
    slug: { type: String, required: true, unique: true},
    tags: [{ type: String }],
    title: { type: String, required: true },
    type: {
        type: String,
        enum: {
            values: [ 'shirts', 'pants', 'hoodies', 'hats' ],
            message: '{VALUE} no es un tipo válido'
        }
    },
    gender: {
        type: String,
        enum: {
            values: [ 'men', 'women', 'kid', 'unisex' ],
            message: '{VALUE} no es un género válido'
        }
    }
}, {
    timestamps: true //marcas de tiempo de mongo
})

/* TODO: Crear un índice para las búsquedas */

//                                                                  crea el modelo Product con la info del productSchema                                                                    
const ProductModel: Model<IProducto> = mongoose.models.Product || model('Product', productSchema);

export default ProductModel;