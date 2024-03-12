import madeinheavenApi from "./config";

export const loginUser = async (email, password) => {
    try {
        const { data } = await madeinheavenApi.post('/auth/login', { email, password });
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.msg };
    }
}

export const registerUser = async (email, password, name, lastName) => {
    try {
        const { data } = await madeinheavenApi.post('/auth/register', { email, password, name, lastName });
        const { token, usuario } = data;
        const { _id, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false, msg: error.response.data.errors[0].msg }
    }
}

export const validarToken = async () => {
    try {
        const { data } = await madeinheavenApi.get('/auth/renew');
        const { token, usuario } = data;
        const { _id, name, lastName, rol, cart_id, } = usuario;
        localStorage.setItem('token', token);
        return { ok: true, _id, name, lastName, rol, cart_id, }
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}

export const getProducts = async () => {
    try {
        const { data } = await madeinheavenApi.get('/products');

        const { result } = data;
        const { payload: produtcs, totalDocs, totalPages, query, limit, page, hasNextPage, hasPrevPage, prevPage, nextPage } = result;

        return { ok: true, produtcs, pagination: { totalDocs, totalPages, limit, query, page, hasNextPage, hasPrevPage, prevPage, nextPage } };
    } catch (error) {
        console.log(error);
        return { ok: false };
    }
}

export const createProduct = async (producto) => {
    try {

        const form = new FormData();
        form.append('title', producto.title);
        form.append('description', producto.description);
        form.append('code', producto.code);
        form.append('price', producto.price);
        form.append('stock', producto.stock);
        form.append('category', producto.category);
        form.append('file', producto.file);

        const { data } = await madeinheavenApi.post('/products', form);
        return { ok: true, producto:data.producto };
    } catch (error) {
        console.log(error);
        return { ok: false,  msg: error.response.data.errors[0].msg };
    }
}