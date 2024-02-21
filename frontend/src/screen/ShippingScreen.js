import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Axios from "axios";
import { addToCart, savePaymentMethod } from '../actions/cartActions';
import { useSelector, useDispatch } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { createOrder } from '../actions/orderActions';
import Cookies from 'universal-cookie';
import { detailsUser } from '../actions/userActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ORDER_CREATE_RESET } from '../constants/orderConstants';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

import { deleteAddress } from '../actions/userActions';

let urlss = 'api/users/islogin';
var incaddress = 0;

const useFetch = (url, urlss) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {

            const response = await fetch(url);
            const json = await response.json();

            // let ss = await fetch(urlss);
            // const json1 = await ss.json();
            let john = localStorage.getItem('userInfo');
            let results = JSON.parse(john)
            //console.log(response)
            console.log("result......", results)

            ///  datalet=json[0].address;
            setData(results.address);
            var data1;

        }
        fetchData();
    }, [url]);

    //  console.log("ddddddddddddddddd",data)

    return data;

};





function ShippingScreen(props) {

    const notify = (arg) => {
        if (arg === 'exclu?do') {
            toast.success('Produto removido com sucesso')
            console.log('TESTE')
        } else if (arg === 'noaddress') {
            toast.error('Please Select any address!')
        }
    }

    const userSignin = useSelector((state) => state.userSignin);
    //const [data32, setState32] = useState([]);  

    const [commentdd, setCommentdd] = useState('');

    const { userInfo } = userSignin;
    const userId = userInfo._id;
    // console.log("22 eeeeffff sss",userId);

    useEffect(() => {
        var sel = "111sdfasdf";
        var idd = userId;

        $.ajax({
            url: "api/users/getscheme",
            type: "GET",
            data: { folio: sel, id: idd },
            success: function (res3) {
                setCommentdd({ commentdd: res3 });

                //   console.log("22 eeeeffff ",commentdd, result);  
            }.bind(this),
            error: function (jqXHR) {
                console.log(jqXHR);
            }
        });


        //console.log("11 eeeeffff ",res3);     



    }, []);



    const URL = 'api/users/';
    const result2 = useFetch(URL);
    const [comment, setComment] = useState('');



    let add = userInfo.address;
    //console.log("addresssaa ", add)

    let url = 'api/users/';
    let result = useFetch(URL);
    // console.log("dedededede", result)
    //   {JSON.stringify(result)}

    //  console.log("responsessssssss")

    //   let url = 'http://localhost:3000/api/users/';    
    //    const result = useFetch(URL);
    //{JSON.stringify(result)}



    const userDetails = useSelector((state) => state.userDetails);
    const { loading1, error1, user } = userDetails;

    let vadd_id = {
        myid: comment
    }
    localStorage.setItem('village_address_id', comment);

    //  console.log("the userDetails is user ", comment, user)

    if (!userInfo) {
        props.history.push('/signin');
    }

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;


    // cartItems.map(item =>

    //     console.log("carrrrttt", item.mrp*item.qty)
    //     )

    //   console.log("carrrrttt", cartItems)
    const { shippingAddress } = cart;

    const orderCreate = useSelector((state) => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const [name, setName] = useState(shippingAddress.name);
    // const [lname, setLname]=useState(shippingAddress.lname);
    // const [email, setEmail]=useState(shippingAddress.email);
    const [mobile, setMobile] = useState(shippingAddress.mobile);


    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [state, setState] = useState(shippingAddress.state);
    const [pincode, setPinCode] = useState(shippingAddress.pincode);
    const [landmark, setLandmark] = useState(shippingAddress.landmark);
    const [role, setRole] = useState(shippingAddress.role);
    const [radio, setRadio] = useState(shippingAddress.radio);

    const [place, setPlace] = useState(shippingAddress.place);
    const [paymentMethod, setPaymentMethod] = useState('cashfree');

    // const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12

    const itemsPrice = cartItems.reduce((a, c) => a + c.mrp * c.qty, 0);
    // const shippingPrice = itemsPrice > 100 ? 0 : 10;
    // const shippingPrice = 50;
    const shippingPrice = cartItems.length * 50;

    console.log("shipping", itemsPrice)
    // const taxPrice = 0.18 * itemsPrice;
    const taxPrice = 0.18 * itemsPrice;
    const totalPrice = itemsPrice + shippingPrice;

    // const [state, setState] = useState([])
    // useEffect(() => {
    //     fetch("/api/data").then(
    //         res => setState(res.data)
    //     )
    // })


    const dispatch = useDispatch();

    const submitrHandler = (e) => {

        e.preventDefault();
        let sso = "Jai"
        let ssk = "saini11222@gmail.com";
        //dispatch(saveShippingAddress({ssk,ssk,ssk, sso, sso, sso, sso, sso, sso, sso}));
        dispatch(saveShippingAddress({ userId, name, mobile, address, pincode, landmark, city, state, place, paymentMethod }));
        alert("Address Save Successfully");
        window.location.reload();
        // dispatch(createOrder({ ...cart, orderItems: cart.cartItems,orderItemsT:totalPrice,kitemsPrice:itemsPrice,kshippingPrice:shippingPrice, ktaxPrice:taxPrice }));
    }

    const submitHandler2 = (e) => {
        // window.alert('hiii handle2')
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    };



    const placeOrderHandler = () => {
        if ($("input[name='radio_address']").is(':checked')) {
            dispatch(createOrder({ ...cart, orderItems: cart.cartItems, orderItemsT: totalPrice, kitemsPrice: itemsPrice, kshippingPrice: shippingPrice, ktaxPrice: taxPrice }));
            return true;
        }
        else {
            notify('noaddress')
        }
        // return false;
        var refColors = [{ ...cart, orderItems: 'yellow', orderItemsT: totalPrice }];

        // alert($("input[name='radio_address']:checked").val());
        //    if ($('input[name="radio_address"]:checked')) {
        //        alert ("checked")
        //        return false;
        //    }
        //    else{
        //     alert (" no not checked")
        //    return false;
        //    }     
        // TODO: dispatch place order action
    };



    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
        if (success) {
            let villagedata = {
                vname: 'mankapur'
            }
            localStorage.setItem('village_address', JSON.stringify(villagedata));

            props.history.push(`/order/${order._id}`);
            dispatch({ type: ORDER_CREATE_RESET });
        }
    }, [dispatch, order, props.history, success, , userInfo._id]);


    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = productDelete;


    // const deleteHandler = (item) => {
    //     /// TODO: dispatch delete action
    //     // dispatch(deleteProdcut(product._id));
    //     window.alert(item._id)
    //     if (window.confirm('Are you sure to delete?')) {

    //       dispatch(deleteAddress(item._id));
    //       }
    //   };

    const deleteHandler = (product) => {
        /// TODO: dispatch delete action
        // dispatch(deleteProdcut(product._id));
        //window.alert(product._id)
        if (window.confirm('Are you sure to delete?')) {
            //  alert("Agam the Boss");
            dispatch(deleteAddress(product._id));
        }
    };


    return (

        <>
            <style jsx>{`
    .admin-nav{
      display:none;
    }
    .main-sidebar{
      display:none;
    }
.btn-block span{
    color:#000;
}

.checkout .form-control {
    display: block;
    width: 100%;
    font-size: 14px!important;
    line-height: 1.5;
    color: #1f1e1e!important;}
.new {
padding: 50px;
}
.mt-8{
    margin-top:5rem;
}
.new .form-group {
display: block;
margin-bottom: 15px;
}

.new .form-group input {
padding: 0;
height: initial;
width: initial;
margin-bottom: 0;
display: none;
cursor: pointer;
}

.new .form-group label {
position: relative;
cursor: pointer;
}

.new .form-group label:before {
content:'';
-webkit-appearance: none;
background-color: transparent;
border: 2px solid #0079bf;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
padding: 6px;
display: inline-block;
position: relative;
vertical-align: middle;
cursor: pointer;
margin-right: 5px;
border-radius:50%;
}

.new .form-group input:checked + label:after {
content: '';
display: block;
position: absolute;
top: 2px;
left: 9px;
width: 6px;
height: 14px;
border: solid #0079bf;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}
.exist_add{
  display: contents;
}
.Checkoutsection{
    position:relative;
}
.Yorder{
    position:sticky;
    top:100px;
}
.hide{
    display: none;
}
.delay-delivery {
    color: #fd0909 !important;
    padding-left: 4px !important;
    font-weight: bold;
}
.required:after {
    content:" *";
    color: red;
  }
    `}</style>
            <section className="main_section checkout">
                <div className="container">
                    <div className="row d-flex Checkoutsection">
                        <div className="col-md-7">
                            <div className="form_block Yorder w-100">
                                <h3 className="text-center">BILLING DETAILS</h3>
                                <p className="delay-delivery">The shipments deliverable to our patrons are experiencing delays due to disruptions in the logistical supply chain, caused by the ongoing pandemic. We are working to get this resolved. In the meantime, please bear with us.</p>
                                <div className="accordion accordion_course_details" id="accordionExample">
                                    <div className="card">
                                        <div className="card-header" id="headingOne41">
                                            <h6 className="mb-0 d-flex">
                                                <button className="btn btn-block text-left d-flex" type="button" data-toggle="collapse" data-target="#collapseOne165" aria-expanded="true" aria-controls="collapseOne">
                                                    <span>Add New Address</span>
                                                    <span className="ml-auto">
                                                        <p className="mb-0"><small>
                                                            <i className="fa fa-arrow-down text-muted ml-3" /></small>
                                                        </p>
                                                    </span>
                                                </button>
                                            </h6>
                                        </div>
                                        <div id="collapseOne165" className="collapse" aria-labelledby="headingOne41" data-parent="#accordionExample">
                                            <div className="card-body">
                                                {/* <MyForm/> */}
                                                <form id="add-form" class="lineform380f" onSubmit={submitrHandler}>
                                                    <div className="form-row">
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="fname" className="required">Name</label>
                                                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control input-sm" name="name" required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="fname" className="required">Mobile</label>
                                                            <input type="text" onChange={(e) => setMobile(e.target.value)} value={mobile} className="form-control input-sm" name="mobile" required />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label htmlFor="fname" className="required">Address</label>
                                                            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} className="form-control input-sm" name="address" required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="fname" className="required">City/Disrict/Town</label>
                                                            <input type="text" className="form-control" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="lname" className="required">State</label>
                                                            <input type="text" className="form-control" name="state" value={state} onChange={(e) => setState(e.target.value)} required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label htmlFor="lname" className="required">Pincode</label>
                                                            <input type="text" className="form-control" name="pincode" onChange={(e) => setPinCode(e.target.value)} value={pincode} required />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <label className="required" htmlFor="lname">Landmark</label>
                                                            <input type="text" className="form-control" name="landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} required />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <label className="required" htmlFor="lname">Name this address</label>
                                                            <input type="text" className="form-control" name="addname" value={place} placeholder="(Home, Office, Other etc...)" onChange={(e) => setPlace(e.target.value)} required />
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-md-12 pull-right mb-5">
                                                                <button type="submit" className="btn btn-success" data-dismiss="modal">Save</button>
                                                                {/* <input type="submit" className="btn btn-sm btn-danger" value="Save1"  id="myBtn"/> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="new">


                                            <form onSubmit={placeOrderHandler}>
                                                {loading1 ? (
                                                    <LoadingBox></LoadingBox>
                                                ) : error1 ? (
                                                    <MessageBox variant="danger">{error}</MessageBox>

                                                ) : (
                                                    <>

                                                        <div>

                                                            {/* {JSON.stringify(result)
                                    } */}


                                                            {/* { commentdd.map(function(item){
                                    console.log('looooppppp',  item);  
                                        
                                        }) } */}

                                                        </div>
                                                        {

                                                            // setCommentdd({ commentdd: res3 });
                                                            console.log("22 eeeeffff  lness", commentdd.commentdd)


                                                        }

                                                        {commentdd.commentdd && commentdd.commentdd.map(item =>
                                                            <>
                                                                <div class="hide">{incaddress++}</div>
                                                                {/* <input type="radio" name="radio_address" value={item._id} id="comment" onChange={(e) => setComment(e.target.value)} className="mr-3" required /> */}
                                                                {/* <input type="radio" name="radio_address" value={item._id} onChange={(e) => setComment(e.target.value)} className="mr-3 defaultchecked" required defaultChecked={incaddress == 1 ? true : false} /> */}
                                                                <input type="radio" name="radio_address" value={item._id} onChange={(e) => setComment(e.target.value)} className="mr-3 defaultchecked" required  />


                                                                {/* <input type="radio" name="radio_address" required value={item._id} id="comment" onChange={(e) => setComment(e.target.value)} className="mr-3"/>  */}


                                                                <div className="exist_add">
                                                                    <small>{item.place} </small>
                                                                    <p className="mt-3"><b className="mr-4 mt-2">{item.name}</b> <b className="mt-2">{item.mobile}</b></p>
                                                                    <p>{item.address},{item.landmark} {item.city}, {item.state}-<strong>{item.pincode}</strong></p>

                                                                    {/* <a href="#" onClick={() => deleteHandler(item)}  class="btn btn-danger"><i class="fas fa-trash"></i></a> */}

                                                                    {/* <a href="#" onClick={() => deleteHandler(item)}  class="btn btn-danger"><i class="fas fa-trash"></i></a> */}

                                                                    {/* <a href="user/#{item._id}/delete">Delete</a> */}

                                                                </div><hr />
                                                            </>
                                                        )}


                                                    </>

                                                )}

                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        placeOrderHandler();
                                                        notify();
                                                    }}
                                                    className="primary block button btn btn-danger"
                                                    disabled={cartItems.length === 0}
                                                    value="Register"
                                                    id="btnSubmit"
                                                >

                                                    Place Order
                                                    {loading &&
                                                        <LoadingBox></LoadingBox>
                                                    }
                                                    {error &&
                                                        <MessageBox variant="danger">{error}</MessageBox>
                                                    }
                                                </button>

                                                <ToastContainer position="top-left" className="mt-8" />



                                                {/* <button
                                    type="button"
                                    onClick={placeOrderHandler}
                                    className="primary block button"
                                    disabled={cartItems.length === 0 || 'input[type=radio]:checked'}
                                    value="Register"
                                    id="btnSubmit"
                                    >
                                    
                                    Place Order
                                    {loading && 
                                    <LoadingBox></LoadingBox>
                                    }
                                    {error && 
                                    <MessageBox variant="danger">{error}</MessageBox>
                                    }
                                </button> */}

                                                {/* <input type="submit"></input> */}
                                            </form>

                                            {/* <form id="display_data" class="nouseeeeeeeee" onSubmit={submitrHandler}>
                                {loading1 ? (
                                <LoadingBox></LoadingBox>
                                ) : error1 ? (
                                <MessageBox variant="danger">{error}</MessageBox>
                                ) : (  
                                <>
                                {add.map(item =>
                                <div className="form-group" id="tblFruits">
                                    <input type="checkbox" value="1" id="html1" required/>
                                    <label htmlFor="html1">
                                        <div className="exist_add">
                                            <small>{item.place}</small>
                                            <p className="mt-3"><b className="mr-4 mt-2">{item.name}</b> <b className="mt-2">{item.mobile}</b></p>
                                            <p>{item.address},{item.landmark} {item.city}, {item.state}-<strong>{item.pincode}</strong></p>
                                        </div>
                                    </label>
                                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                                </div>
                                )}
                                </>
                                )}
                               
                                <div className="form-group">
                                    <input type="checkbox" id="html" required/>
                                    <label htmlFor="html" for="agree">
                                        <div className="exist_add">
                                            {/* <small>{user.name}</small><br /> */}
                                            {/* <small>{place}</small>
                                            <p className="mt-3"><b className="mr-4 mt-2">{name}</b> <b className="mt-2">{mobile}</b></p>
                                            <p>{address}-{landmark} {city}, {state}-<strong>{pincode}</strong></p>
                                        </div>
                                    </label>
                                </div> */}

                                            {/* <div id="userInfo"></div> */}

                                            {/* <button
                                    type="submit"
                                    onClick={placeOrderHandler}
                                    className="primary block button"
                                    disabled={cartItems.length === 0}
                                    id="login_button"
                                    >
                                    Deliver Here
                                    {loading && 
                                    <LoadingBox></LoadingBox>
                                    }
                                    {error && 
                                    <MessageBox variant="danger">{error}</MessageBox>
                                    }
                                </button> */}

                                            {/* </form> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="Yorder">
                                <h3 className="text-center">YOUR ORDER</h3>
                                <table className="table">
                                    <tbody>
                                        {
                                            cartItems.length === 0 ?
                                                <div>
                                                    Cart is empty
                                                </div>
                                                :
                                                cartItems.map(item =>
                                                    <tr>
                                                        <td>{item.name} x {item.qty}(Qty)</td>
                                                        <td>₹ {item.mrp * item.qty}</td>
                                                    </tr>
                                                )}
                                        <tr>
                                            <td>Item Price</td>
                                            <td>₹ {itemsPrice}</td>
                                        </tr>

                                        <tr>
                                            <td>Shipping</td>
                                            <td>₹ {shippingPrice}</td>
                                        </tr>
                                        <tr>
                                            <td><b>Total Price</b></td>
                                            <td><b>₹ {totalPrice}</b></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                {/* <form onSubmit={submitHandler2}>
                        <div  style={{display:'none' }}>
                            <input type="radio" name="paymentMethod"  id="paymentMethod" onChange={(e) =>setPaymentMethod(e.target.value)} value="cashfree" checked /> Cashfree <span>
                            <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width={50} />
                            </span>
                        </div>
                    </form> */}



                                {/* <button
                        type="button"
                        onClick={placeOrderHandler}
                        className="primary block button"
                        disabled={cartItems.length === 0}
                        value="Register"
                        id="btnSubmit"

                        >
                        Place Order
                        {loading && 
                        <LoadingBox></LoadingBox>
                        }
                        {error && 
                        <MessageBox variant="danger">{error}</MessageBox>
                        }
                    </button> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ShippingScreen;
