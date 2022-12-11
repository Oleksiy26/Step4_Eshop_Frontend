import axios from 'axios'

export default class ProductService {
    static async getProductsById(itemNo) {
        const response = await axios.get(`/api/products/${itemNo}`)
        return response
    }

    static async getProductsBySomeParams(perPage, startPage, sort, cards) {
        let url = `/api/products/filter?perPage=${perPage}&startPage=${startPage}`
        if (sort) {
            url = `/api/products/filter?sort=+${sort}`
        }
        const response = await axios.get(url)
        const {products, productsQuantity} = response.data
        return response.data
    }
}