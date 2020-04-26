import axios from 'axios';

export const axiosWithAuth = () => {
    // bring in the token and set to const
    const token = localStorage.getItem('token')

    // create an axios object that sets the Authorization header
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}
