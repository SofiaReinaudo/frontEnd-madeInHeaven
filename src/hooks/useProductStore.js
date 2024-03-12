import { useDispatch, useSelector } from "react-redux";
import { getProducts, createProduct } from "../api/requestApi";
import { onPagination, onProducts, onProduct } from "../store/productSlice";
import Swal from "sweetalert2";


export const useProductStore = () => {

    const dispatch = useDispatch();
    const {product, products, pagination} = useSelector(state=>state.product)

    const startGetProducts = async() =>{
        const resp = await getProducts();
        if (resp.ok) {
            const {pagination,products} = resp;
            dispatch(onProducts(products));
            dispatch(onPagination(pagination));
            return;
        }

        return Swal.fire({
            title: 'Ocurrio un error al obtener los productos',
            html: 'Por favor intentarlo mas tarte',
            icon: 'error',
        });
    }
    
    const startProductActivo = (producto) => {
        dispatch(onProduct(producto))
    }

    const startCreateProduct = async(producto) => {
        const resp = await createProduct(producto);

        if(resp.ok){
            startProductActivo(producto);
            return
        }
        return Swal.fire({
            title: 'Ocurrio un error al crear el producto',
            html: resp.msg,
            icon: 'error',
        });
    }

    return {
        product, 
        products, 
        pagination,
        startGetProducts,
        startProductActivo,
        startCreateProduct,
    };
}