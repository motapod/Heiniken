import axios from 'axios';


const host = 'http://localhost:3100/api';
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


export { host };