import Axios from "axios";
import Cookie from "js-cookie";
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from "../constants/cartConstants";



const addToCartAct= ( productId, qty,aAct) => async(dispatch, getState)=>{

	//alert(productId+"-------"+qty+"aact"+aAct);
	// alert(aAct);
	try{
		const { data }= await Axios.get("/api/products/"+productId);
		dispatch({
			type: CART_ADD_ITEM, payload:{
				product: data._id,
				name: data.name,
				image:data.image,
				countInStock:data.countInStock,
				mrp:data.mrp,
				author_name:data.author_name,
				qty
			}
		})
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
	}catch(error){
		
	}
}



const addToCart= ( productId, qty) => async(dispatch, getState)=>{

//	alert(productId+"-------"+qty);
	try{
		const { data }= await Axios.get("/api/products/"+productId);
		dispatch({
			type: CART_ADD_ITEM, payload:{
				product: data._id,
				name: data.name,
				image:data.image,
				countInStock:data.countInStock,
				mrp:data.mrp,
				author_name:data.author_name,
				qty
			}
		})
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
	}catch(error){
		
	}
}




const removeFromCart= (productId) =>(dispatch, getState)=>{
	dispatch({type: CART_REMOVE_ITEM, payload:productId})

	// const {cart: {cartItems}}= getState();
	// 	Cookie.set("cartItems", JSON.stringify(cartItems));
		localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
		
}

// const saveShippingAddress=(data) =>(dispatch) =>{
// 	dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload:data});
// 	localStorage.setItem('shippingAddress', JSON.stringify(data));
// }

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
  };


  const saveShippingAddress=(data2) =>async(dispatch) =>{
	dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload:data2});
	const {data} = await Axios.post("/api/users/addaddress",data2);
	console.log("my cat action data ", data2)
	//localStorage.setItem('shippingAddress', JSON.stringify(data));
}

export { addToCart, removeFromCart , saveShippingAddress, addToCartAct}
