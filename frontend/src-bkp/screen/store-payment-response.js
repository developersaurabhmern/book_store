import React, { component } from 'react';
import axios from "axios";
import queryString from 'query-string';
class Store_Payment_Response extends React.Component {
  constructor(props) {
    super(props);
    // Declaring refs
    this.state = {
      ReferenceID: '',
      order_id: '',
      OrderAmount: '',
      TransactionStatus: '',
      transaction_id: '',
      PaymentMode: '',
      Message: '',
      TransactionTime: ''
    }
  }
  componentDidMount() {
    // alert("d");
    document.title = "BFC Store - Payment Confirmation"
    // console.log(window.location.search);
    // Output: '?id=1&type=cornPizza'

    const parsed = queryString.parse(window.location.search);
    // console.log(parsed);

    // Output: {id: "1", type: "cornPizza"}
    this.setState({ ReferenceID: parsed.ReferenceID });
    // alert(parsed.ReferenceID);
    const config3 = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
      }
    }
    let datab1 = {
      "ReferenceID": parsed.ReferenceID
    }

    // console.log(datab1)//ICIC0001263


    axios.post("https://prodigyreactserver.herokuapp.com/paymentSuccess", datab1, config3)

      .then(resash1 => {
        this.setState({ order_id: resash1.data.resapidata.data[0].order_id });
        this.setState({ OrderAmount: resash1.data.resapidata.data[0].OrderAmount });
        this.setState({ TransactionStatus: resash1.data.resapidata.data[0].TransactionStatus });
        this.setState({ transaction_id: resash1.data.resapidata.data[0].transaction_id });
        this.setState({ PaymentMode: resash1.data.resapidata.data[0].PaymentMode });
        this.setState({ Message: resash1.data.resapidata.data[0].Message });
        this.setState({ TransactionTime: resash1.data.resapidata.data[0].TransactionTime });
        // if (resash1.data.resapidata.data[0].TransactionStatus == "SUCCESS") {
          axios.post("/api/updateOrder", datab1, config3)
            .then(resdata => {
              console.log(resdata);
            })
        // }

        // console.log(resash1)
      })
      .catch(err => console.error("we have a following error", err));

    window.localStorage.removeItem('cartItems');
  }

  render() {

    return (
      <div >
        <style>
          {`
          .admin-nav{
            display:none;
            }
            .main-sidebar{
            display:none;
            }
            .front-nav{
                display:none;
            }
            .section-footer{
                display:none;
            }
            .navTop{
                display:none;
             }
         
          `}
        </style>

        {/* inner page banner */}
        <div id="inner_banner" className="section inner_banner_section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/">Bookstore</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Payment Status</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* end inner page banner */}
        {/* section */}
        <div className="section padding_layout_1 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="full">
                  <div className="main_heading text_align_center">
                    <h2 className="text-blue text-center">Payment Status</h2>
                    {/*<p class="large">Demo tag Line Here !</p>*/}
                  </div>
                </div>
              </div>
            </div>

            <div className="row about_blog">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    {/* { (this.state.TransactionStatus==='SUCCESS')? (
	  <div class="alert alert-success" role="alert">
			  Payment successfull ! 	
			 
	  </div>): (this.state.TransactionStatus==='FAILED')?(
                  <div class="alert alert-success" role="alert">
    
    Payment failed !

  </div> ): (<div> <br />  </div>)} */}
                    <table className="table">
                      <tr>
                        <td className="font-weight-bold">Order ID</td>
                        <td className="font-weight-bold text-success">{this.state.order_id}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Order Amount</td>
                        <td className="font-weight-bold text-success"> {this.state.OrderAmount}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Reference ID</td>
                        <td className="font-weight-bold text-success">{this.state.transaction_id}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Transaction Status</td>
                        <td className="font-weight-bold text-success">{this.state.TransactionStatus}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Payment Mode</td>
                        <td className="font-weight-bold text-success">{this.state.PaymentMode}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Message</td>
                        <td className="font-weight-bold text-success">{this.state.Message}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold">Transaction Time</td>
                        <td className="font-weight-bold text-success">{this.state.TransactionTime}</td>
                      </tr>
                      <tr>
                        <td className="font-weight-bold"></td>
                        <td className="font-weight-bold text-success"><a href="/" className="text-primary btn btn-light mb-4 text-right"><i className="fa fa-arrow-left"></i> Go Back</a></td>
                      </tr>
                    </table>
                    <hr />
                  </div>

                  <div className="col-lg-6 col-sm-12 ">
                    <img className="img-fluid" src="https://bfcpublications.com/assets/images/payment.svg" alt="payment-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end section */}

      </div>
    )
  }

}
export default Store_Payment_Response
