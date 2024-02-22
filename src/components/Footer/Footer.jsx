import { NavLink } from "react-router-dom";
import "./Footer.css"
import { useAuthStore } from '../../hooks/useAuthStore';

export const Footer = () => {
    const { status,  startLogout } = useAuthStore();

    const onLogout = () => startLogout();

    return(
        <div className="content px-5 bg-white">
        <footer className="py-5">
        <div className="row hola">
            <div className="col-6 col-md-2 mb-3">
            <h5 id="footerh5" >Sección</h5>
            <div className="nav flex-column">
                <NavLink to='/' className="nav-item mb-2 linksFooter">Home</NavLink>
                <NavLink to='/auth/login' className="nav-item mb-2 linksFooter">Iniciar Sesión</NavLink>
                <NavLink to='/auth/register' className="nav-item mb-2 linksFooter">Registrarse</NavLink>
                <NavLink className="nav-item mb-2 linksFooter" to={`${status === 'not-authenticated' ? '/auth/login' : '/mis-compras'}`}>Mis compras</NavLink>
                <NavLink to='/' className="nav-item mb-2 linksFooter">Carrito</NavLink>
                <NavLink to='/' className="nav-item mb-2 linksFooter" onClick={onLogout}>Cerrar sesión</NavLink>
            </div>
            </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <div className="list-unstyled d-flex">
                <NavLink to="https://www.whatsapp.com/?lang=es" className="ms-3 icon"><svg className="bi" width="34" height="24"/><i className="fab fa-whatsapp"></i></NavLink>
                <NavLink to="https://www.instagram.com/sofi_reinaudo/?hl=es-la" className="ms-3 icon"><svg className="bi" width="24" height="24"/><i className="fab fa-instagram"></i></NavLink>
                <NavLink to="https://github.com/SofiaReinaudo" className="ms-3 icon"><svg className="bi" width="24" height="24"/><i className="fab fa-github"></i></NavLink>
            </div>
            <div className="text-center p-3">
                © Proyecto Final - Coderhause - BackEnd - 2024 - Sofía Reinaudo
            </div>
        </div>    
        </footer>
    </div> 
    )
};
