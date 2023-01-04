import { Box, Button } from '@mui/material';
import React, { FC } from 'react'
import { ISize } from '../../interfaces/productos';

interface Props {
    selectedSize?: ISize;
    sizes: ISize[]
}
export const SizeSelector:FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
        {
            sizes.map( talla => (
                <Button 
                    key={talla}
                    size='small'
                    color = { selectedSize === talla ? 'primary' : 'info' }
                >
                    { talla }
                </Button>
            ))
        }
    </Box>
  )
}
