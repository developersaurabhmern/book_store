import React, { useEffect,useState} from 'react';
//import data from '../data';
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { userSigninReducer } from '../reducers/userReducers';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Sidefilters from './Sidefilters';
// import { Link, useParams } from 'react-router-dom';
//import Image, { Shimmer } from 'react-shimmer'
// let blCateArr='';
let blCateArr=[''];
let blLangArr=[''];
let blBindArr=[''];


const Searchproduct = (props) => {
  return(
  <>
  <h1>Hello</h1>
  </>
   ) }
  
const myFil=( mArry,mIndex,arVal)=>{ 

//checkedOnecfc  =mIndex

//arVal  ==fiction

//mArry =blCateArr

  if(mIndex===false ){
    //alert(0);
    mArry.push(arVal);
  }else{
    var filteredAry =mArry= mArry.filter(function(e) { return e !== arVal })
   // alert("sdfsf"+filteredAry);      
  } 
  return mArry;


}

const myFunction= ()=>{

    var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none"; 
            }
        }
}

// shop filter
$(function () {
  'use strict'

  $("[data-trigger-shop]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger-shop');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $(".book-card-inner").removeClass("isting-badges");
          $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".btn-close").click(function (e) {
      $(".navbar-collapse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  });
}) 
// filter filter 
$(function () {
  'use strict'

  $("[data-trigger-filter]").on("click", function () {
      var trigger_id = $(this).attr('data-trigger-filter');
      $(trigger_id).toggleClass("show");
      $('body').toggleClass("offcanvas-active");
  });

  // close if press ESC button 
  $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("overlay-active");
      }
  });

  // close button 
  $(".phone_close").click(function (e) {
      $(".ss-phone-clse").removeClass("show");
      $("body").removeClass("offcanvas-active");
  });


}) 



