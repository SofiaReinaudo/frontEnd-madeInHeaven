import { Grid } from '@mui/material';
import { useProductStore } from '../../hooks/useProductStore';
import { CardItem } from '../CardItem/CardItem';
import './CardProducts.css';


export const CardProducts = () => {

    const { products } = useProductStore();

    return (
        <div className="container" id='containerItems'>
            <div className="row">
                <div className="col">
                    <div id="contenedorProductos" className="row row-cols-1 row-cols-md-3 g-4">{products?.map(producto => (<Grid key={producto._id}><CardItem  {...producto} /></Grid>))}</div>
                </div>
            </div>            
        </div>
    );
}