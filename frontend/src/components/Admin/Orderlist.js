import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../actions/orderActions";
import LoadingBox from "../LoadingBox";
import $ from "jquery";
import Axios from "axios";
import MessageBox from "../MessageBox";
import img1 from "../../../src/images/img1.jpg";

import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

export default function Orderlist(props) {
  let i = 1;

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const [clear, setClear] = useState(orders);
  const [filter, setFilter] = useState();

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);
  console.log("333333333333", orders);

  const Clear = () => {
    $("#order").css("display", "block");
    $("#filter_tr").css("display", "none");
    try {
      let data = [];
      orders.map((order) => {
        console.log("val", order);
        data.push(order);
        //setFilter(data);
      });
    } catch (err) {
      console.log("aaaaaaaaaaaaaaa", err);
    }
  };

  // console.log("1111111111111111",user)
  const Submit = (e) => {
    e.preventDefault();
    setStart();
    setEnd();
    try {
      setFilter(undefined);
      $("#order").css("display", "none");
      $("#filter_tr").css("display", "block");
      let data = [];
      orders.map((val) => {
        let newDate = new Date(val.createdAt);
        let ss = $("#start").val();
        let ee = $("#end").val();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        let dd = year + "-" + month + "-" + date;
        let date1 = new Date(dd);
        let start1 = new Date(ss);
        let end1 = new Date(ee);
        //  console.log(end1)
        // if((date1>start1) && (date1<end1)){
        // let date= new Date(parts[2], parseInt(parts[1]) - 1, parts[0]);
        if (date1 >= start1 && date1 <= end1) {
          console.log("val", date1);
          data.push(val);
          setFilter(data);
        }
      });
    } catch (err) {
      console.log("aaaaaaaaaaaaaaa", err);
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrders());
  }, [dispatch]);

  const columns = [
    {
      name: "S .No",
      selector: (row, index) => index + 1,
      // selector: "i++",
      //  sortable: true,
      cell: (row) => <div>{i++}</div>,
    },
    {
      name: "ID",
      selector: "_id",
      // sortable: true,
    },
    {
      name: "Name",
      selector: "user.name",
      // sortable: true,
      cell: row => <div> {row.user.name} {row.user.lname}</div>
    },
    {
      name: "Email",
      selector: "user.email",
      //sortable: true,
      // cell: d => <span>{d.genres.join(', ')}</span>,
    },
    {
      name: "Mobile",
      selector: "user.mobile",
      sortable: true,
    },
    {
      name: "Book",
      selector: "name",
      // sortable: true,
      cell: row => <div> {row.orderItems[0].name}</div>
    },
    {
      name: "Total MRP",
      selector: "totalPrice",
      sortable: false,

      reorder: true,
    },
    {
      name: "Address",
      selector: "user.addresss",
      //sortable: true,
      cell: (d) => (
        <div className="address_data">
          {d.user.addresss.map((address) => (
            <>
              {address.name}, {address.mobile}, {address.address},{" "}
              {address.city}, {address.state}, {address.pincode}
            </>
          ))}
        </div>
      ),
    },

    {
      id: "createdAt",
      name: "Date",
      selector: "createdAt",
      sortable: true,
      reorder: true,
      cell: (row) => <div>{row.createdAt.substring(0, 10)}</div>,
    },

    {
      name: "Status",
      sortable: true,
      cell: (row) => (
        <div class="text-center py-0 align-middle">
          <span class="badge badge-warning text-white">Ordered</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <style jsx>{`
        .front-nav {
          display: none;
        }
        .section-footer {
          display: none;
        }
        .admin-nav {
          display: block !important;
        }
        .booklist img {
          height: 80px;
          width: 80px;
          border-radius: 50%;
        }
        .viewbookimage {
          height: 200px;
        }
        .viewbookimage img {
          height: 100%;
        }
        .navTop {
          display: none;
        }
        .download-table-xls-button {
          padding: 4px;
          margin: 12px;
          background: #7f7f7f;
          color: #fff;
          border-radius: 6px;
        }
        .allbtn {
          margin-top: 34px;
        }
        #filter_tr, .rdt_TableHeader {
          display: none;
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
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Order List</li>
                </ol>
              </div>
            </div>
          </div>
          {/* /.container-fluid */}
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
					<div className="col-md-2"></div>
                      {/* <div className="col-md-2">
                        <ReactHTMLTableToExcel
                          id="test-table-xls-button"
                          className="download-table-xls-button allbtn"
                          table="table-to-xls"
                          filename={datetoday}
                          sheet={datetoday}
                        /> 
                      </div> */}
                      <div className="col-md-3">
                        <label>From :</label>
                        {/* <input type="date" value="dateFrom"  className="form-control" /> */}
                        <input
                          type="date"
                          name="start"
                          class="form-control"
                          id="start"
                        />
                      </div>
                      <div className="col-md-3">
                        <label>To :</label>
                        <input
                          type="date"
                          class="form-control"
                          id="end"
                          name="end"
                        />

                        {/* <input type="date" value="dateTo"className="form-control" /> */}
                      </div>
                      <div className="col-md-4">
                        <button
                          className="btn btn-success mt-4"
                          onClick={Submit}
                          id="filter"
                        >
                          Filter
                        </button>
                        <button
                          id="clearFilter"
                          class="button radius secondary btn btn-success mt-4 ml-2"
                          onClick={() => Clear([])}
                        >
                          Clear Filter
                        </button>
                      </div>
                      {/* <div className="col-md-2"></div> */}
                    </div>

                    {loading ? (
                      <LoadingBox></LoadingBox>
                    ) : error ? (
                      <MessageBox variant="danger">{error}</MessageBox>
                    ) : (
                      <div>
                        <div id="filter_tr">
                          <DataTableExtensions
                            data={filter}


                            columns={columns}>
                            <DataTable
                              // noHeader
                              exportHeaders={true}
                              defaultSortField="user.createdAt"
                              defaultSortAsc={false}
                              pagination

                              highlightOnHover
                            />
                          </DataTableExtensions>
                        </div>
                        <div id="order">
                          <DataTableExtensions data={orders} columns={columns}>
                            <DataTable
                              // noHeader
                              exportHeaders={true}
                              defaultSortField="user.createdAt"
                              defaultSortAsc={false}
                              pagination
                              highlightOnHover
                            />
                          </DataTableExtensions>
                        </div>
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
}
