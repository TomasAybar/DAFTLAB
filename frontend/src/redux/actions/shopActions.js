// import axios from 'axios';

const shopActions = {


    addToShop: (product) => {

        return async (dispatch, getState) => {

            dispatch({
                type: 'ADDTOSHOP',
                payload: { product },
            })
        }
    },

    deleteToShop: (product) => {

        return async (dispatch, getState) => {

            dispatch({
                type: 'DELETETOSHOP',
                payload: { product },
            })
        }
    },

    verifyShopStorage: (shopStorage) => {

        return async (dispatch, getState) => {

            dispatch({
                type: 'VERIFYSHOPSTORAGE',
                payload: { shopStorage },
            })
        }
    },

    deleteAllToShop: () => {

        return async (dispatch, getState) => {

            dispatch({
                type: 'DELETEALLTOSHOP',
                // payload: { product },
            })
        }
    },

    deleteOneProduct: (product) => {
        return async (dispatch, getState) => {

            dispatch({
                type: 'DELETEONEPRODUCT',
                payload: { product },
            })


        }
    },

}

export default shopActions;