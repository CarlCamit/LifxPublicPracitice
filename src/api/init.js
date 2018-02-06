import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.lifx.com/v1',
    headers: {
        'Authorization': 'Bearer cac300558d66d665d1452e8bdb01f11ae3178c46a5f02cd0135e9be51fac3397',
        'Content-Type': 'application/json'
    }
})