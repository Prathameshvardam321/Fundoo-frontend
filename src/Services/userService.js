import axios from 'axios'
let url = "http://localhost:3001/api/v1/users/"
export default async function SignInAxiosPost(obj) {
    let response = await axios.post(url, obj)
    return response
}
export async function SignInAxiosGet(obj) {
    let response = await axios.post(url + 'login', obj)
    console.log(response);
    return response
}

