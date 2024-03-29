import Axios from 'axios';
import React, { useEffect, Suspense, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import banner1 from "../../src/images/bn1.jpg"
import { Img, useImage } from 'react-image';
import noimage from "../images/noimage-white.jpg"
import banner2 from "../../src/images/bn2.jpg"
import g1 from "../../src/images/genre/bedtime.png"
import g2 from "../../src/images/genre/couple.png"
import g3 from "../../src/images/genre/politics.png"
import g4 from "../../src/images/genre/dish.png"
import fiction from "../../src/images/genre/fiction.png"
import nonfiction from "../../src/images/genre/nonfiction.png"
import g6 from "../../src/images/genre/graduate.png"
import g7 from "../../src/images/genre/biography.png"
import g8 from "../../src/images/genre/motivational.png"
import g9 from "../../src/images/genre/quran.png"
import g11 from "../../src/images/genre/poetry.png"
import g12 from "../../src/images/genre/literature.png"

// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
import Carousel from 'react-leaf-carousel';




let bm1 = "https://oldweb.bfcpublications.com/storage/app/public/images/book/book-1615633037.png"



var ages = [32, 33, 16, 40];
let ff = '/static/media/1610446667013.jpg';
function checkAdult(age) {
  return age >= 18;
}



function pNR(page) {
  if (page.fc == 'New Release') {
    console.log("ffffffffffff=-===================-------------", page.fc)
    return page;
  }
}

function pMP(page) {
  if (page.fc == 'Most Popular') {
    console.log("ffffffffffff=-===================-------------", page.fc)
    return page;
  }
}


function pUL(page) {
  if (page.fc == 'Upcoming Launches') {
    console.log("ffffffffffff=-===================-------------", page.fc)
    return page;
  }
}


let x = ages.filter(checkAdult);
//alert(x);

function MyImageComponent() {
  const { src } = useImage({
    srcList: '../../src/images/books/b1.jpeg',
  })

  return <img src={src} />
}

function FrontPage(props) {


  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;

  let pxNR = (products || []).filter(pNR);


  var pxMP = (products || []).filter(pMP)
  pxMP = pxMP.slice(0, 5);

  var pxUL = (products || []).filter(pUL)
  pxUL = pxUL.slice(0, 5);
  var lastPNR = pxNR.slice(0, 5);
  console.log(lastPNR)

  const dispatch = useDispatch();

  useEffect(() => {
    //  dispatch(listProducts());     
    dispatch(listProducts({}));
  }, [dispatch]);

  const params = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }
  return (
    <>
      <style jsx>{`
  .admin-nav{
     display:none;
   }
   .main-sidebar{
     display:none;
   }
   .bfcstore_banner{
 width: 100%;
 margin-top: 88px;
}
 .bfcstore_banner .swiper-slide{
   min-width: 100%;
 }
 .bfcstore_banner .swiper-slide img{
   min-width: 100%;
   height: 400px;
   object-fit: cover;
 }
 .bfcstore_banner .swiper-slide {
   text-align: center;
   font-size: 18px;
   background: #fff;
   width: 100%;

   /* Center slide text vertically */
   display: -webkit-box;
   display: -ms-flexbox;
   display: -webkit-flex;
   display: flex;
   -webkit-box-pack: center;
   -ms-flex-pack: center;
   -webkit-justify-content: center;
   justify-content: center;
   -webkit-box-align: center;
   -ms-flex-align: center;
   -webkit-align-items: center;
   align-items: center;
 }
 .storecategory{
   padding: 20px 0;
 }
 .storecategory .swiper-books-front {
 margin-left: auto;
 margin-right: auto;
 position: relative;
 overflow: hidden;
 list-style: none;
 padding: 0;
 z-index: 1;
}
.swiper-newrelease{
 margin-left: auto;
   margin-right: auto;
   position: relative;
   overflow: hidden;
   list-style: none;
   padding: 10px 0;
   z-index: 1;

}
.storecategory .swiper-slide .single_book img{
 height: 138px;
 /*background-image: linear-gradient(90deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0666667) 4%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, rgba(0,0,0,0.0666667) 96%, rgba(0,0,0,0.2) 100%);*/
}
.home-slider{
 padding: 60px 0;
}
.newrelease .single_book img{
 box-shadow: 0 0 12px #b2aaaa;
}
//.swiper-newrelease .single_book{
// height: 350px;
// width:250px;
//}
.swiper-newrelease .single_book{
 height: 350px;
 width:247px;
 margin-left:20px;
}

.swiper-newrelease .single_book img{
 height: 100%;
 width: 94%;
}
.ss-heading{
 padding: 0 35px;
}
.ss-heading h2 {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-align: center;
   -ms-flex-align: center;
   align-items: center;
   font-weight: 500;
}
.ss-heading h2 .view_more_header {
 font-size: 16px;
 margin-left: auto;
}
.swiper-button-next, .swiper-button-prev {
 background-color: #de5966;
 padding: 20px;
 border-radius: 4%;
 color: #fff;
}
.swiper-books-front a{
 color:#000;
}
.ss-sm-swiper-book{
	margin-left: auto;
	    margin-right: auto;
	    position: relative;
	    overflow: hidden;
	    list-style: none;
	    padding: 10px 0;
	    z-index: 1;
}
    .ss-sm-swiper-book .swiper-slide {
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 300px;
      height: 361px;

    }

    .swiper-containers {
  height: 400px;
	margin-left: auto;
	    margin-right: auto;
	    position: relative;
	    overflow: hidden;
	    list-style: none;
	    padding: 10px 0;
	    z-index: 1;

}

.swiper-containers .swiper-slide img {
  display: none;
}

.swiper-containers .swiper-slide {
  background: #eee;
  border: 1px solid #000;
  width:250px;
}

.swiper-containers .swiper-slide:nth-child(even) {
  background: blue;
}

.swiper-slide {
    flex-shrink: 0;
     width: auto!important;
    height: 100%;
    position: relative;
    transition-property: transform;
}
.banner-image .swiper-slide {
  width: 100% !important;
}
.InfiniteCarouselSlide img {
    height: 350px;
}
.bfcstore_banner .swiper-slide img{
  height :auto !important;
}

.storecategory img.img-fluid.mb-3 {
  width: 160px;
  height: auto !important;
}
@media screen and (max-width: 600px) {
  .InfiniteCarouselSlide img {
	height: 150px !important;
  }
}
 `}</style>
      <section className="bfcstore_banner">
        <div className="container-fluid">
          <div className="row">
            <div className="swiper-container">
              <div className="swiper-wrapper banner-image">
                <div className="swiper-slide">
                  <img src={banner1} className="img-fluid" />
                </div>
                <div className="swiper-slide">
                  <img src={banner2} className="img-fluid" />
                </div>
              </div>
              {/* Add Arrows */}
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
            </div>
          </div>
        </div>
      </section>
      <section className="storecategory">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="category">
                <div className="swiper-books-front swiper-container-initialized swiper-container-horizontal">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Fiction">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={fiction} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Fiction</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Non Fiction">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={nonfiction} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Nonfiction</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Literature">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g12} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Literature</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Academic">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g6} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Academics</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Romance">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g2} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Romance</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* <div className="swiper-slide swiper-slide-active">
                   <a href="/Booklist">
                     <div className="featured_colm border-right-0">
                       <div className="single_book text-center">
                         <img src={g4} className="img-fluid mb-3" />
                       </div>
                       <div className="book_name mt-2 text-center">
                         <h6>Cookery, Food &amp; Wine</h6>
                       </div>
                     </div>
                     </a>
                   </div> */}
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Politics">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g3} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Politics</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Biography">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g7} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Biography</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Motivational">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g8} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Motivational</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Poetry">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g11} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Poetry</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="swiper-slide swiper-slide-active">
                      <a href="/Booklist?name=Short Stories">
                        <div className="featured_colm border-right-0">
                          <div className="single_book text-center">
                            <img src={g1} className="img-fluid mb-3" />
                          </div>
                          <div className="book_name mt-2 text-center">
                            <h6>Short Stories</h6>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="swiper-button-next" />
                  <div className="swiper-button-prev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-slider">
        {/* <section className="home-slider" style={{ backgroundColor: '#eee' }}> */}
        <div className="container-fluid">
          <div className="row">
            <div className="col mb-2 ss-heading">
              <h2>New Release<span className="view_more_header"><a className="text-muted" href="Booklist?name=New Release">View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="newrelease">

              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (<>


                <Carousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={false}
                  showSides={true}
                  sidesOpacity={.5}
                  sideSize={.4}
                  slidesToScroll={4}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {lastPNR.map((product) =>

                  (<div className="swiper-slide swiper-slide-active" key={product._id}>
                    <div className="featured_colm border-right-0">
                      <div className="single_book">
                        <a href={'product/' + product._id}>
                          <img className="img-fluid mb-3" src={product.image} alt={product.name} />
                        </a>
                      </div>
                    </div>
                  </div>




                  ))}

                </Carousel>

              </>
              )}
            </div>

          </div></div>
      </section>


      <section className="home-slider" style={{ backgroundColor: '#eee' }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col mb-2 ss-heading">
              <h2>Most Popular<span className="view_more_header"><a className="text-muted" href="Booklist?name=Most Popular">View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="newrelease">

              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (<>


                <Carousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={false}
                  showSides={true}
                  sidesOpacity={.5}
                  sideSize={.4}
                  slidesToScroll={4}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {pxMP.map((product) => (

                    <div className="swiper-slide swiper-slide-active" key={product._id}>

                      <div className="single_book">
                        {/* <Link to={'product/'+product._id}>
                          <img src={product.image} className="img-fluid mb-3" alt={product.name} />
                             </Link> */}
                        <a href={'product/' + product._id}>
                          <img src={product.image} className="img-fluid mb-3" alt={product.name} />
                        </a>


                      </div>
                    </div>
                  ))}
                </Carousel>
              </>
              )}
            </div>
          </div>
        </div>


      </section>


      <section className="home-slider">
        <div className="container-fluid">
          <div className="row">
            <div className="col mb-2 ss-heading">
              <h2>Upcoming Launches <span className="view_more_header"><a className="text-muted" href="Booklist?name=Upcoming Launches">View More <i className="fa fa-arrow-right icon" /></a></span> </h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="newrelease">


              {loading ? (
                <LoadingBox></LoadingBox>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (

                <Carousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                      },
                    },
                  ]}
                  dots={false}
                  showSides={true}
                  sidesOpacity={.5}
                  sideSize={.4}
                  slidesToScroll={4}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {pxUL.map((product) => (

                    <div className="swiper-slide swiper-slide-active" key={product._id}>
                      <div className="featured_colm border-right-0">
                        <div className="single_book">
                          {/* <Link to={'product/'+product._id}>
                        <img src={product.image} className="img-fluid mb-3" alt={product.name} />
                            </Link> */}
                          <a href={'product/' + product._id}>
                            <img src={product.image} className="img-fluid mb-3" alt={product.name} />
                          </a>

                        </div>
                      </div>
                    </div>
                  ))}

                </Carousel>
              )}

            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default FrontPage;