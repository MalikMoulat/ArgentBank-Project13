import axios from 'axios'

const loginUrl = "http://localhost:3001/api/v1/user/login"
const profileUrl = "http://localhost:3001/api/v1/user/profile"
const userLogin = {
                'email': "tony@stark.com",
                'password': "password123"
                }


const login = async () => {
    return axios({
                method: 'post',
                url: loginUrl,
                headers: {
                    "Content-Type": "application/json"
                },
                data: userLogin
            }).then(result => {

                console.log(result.data.body)

                axios({
                    method: 'post',
                    url: profileUrl,
                    headers: {
                        Authorization: `Bearer ${result.data.body.token}`,
                      }
                }).then(result => {
                    console.log(result.data.body)
                })


                return  result.data.body; })
        .catch(error => { console.error(error); return Promise.reject(error); });
}

login()





console.log("console login :", login())