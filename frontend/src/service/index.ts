const API_BASE_URL = process.env.REACT_APP_API_BASE_URL


const API = {
    getSites: (payload: string)=> `${API_BASE_URL}/sites?q=${payload}`,
    getItem: (payload: string)=> `${API_BASE_URL}/items/${payload}`,
    getItemDescription: (payload: string)=> `${API_BASE_URL}/items/${payload}/description`
}


export default API