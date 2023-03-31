import axios from 'axios'

import { useDispatch } from 'react-redux'
import { getUserData } from '../feature/reducer'
import { getTokenUser } from '../feature/reducer'

const loginUrl = "http://localhost:3001/api/v1/user/login"
const profileUrl = "http://localhost:3001/api/v1/user/profile"
const userLogin = {
                'email': "tony@stark.com",
                'password': "password123"
                }


// const login = async () => {

//     // const dispatch = useDispatch()

//     return axios({
//                 method: 'post',
//                 url: loginUrl,
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 data: userLogin
//             }).then(result => {

//                 // console.log(result.data.body)

//                 axios({
//                     method: 'post',
//                     url: profileUrl,
//                     headers: {
//                         Authorization: `Bearer ${result.data.body.token}`,
//                       }
//                 }).then(result => {
//                     // console.log(result.data.body)
//                 })


//                 return  result.data.body; })
//         .catch(error => { console.error(error); return Promise.reject(error); });
// }

// login()
const userLogin2 = {
    'email': "tony@stark.com",
    'password': "password123"
    }

export const fetchToken = async ( userLogin, setVar ) => {
    

    return axios({
        method: 'post',
        url: "http://localhost:3001/api/v1/user/login",
        headers: {
            "Content-Type": "application/json"
        },
        data: userLogin
    }).then(result => {
            // console.log(result)

            setVar(result.data.body.token)
            
            if(result.data.body.token){
                console.log('TOKEN OK')
    
            }else{
                console.log('NO TOKEN')
            }

        }
    ).catch(error => { console.error(error); return Promise.reject(error); })
}

export const fetchData = async ( token, setVar ) => {

    return axios({
        method: 'post',
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
            Authorization: `Bearer ${token}`,
          },
    }).then(result => {
            console.log(result.data.body)

            // setVar(result.data.body)
        }
    ).catch(error => { console.error(error); return Promise.reject(error); })
}




export default fetchToken