export default function HomeScreen(props){
//  alert("f")

 console.log("fffffffffffffppppsssssssssssss",useParams()); 
  //console.log("fffffffffffffffffffffffssssssssssssssssssssssssssssssssssssss",useParams());
  // const { textname } = useParams();
  // const { myfilter } = useParams();
   //const [myfilter, setMyfilter] = useState('');

  // alert(key)

  const dispatch = useDispatch();


  
// const [nfiction, setNfiction]= useState();
// const [nfiction, setNfiction] = useState(false);
// const updateOne = () => setCheckedOne(!checkedOne);
//let blCateArr=['agam'];
const [checkedOnefc, setCheckedOnefc] = useState(false);
//const [checkedOnerm, setCheckedOnerm] = useState(false);

  const [checkedOne, setCheckedOne] = useState(false);
  const updateOne = () => setCheckedOne(!checkedOne);
  
  const [checkedOnecrm, setCheckedOnecrm] = useState(false);
  const [checkedOnecnf, setCheckedOnecnf] = useState(false);
  const [checkedOnemot, setCheckedOnemot] = useState(false);
  const [checkedOnemotfood, setCheckedOnemotfood] = useState(false);
  const [checkedOnemotromance, setCheckedOnemotromance] = useState(false);
  const [checkedOnemotbio, setCheckedOnemotbio] = useState(false);
  const [checkedOnemotpoetry, setCheckedOnemotpoetry] = useState(false);
  const [checkedOnemotstory, setCheckedOnemotstory] = useState(false);
  const [checkedOnemotother, setCheckedOnemotother] = useState(false);
  const [checkedOnecfc, setCheckedOnecfc] = useState(false);
  const [checkedOneclt, setCheckedOneclt] = useState(false);
  const [checkedOneaca, setCheckedOneaca] = useState(false);
  const [checkedOnelhi, setCheckedOnelhi] = useState(false);
  const [checkedOnelen, setCheckedOnelen] = useState(false);

  const [checkedOnebhd, setCheckedOnebhd] = useState(false);
  const [checkedOnebpb, setCheckedOnebpb] = useState(false);
  
  


  const updateOnecm = (eee) => {      
     
   

    if(eee=='fiction'){   
    setCheckedOnecfc(!checkedOnecfc);    
    blCateArr= myFil(blCateArr,checkedOnecfc,eee);    
  }


  if(eee=='romance'){ 
    setCheckedOnecrm(!checkedOnecrm);    
    blCateArr= myFil(blCateArr,checkedOnecrm,eee);    
  }
  if(eee=='non fiction'){ 
    setCheckedOnecnf(!checkedOnecnf);    
    blCateArr= myFil(blCateArr,checkedOnecnf,eee);    
  }

  if(eee=='motivational'){ 
    setCheckedOnemot(!checkedOnemot);    
    blCateArr= myFil(blCateArr,checkedOnemot,eee);    
  }
  
  if(eee=='food'){ 
    setCheckedOnemotfood(!checkedOnemotfood);    
    blCateArr= myFil(blCateArr,checkedOnemotfood,eee);    
  }

  if(eee=='romance'){ 
    setCheckedOnemotromance(!checkedOnemotromance);    
    blCateArr= myFil(blCateArr,checkedOnemotromance,eee);    
  }
  if(eee=='bio'){ 
    setCheckedOnemotbio(!checkedOnemotbio);    
    blCateArr= myFil(blCateArr,checkedOnemotbio,eee);    
  }
  if(eee=='poetry'){ 
    setCheckedOnemotpoetry(!checkedOnemotpoetry);    
    blCateArr= myFil(blCateArr,checkedOnemotpoetry,eee);    
  }
  if(eee=='story'){ 
    setCheckedOnemotstory(!checkedOnemotstory);    
    blCateArr= myFil(blCateArr,checkedOnemotstory,eee);    
  }
  if(eee=='other'){ 
    setCheckedOnemotother(!checkedOnemotother);    
    blCateArr= myFil(blCateArr,checkedOnemotother,eee);    
  }
  
  if(eee=='literature'){ 
     setCheckedOneclt(!checkedOneclt);    
     blCateArr= myFil(blCateArr,checkedOneclt,eee);    
   }

   if(eee=='academic'){   
     setCheckedOneaca(!checkedOneaca);    
     blCateArr= myFil(blCateArr,checkedOneaca,eee);    
   }

   if(eee=='Hindi'){        
     setCheckedOnelhi(!checkedOnelhi);    
     blLangArr= myFil(blLangArr,checkedOnelhi,eee);    
   }

   if(eee=='English'){        
    setCheckedOnelen(!checkedOnelen);    
    blLangArr= myFil(blLangArr,checkedOnelen,eee);    
  }

  if(eee=='Paperback'){        
    setCheckedOnebpb(!checkedOnebpb);    
    blBindArr= myFil(blBindArr,checkedOnebpb,eee);    
  }

  if(eee=='Hardcover'){        
   setCheckedOnebhd(!checkedOnebhd);    
   blBindArr= myFil(blBindArr,checkedOnebhd,eee);    
 }
  
 let kname='';
 if(eee=='ook'){   
 // setCheckedOnecfc(!checkedOnecfc);    
  //blCateArr= myFil(blCateArr,checkedOnecfc,eee);    
  let kname='book';
}



if(blCateArr.length==0){
  blCateArr="";
}


if(blLangArr.length==0){
  blLangArr="";
}


if(blBindArr.length==0){
  blBindArr="";
}

    dispatch(listProducts({ name: kname,category:blCateArr,blanguage:blLangArr,bBind:blBindArr,  }));
  
    if(eee=='fiction---research'){
      // setCheckedOnefc(!checkedOnefc);
       setCheckedOnecfc(!checkedOnecfc);
       blCateArr.push('fiction');
   
      blCateArr= myFil(blCateArr,checkedOnecfc,'fiction');

     }
  
  
  }


 
  const updateOnefc = (eee) => { 
    let categorye='';
  //alert(eee);

    setCheckedOnefc(!checkedOnefc);

    if(checkedOnefc===false){
      categorye=eee

    }else{
      categorye=''

    }
    dispatch(listProducts({ name: name !== 'all' ? name : '',category:categorye }));
    }
  


  const [checkedTwo, setCheckedTwo] = useState(true);
  const updateTwo = () => setCheckedTwo(!checkedTwo);

  const [checkedOnef, setCheckedOnef] = useState(false);
  const updateOnef = () => setCheckedOnef(!checkedOnef);

// const [loading, setLoading]= useState(false);
// const [error, setError] = useState(false);


const productList=useSelector(state => state.productList)


const { loading, error, products } =productList;

console.log("sasasa", products)

 const { name = 'all', category = 'all' } = useParams();

  useEffect(() =>{
    dispatch(listProducts({ name: name !== 'all' ? name : '' }));

  }, [])

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    return `/booklist/${filterCategory}/name/${filterName}`;
  };
 
	return (
    <>
    <style jsx>{`
     
      .admin-nav{
        display:none;
      }.main-sidebar{
        display:none;
      }
     .book-card .book_detail {
        min-height: 180px;
      }
	  .infinite-carousel-button-previous, .infinite-carousel-button-next{
	    background: #de5966;
		min-height: 54px;
		min-width: 40px;
		padding-top: 8px;
	  }
    `}</style>

    <section className="main_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Bookstore</a></li>
                <li class="breadcrumb-item active" aria-current="page">Book List</li>
              </ol>
            </nav>
          </div>
        </div>
      <div className="row">
  
          <div className="col-md-12">
            <div className="book_section">
              <div className="row">

              {/* <Searchproduct/> */}
                 
                <div className="col-md-3">
                <Sidefilters/>
                  {/* <div className="side_categories">
                    <h5 className="text-center">Genre</h5>

        <input type="text" id="myInput" onInput={myFunction} placeholder="Search for Category.." title="Type in a name" 
                    autoComplete="off" />

                    <ul id="myUL" className="list-unstyled">
      
                          <li key="fiction"><a> 
                          <input type="checkbox" name="cfc"
                                  label="Checkbox"
                                  checked={checkedOnecfc}
                                  onChange={(e) => updateOnecm('fiction')} />   Fiction  </a></li>

                          <li key="non-fiction"><a> 
                          <input type="checkbox" name="cnf"
                                  label="Checkbox"
                                  checked={checkedOnecnf}
                                  onChange={(e) => updateOnecm('non fiction')} /> Non-Fiction  </a></li>

                          <li key="literature"> <a>  
                          <input type="checkbox" name="clt"
                                  label="Checkbox"
                                  checked={checkedOneclt}
                                  onChange={(e) => updateOnecm('literature')} /> Literature </a></li>

                                                <li key="academic">    <a>
                          <input type="checkbox" name="aca"
                                  label="Checkbox"
                                  checked={checkedOneaca}
                                  onChange={(e) => updateOnecm('academic')} /> Academic </a> </li>


                          <li key="motivational">    <a>
                          <input type="checkbox" name="mot"
                                  label="Checkbox"
                                  checked={checkedOnemot}
                                  onChange={(e) => updateOnecm('motivational')} /> Motivational </a> </li>

                          <li key="romance">    <a>
                          <input type="checkbox" name="romance"
                                  label="Checkbox"
                                  checked={checkedOnemotromance}
                                  onChange={(e) => updateOnecm('romance')} /> Romance </a> </li>

                          <li key="bio">    <a>
                          <input type="checkbox" name="bio"
                                  label="Checkbox"
                                  checked={checkedOnemotbio}
                                  onChange={(e) => updateOnecm('bio')} /> Biography </a> </li>

                          <li key="poetry">    <a>
                          <input type="checkbox" name="poetry"
                                  label="Checkbox"
                                  checked={checkedOnemotpoetry}
                                  onChange={(e) => updateOnecm('poetry')} /> Poetry </a> </li>

                          <li key="story">    <a>
                          <input type="checkbox" name="story"
                                  label="Checkbox"
                                  checked={checkedOnemotstory}
                                  onChange={(e) => updateOnecm('story')} /> Short Stories </a> </li>

                          <li key="other">    <a>
                          <input type="checkbox" name="other"
                                  label="Checkbox"
                                  checked={checkedOnemotother}
                                  onChange={(e) => updateOnecm('other')} /> Others </a> </li>
                                                            
                      </ul>
                    <hr />
                    <h5 className="text-center">More Filter</h5>
                    
                    <div className="mfilter">Language</div>
                    <ul id="myULs" className="list-unstyled">

                      <li key="Hindi">    <a> 
<input type="checkbox" 
        label="Checkbox"
        checked={checkedOnelhi}
        onChange={(e) => updateOnecm('Hindi')} />Hindi </a></li>

<li key="English">    <a> 
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnelen}
        onChange={(e) => updateOnecm('English')} />English </a></li>


                    </ul>
                    <hr/>
                    <div className="mfilter">Binding</div>
                    <ul id="myULs" className="list-unstyled">
                      
                    <li key="Hardcover">  <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebhd}
        onChange={(e) => updateOnecm('Hardbound')} />Hardcover </a> </li>

<li key="Paperback">    <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebpb}
        onChange={(e) => updateOnecm('Paperback')} />Paperback   </a></li>

                    </ul>
                    <hr/>
                    <ul id="myULs" className="list-unstyled">
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Best sellers </a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Trending this week</a></li>
                      <li><a href="#" className="text-dark"><i className="fa fa-angle-double-right" /> Upcoming Lauches</a></li>
                    </ul>
                  </div> */}
                </div>
                
                <div className="col-md-9 list-wrapper" id="myList">


                {loading ? (
                  <LoadingBox></LoadingBox>
                ) : error ? (
                  <MessageBox variant="danger">{error}</MessageBox>
                ) : (
                  <div className="row">
                    {products.length === 0 && (
                    <div className="col-md-6 offset-md-3"> <MessageBox> No Book Found</MessageBox></div>
                    )}
                    
                  {
                    products.map((product) =>(
                    
                    <Product key={product._id} product={product}></Product> 
                    )
                  )
            
                  }

                  </div>
                )}
                  
                  <br />
                  {/* <div id="pagination-container" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        </section>

        

        {/* mobile filter  */}
      <div className="container-fluid mobile-filter">
        <div className="row">
          <div className="col-md-12">
            <div className="grid-container">
              <div className="grid-item text-center navbar-toggler" data-trigger-shop="#main_shop"><i class="fa fa-list-ul" aria-hidden="true"></i> Genre</div>
              <div className="grid-item ml-2 navbar-toggler" data-trigger-filter="#main_filter"><i class="fa fa-filter" aria-hidden="true"></i> Filter</div>
            </div>
            <div className="navbar-collapse" id="main_filter">
              <div className="offcanvas-header mt-3">
                <h5 className="py-2 text-white">
                  <span className="btn-close close_btn"><i className="fa fa-arrow-left" /></span>
                </h5>
              </div>
              <div className="ss-book-sidebar-mobile shadow-sm"> 
              <div className="side_category">
              <h5 className="text-center">More Filter</h5>
                    
                    <div className="mfilter">Language</div>
                    <ul id="myULfilter" className="list-unstyled">
                      
                      
                      {/* <li><a><input type="checkbox" name="fl-colour"/> Hindi</a></li> */}

                      <li key="Hindi">    <a> 
<input type="checkbox" 
        label="Checkbox"
        checked={checkedOnelhi}
        onChange={(e) => updateOnecm('Hindi')} />Hindi </a></li>

<li key="English">    <a> 
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnelen}
        onChange={(e) => updateOnecm('English')} />English </a></li>


                    </ul>
                    <hr/>
                    <div className="mfilter">Binding</div>
                    <ul id="myULfilter" className="list-unstyled">
                      
                    <li key="Hardcover">  <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebhd}
        onChange={(e) => updateOnecm('Hardcover')} />Hardcover </a> </li>

