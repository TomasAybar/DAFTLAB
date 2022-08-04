import axios from 'axios';
const url="https://daftlab-back.herokuapp.com"

const userActions={
    signUp:(userData)=>{
        // console.log(userData);
        return async(dispatch, getState)=>{
            const user= await axios.post(`${url}/api/signUp` , {userData})
            // console.log(user)
            dispatch({
                type:"MESSAGE" ,
                payload: {
                    //ALERT
                    view:true,
                    message:user.data.message, 
                    success:user.data.success
            }
            })

            return user
            // console.log(user.data.message)
        }
    },

    signIn:(userSignIn)=>{
        return async (dispatch, getState)=>{
            const user= await axios.post(`${url}/api/login`,{userSignIn})
            if(user.data.success) {
                localStorage.setItem('token', user.data.response.token)
                dispatch({type:'USER', payload: user.data.response.userData})
            }   
            else{
                    dispatch({
                            type:"MESSAGE" ,
                            payload: {
                                view:true,
                                message:user.data.message, 
                                success:user.data.success
                        }
                        
                    })
                    // console.log(user.data.message)
                }
                return user
        
        }
    },

    logOut:(closeUser)=>{
        return async(dispatch, getState)=>{
            const user= await axios.post(`${url}/api/logOut`,{closeUser})
            localStorage.removeItem('token')
            dispatch({type:'USER', payload:null})
            return user
        }
    },

    verifyToken:(token)=>{
        return async (dispatch, getState) =>{
            const res = await axios.get(`${url}/api/logintoken`, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(user=>{
                    if(user.data.success) {
                        dispatch({type:'USER', payload:user.data.response})
                        dispatch({
                            type:'MESSAGE',
                            payload:{
                                view:true,
                                message:user.data.message,
                                success:user.data.success
                            }
                        })

                        return res
                    } 
                        else{
                            localStorage.removeItem('token')
                        }
                }).catch(error=>{
                    if(error.status === 401){
                        dispatch({
                            type:'MESSAGE',
                            payload:{
                                view:true,
                                message:"Please do your login again" ,
                                success:false
                            }
                        })
                        localStorage.removeItem('token')
                    }
                    
                })
        }
    },

    paypalEmail: (email, data) => {

        // console.log(email, data);
        
        return async (dispatch, getState) => {
            await axios.post(url + '/api/email', { email, data })
        }
    }
}
export default userActions