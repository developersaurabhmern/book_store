import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import HomeScreen from '../screen/HomeScreen';
import Sidefilters from './Sidefilters';

export default function SearchScreen(props) {

  console.log("ccccccfffff",useParams());
  const { name = 'all' } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts({ name: name !== 'all' ? name : '' }));
  }, [dispatch, name]);
  console.log("ssssssssssssss",productList.products)
  return (
      <>
      <style jsx>{`
      
      .admin-nav{
        display:none;
      }.main-sidebar{
        display:none;
      }
     
    `}</style>

    
<section className="main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="book_section">

              {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div style={{display:'none'}}>{products.length} Results Found</div>
          
        )}
        
      </div>
      
      <div className="row top">
      
        <div className="col-3">
          
        <Sidefilters/>
        </div>



        
        <div className="col-9">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}>

                  </Product>

                ))}
              </div>
            </>
          )}
    </div>
             </div>
          </div>
        </div>
        </div>
</section>
    </>
  );
}
