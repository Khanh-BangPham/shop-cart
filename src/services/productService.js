import { api } from '../constants/api'
export const productService = {
    getProduct(query = '') {
        return api.get('/product')
    }
}