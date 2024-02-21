import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrders } from '../../actions/orderActions';
import LoadingBox from '../LoadingBox';
import $ from 'jquery';
import MessageBox from '../MessageBox';
import img1 from "../../../src/images/img1.jpg"
import '../../../node_modules/aos/dist/aos.css';

// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { Calendar } from 'react-date-range';

import ReactHTMLTableToExcel from 'react-html-table-to-excel';


var createReactClass = require('create-react-class');

export default function Orderlist(props) {

  let i = 1;

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);
  const deleteHandler = (order) => {
    // TODO: delete handler
  };
var datetoday =  "order-details"+new Date($.now());
//console.log("datetoday",datetoday);

  var s = 1;

  
  return (
    <>
      <style jsx>{`
      .front-nav{
        display:none;
      }
      .section-footer{
        display:none;
      }
      .admin-nav{
        display:block!important;
      }
      .booklist img{
          height:80px;
          width:80px;
          border-radius:50%;
      }
      .viewbookimage{
        height:200px;
      }
      .viewbookimage img{
        height:100%;
      }
	  .navTop{
        display:none;
      }
      .download-table-xls-button{
        padding: 4px;
        margin: 12px;
        background: #7f7f7f;
        color: #fff;
        border-radius: 6px;
      }
      .allbtn{
        margin-top: 34px;
      }
	  
	  
    `}</style>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Order List</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Order List</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Order List</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">

                    <div className="row mb-3">
                      <div className="col-md-2">
                        <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button allbtn"
                          table="table-to-xls"
                          filename={datetoday}
                          sheet={datetoday}
                        />
                      </div>
                      <div className="col-md-3">
                        <label>From :</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-3">
                        <label>To :</label>
                        <input type="date" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <button className="btn btn-success mt-4" id="filter">Filter</button>
                        <button id="clearFilter" class="button radius secondary btn btn-success mt-4 ml-2">Clear Filter</button>
                      </div>
                      <div className="col-md-2"></div>
                    </div>



                    {loading ? (
                      <LoadingBox></LoadingBox>
                    ) : error ? (
                      <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                      <div class="table-responsive">
                        <table class="table table-bordered" id="table-to-xls">
                          <thead>
                            <tr>
                              <th>S. No.</th>
                              <th>ID</th>
                              <th>User</th>
                              <th>Mobile</th>
                              <th>Email</th>
                              <th>Book</th>
                              <th>Total MRP</th>
                              <th>Address</th>
                              <th>Date/Time</th>
                              <th>Status</th>
                            </tr>

                          </thead>
                          <tbody className="booklist">

                            {orders.map((order) => (

                              <tr key={order._id}>


                                {/* <td>{console.log("the data is ",order)}</td> */}
                                <td>{s++}</td>
                                <td>{order._id}</td>
                                <td>
                                  {order.user.name} {order.user.lname}
                                </td>
                                <td>
                                  {order.user.email}
                                </td>
                                <td>
                                  {order.user.mobile}
                                </td>
                                {/* <td><img src={order.orderItems[0].image}/></td> */}
                                <td>
                                  <b>Title - </b> {order.orderItems.map((o, i) => (<>{++i}.{o.name}<br /></>))}
                                </td>
                                <td>{order.totalPrice}</td>
                                <td>{order.user.addresss.map((address) => (<>{address.name}, {address.mobile}, {address.address}, {address.city}, {address.state}, {address.pincode}</>))}</td>
                                <td>{order.createdAt.substring(0, 10)}</td>
                                <td class="text-center py-0 align-middle">
                                  <span class="badge badge-warning text-white">Ordered</span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
  );

};


