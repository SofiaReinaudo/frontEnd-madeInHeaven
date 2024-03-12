import {Card, Typography,} from "@mui/material"
import { NavLink } from "react-router-dom";
import './CardItem.css'

export const CardItem = ({ _id, title, description, code, price, stock, category, thumbnail }) => {
    return ( 
        <Card id="productoItem" className="card">
            <div className="card-body">
            <span><h2>{title}</h2></span>
            <img src={thumbnail} id="img" alt={title}/>
            <Typography color="text.secondary">{description}</Typography>
            <Typography>Stock: {stock}</Typography>
            <Typography>Precio: ${price}</Typography>
            <NavLink to='' className="btn btn-dark" id="btnComprar" >Agregar al carrito</NavLink>
            </div>
        </Card>
    )
} 