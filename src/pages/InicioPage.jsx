import { useEffect } from 'react';
import { CardProducts } from '../components/CardProducts/CardProducts.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { Footer } from '../components/Footer/Footer.jsx'
import { useProductStore } from '../hooks/useProductStore';

export const InicioPage = () => {

    const { startGetProducts } = useProductStore();

    useEffect(() => {
        startGetProducts();
    }, []);


    return (
        <div>
            <NavBar />
            <CardProducts />
            <Footer/>
        </div>
    )
}