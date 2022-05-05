import axios from 'axios';
import JwtAuthService from './services/jwtAuthService';

const host = 'http://localhost:3000';
// const host = por definir';

const ValidateToken = (token) => {
    return new Promise(resolve => {
        let invalid_token = false;
        axios.get(`${host}/validateToken`, {
            headers: {
                'Authorization': token
            }
        })
        .then(res => {
            if(res.status !== 200) {
                invalid_token = true;
            }
        })
        .catch(err => {
            invalid_token = true;
        }).then(() => {
            if(invalid_token) {
                resolve(false);
            }

            resolve(true);
        });
    });
}

const Backend = axios.create({
    baseURL: host,
    timeout: 0,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: (data, headers) => {
        const token = localStorage.getItem("jwt_token");
        ValidateToken(token)
        .then(validToken => {
            if(!validToken) {
                JwtAuthService.logout();
                window.location.href = '/';
            }
        });

        headers['Authorization'] = token;
        return JSON.stringify(data);
    }
});

export default Backend;
export { host, ValidateToken };