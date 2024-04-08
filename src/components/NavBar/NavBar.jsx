import { Avatar, Badge, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useCartStore } from '../../hooks/useCartStore';
import './NavBar.css'

export const NavBar = () => {

    const { name, status, isAdmin, startLogout } = useAuthStore();
    const { cart } = useCartStore();
    
    const onLogout = () => startLogout();

    return (
        <div className="navbar navbar-expand-lg container-fluid">
            <NavLink  to='/' className="navbar-brand1">Made In Heaven</NavLink>
            <div style={{  margin: '5px', padding: '5px', marginLeft: '20px' }}>
                <NavLink to='/'><Avatar alt='logo' src='iconoCorazon.png' sx={{ width: 40, height: 40, marginLeft: -2 }} /></NavLink>
                <div>{isAdmin && <NavLink className='navbar-brand' style={{ marginLeft:'60px'}}>Agregar Producto</NavLink>}</div>
            </div>

            <NavLink
                    to={`${status === 'not-authenticated' ? '/auth/login' : '/mi-carrito'}`}
                    className='navbar-brand'
                    style={{ marginRight: '15px' }}>
                </NavLink>


            <div style={{ marginRight: '50px' }}>

                <NavLink to={`${status === 'not-authenticated' ? '/auth/login' : '/mi-carrito'}`} className='navbar-brand' style={{  }}><LocalGroceryStoreOutlinedIcon /></NavLink>

                <NavLink to={`${status === 'not-authenticated' ? '/auth/login' : '/mis-compras'}`} className='navbar-brand' style={{ }}>Mis compras</NavLink>
                <NavLink to={`${status === 'not-authenticated' ? '/auth/login' : '/chat'}`} className='navbar-brand' style={{ }}>Chat</NavLink>

                {
                    status === 'authenticated'
                        ?
                        <>
                            <NavLink
                                className='navbar-brand'
                                style={{ }}>{name.toUpperCase()}</NavLink>

                            <Button  style={{ color:'black' }} onClick={onLogout}>Cerrar sesión</Button>
                        </>
                        :
                        <>
                            <NavLink
                                to='/auth/register'
                                className='navbar-brand'
                                style={{ marginRight: '15px' }}>Crear cuenta</NavLink>

                            <NavLink to='/auth/login' className='navbar-brand'>Ingresar</NavLink>
                        </>
                }
            </div>
        </div >
    )
}