<li key="Paperback">    <a>  
<input type="checkbox"  
        label="Checkbox"
        checked={checkedOnebpb}
        onChange={(e) => updateOnecm('Paperback')} />Paperback   </a></li>

                    </ul>
                    </div>
<div className="offcanvas-header p-2">
                          <span className="btn-close close_btn"><button className="btn btn-sm btn-success">Apply Filter</button></span>
                      </div>
              </div>
            </div>
            <div className="navbar-collapse" id="main_shop">
              <div className="offcanvas-header mt-3">
                <h5 className="py-2 text-white">
                  <span className="btn-close close_btn"><i className="fa fa-arrow-left" /></span>
                </h5>
              </div>
              <div className="ss-book-sidebar-mobile shadow-sm"> 
              <div className="side_category">
                    <h5 className="text-center">Genre</h5>

                    <ul id="myULfilter" className="list-unstyled">
      
                          <li key="fiction"><a> 
                          <input type="checkbox" name="cfc"
                                  label="Checkbox"
                                  checked={checkedOnecfc}
                                  onChange={(e) => updateOnecm('fiction')} />   Fiction  </a></li>

                          <li key="non-fiction"><a> 
                          <input type="checkbox" name="cnf"
                                  label="Checkbox"
                                  checked={checkedOnecnf}
                                  onChange={(e) => updateOnecm('non fiction')} /> Non-Fiction  </a></li>

                          <li key="literature"> <a>  
                          <input type="checkbox" name="clt"
                                  label="Checkbox"
                                  checked={checkedOneclt}
                                  onChange={(e) => updateOnecm('literature')} /> Literature </a></li>

                                                <li key="academic">    <a>
                          <input type="checkbox" name="aca"
                                  label="Checkbox"
                                  checked={checkedOneaca}
                                  onChange={(e) => updateOnecm('academic')} /> Academic </a> </li>


                          <li key="motivational">    <a>
                          <input type="checkbox" name="mot"
                                  label="Checkbox"
                                  checked={checkedOnemot}
                                  onChange={(e) => updateOnecm('motivational')} /> Motivational </a> </li>

                          <li key="romance">    <a>
                          <input type="checkbox" name="romance"
                                  label="Checkbox"
                                  checked={checkedOnemotromance}
                                  onChange={(e) => updateOnecm('romance')} /> Romance </a> </li>

                          {/* <li key="food">    <a>
                          <input type="checkbox" name="food"
                                  label="Checkbox"
                                  checked={checkedOnemotfood}
                                  onChange={(e) => updateOnecm('food')} /> Cookery, Food & Wine </a> </li> */}

                          <li key="bio">    <a>
                          <input type="checkbox" name="bio"
                                  label="Checkbox"
                                  checked={checkedOnemotbio}
                                  onChange={(e) => updateOnecm('bio')} /> Biography </a> </li>

                          <li key="poetry">    <a>
                          <input type="checkbox" name="poetry"
                                  label="Checkbox"
                                  checked={checkedOnemotpoetry}
                                  onChange={(e) => updateOnecm('poetry')} /> Poetry </a> </li>

                          <li key="story">    <a>
                          <input type="checkbox" name="story"
                                  label="Checkbox"
                                  checked={checkedOnemotstory}
                                  onChange={(e) => updateOnecm('story')} /> Short Stories </a> </li>

                          <li key="other">    <a>
                          <input type="checkbox" name="other"
                                  label="Checkbox"
                                  checked={checkedOnemotother}
                                  onChange={(e) => updateOnecm('other')} /> Others </a> </li>
                                                            
                      </ul>
                    <div className="offcanvas-header p-2">
                          <span className="btn-close close_btn"><button className="btn btn-sm btn-success">Apply Filter</button></span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>




        </>
  )
}

