import axios from 'axios'

const shoesActions={
    
    getShoes:()=>{

        return async(dispatch,getState)=>{

            const res= await axios.get('https://daftlab-back.herokuapp.com/api/shoes')
            //dispatch({type:'GET_SHOES', payload:res.data.response})
            return res
        }
    },

    getOneShoe: (id) => {

        return async (dispatch, getState) => {
            
            const res = await axios.get(`https://daftlab-back.herokuapp.com/api/shoes/${id}`)
            dispatch({ type: 'GET_ONE_SHOE', payload: res.data.response })
            return res
        }

    },

    getShoesByBrand: (brandID) => {
    // console.log("🚀 ~ file: shoesActions.js ~ line 25 ~ brandID", brandID)

        return async (dispatch, getState) => {
            try {

                let answer = await axios.get(`https://daftlab-back.herokuapp.com/api/shoesByBrand/${brandID}` )
                //dispatch({type: 'GET_BRAND_SHOE', payload: answer.data.response })
                return { 
                    success: true, response: answer.data
                }

            } catch (error) {
                return {
                    success: false, response: error.messagge
                }
            }
        }
    },
    
    getShoesByType: (typeID) => {
    // console.log("🚀 ~ file: shoesActions.js ~ line 42 ~ typeID", typeID)

        return async (dispatch, getState) => {
            try {
                let answer = await axios.get(`https://daftlab-back.herokuapp.com/api/shoesByType/${typeID}`)
                // dispatch({type: 'GET_TYPE_SHOE', payload: answer.data.response })
                return { 
                    success: true, response: answer.data
                }

            } catch (error) {
                return {
                    success: false, response: error.messagge
                }
            }
        }
    },
    
    filterShoes:(value)=>{
        return(dispatch, getState)=>{
            dispatch({type:"FILTER_SHOES", payload:value})
        }
    },
}
export default shoesActions