import { api } from '../constants/api'
export const profileService = {
    getWishlist(query = '') {
        return api.get('/product')
    }
}