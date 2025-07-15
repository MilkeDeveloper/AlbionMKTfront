import axios from 'axios'

export const  getItemPrices = async (item_id: string, params: {
    tier?: number
    city?: string
    quality?: number
}) => {
    const url = "https://albionmarket-api.onrender.com/market/price"

    const res = await axios.get(`${url}/${item_id}`, {params})
        console.log(res.data)
    return res.data
}