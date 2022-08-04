import axios from 'axios';


const adminActions = {
  

    addShoe: (data) => {

        // console.log(data);

        return async (dispatch, getState) => {

            const res = await axios.post(`https://daftlab-back.herokuapp.com/api/shoes`, { data })

            return res;
        }

    },

    removeShoe: (idShoe) => {

        return async (dispatch, getState) => {

            const res = await axios.delete(`https://daftlab-back.herokuapp.com/api/shoes/${idShoe}`)

            return res;
        }
    }

}

export default adminActions