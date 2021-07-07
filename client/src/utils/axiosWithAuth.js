import axios from 'axios';

export const axiosWithAuth = () => {
    // bring in the token and set to const
    const token = localStorage.getItem('token')

    // create an axios object that sets the Authorization header
    return axios.create({
        baseURL: 'http://localhost:5000/api',
        headers: {
            Authorization: token
        }
    })
}
