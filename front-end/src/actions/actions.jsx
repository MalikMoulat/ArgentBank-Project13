import axios from "axios"
import { getTokenUser, getUserData } from "../feature/reducer"


/**
 * La fonction fetchToken reucpère et stock le token quand l'utilisateur se connecte
 * et stocke le token dans le localStorage et dans le state redux
 * @function
 * @async
 * @param {object} userLogin - Identifiant et mot de passe de l'utilisateur
 * @param {function} setVar - Variable qui contiendra le token (useSate()) 
 * @param {function} dispatch - useDipatch()
 * @param {function} navigate - useNavigate()
 * @returns {promise}
 */
export const fetchToken = async ( userLogin, setVar, dispatch, navigate ) => {
    
    const errorDomMessage = document.getElementById('error-message-login')

    return axios({
        method: 'post',
        url: "http://localhost:3001/api/v1/user/login",
        headers: {
            "Content-Type": "application/json"
        },
        data: userLogin
    }).then(result => {
            console.log(result.data.status)

            setVar(result.data.body.token)
            dispatch(getTokenUser(result.data.body.token))

            window.localStorage.setItem('TOKEN', result.data.body.token)

            if(result.data.body.token){
                navigate('/user')
    
            }else{
                console.log('NO TOKEN')
            }

        }
    ).catch(error => {  
                        console.error(error)

                        if(error.response.data.status === 400){
                            errorDomMessage.innerHTML = 'Invalid Fields'
                        }if(error.response.data.status === 500){
                            errorDomMessage.innerHTML = 'Internal Server Error'
                        }
                        
                        return Promise.reject(error)
                    })
}

/**
 * La fonction fetchData récupère les données de l'utilisateur une fois identifié
 * @function
 * @async
 * @param {string} token - token de l'utilisateur
 * @param {function} setVar - variable qui contiendra les données de l'utilisateur (useSate())
 * @param {function} dispatch - useDispath()
 * @returns {promise}
 */
export const fetchData = async ( token, setVar, dispatch ) => {

    return axios({
        method: 'post',
        url: "http://localhost:3001/api/v1/user/profile",
        headers: {
            Authorization: `Bearer ${token}`,
          },
    }).then(result => {
            dispatch(getUserData(result.data.body))
            setVar(result.data.body)
        }
    ).catch(error => { console.error(error); return Promise.reject(error); })
}