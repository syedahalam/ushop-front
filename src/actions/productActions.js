import axios from 'axios';
import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,

	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

// here thunk is going to make async call
export const listProducts = () => async(dispatch) => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST });
        //make an api call through axios
        const { data } = await axios.get(
					'https://scary-mummy-74832.herokuapp.com/products/'
				);

        dispatch({ type: PRODUCT_LIST_SUCCESS,
                    payload: data
                });
        
    } catch (error) {
        dispatch({
					type: PRODUCT_LIST_FAIL,
					// error.response && error.response.data.message  -<changed  after user auth in backend
					payload:
						error.response && error.response.data.detail
							? error.response.data.detail
							: error.message,
				});
    }
}


export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: PRODUCT_DETAILS_REQUEST });
		//make an api call through axios
		const { data } = await axios.get(`/products/${id}`);

		dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({
			type: PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.detail
					? // error.response && error.response.data.message  -<changed  after user auth in backend
					  error.response.data.detail
					: error.message,
		});
	}
};