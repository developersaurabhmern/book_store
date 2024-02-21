import React, { useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { useSelector, useDispatch } from 'react-redux'
import { listProducts } from '../actions/productActions'
import { userSigninReducer } from '../reducers/userReducers';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
let blCateArr=[''];
let blLangArr=[''];
let blBindArr=[''];
export default function Sidefilters(){
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
             
           
        
            if(eee=='Fiction'){   
            setCheckedOnecfc(!checkedOnecfc);    
            blCateArr= myFil(blCateArr,checkedOnecfc,eee);    
          }
        
        
          if(eee=='Romance'){ 
            setCheckedOnecrm(!checkedOnecrm);    
            blCateArr= myFil(blCateArr,checkedOnecrm,eee);    
          }
          if(eee=='Non Fiction'){ 
            setCheckedOnecnf(!checkedOnecnf);    
            blCateArr= myFil(blCateArr,checkedOnecnf,eee);    
          }
        
          if(eee=='Motivational'){ 
            setCheckedOnemot(!checkedOnemot);    
            blCateArr= myFil(blCateArr,checkedOnemot,eee);    
          }
          
          if(eee=='Food'){ 
            setCheckedOnemotfood(!checkedOnemotfood);    
            blCateArr= myFil(blCateArr,checkedOnemotfood,eee);    
          }
        
          if(eee=='Romance'){ 
            setCheckedOnemotromance(!checkedOnemotromance);    
            blCateArr= myFil(blCateArr,checkedOnemotromance,eee);    
          }
          if(eee=='Biography'){ 
            setCheckedOnemotbio(!checkedOnemotbio);    
            blCateArr= myFil(blCateArr,checkedOnemotbio,eee);    
          }
          if(eee=='Poetry'){ 
            setCheckedOnemotpoetry(!checkedOnemotpoetry);    
            blCateArr= myFil(blCateArr,checkedOnemotpoetry,eee);    
          }
          if(eee=='Short Stories'){ 
            setCheckedOnemotstory(!checkedOnemotstory);    
            blCateArr= myFil(blCateArr,checkedOnemotstory,eee);    
          }
          if(eee=='Others'){ 
            setCheckedOnemotother(!checkedOnemotother);    
            blCateArr= myFil(blCateArr,checkedOnemotother,eee);    
          }
          
          if(eee=='Literature'){ 
             setCheckedOneclt(!checkedOneclt);    
             blCateArr= myFil(blCateArr,checkedOneclt,eee);    
           }
        
           if(eee=='Academic'){   
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
        
          if(eee=='Hardbound'){        
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
<div className="side_categories">
                    <h5 className="text-center">Genre</h5>

        <input type="text" id="myInput" onInput={myFunction} placeholder="Search for Category.." title="Type in a name" 
                    autoComplete="off" />

                    <ul id="myUL" className="list-unstyled">
      
                          <li key="fiction"><a> 
                          <input type="checkbox" name="cfc"
                                  label="Checkbox"
                                  checked={checkedOnecfc}
                                  onChange={(e) => updateOnecm('Fiction')} />   Fiction  </a></li>

                          <li key="non-fiction"><a> 
                          <input type="checkbox" name="cnf"
                                  label="Checkbox"
                                  checked={checkedOnecnf}
                                  onChange={(e) => updateOnecm('Non Fiction')} /> Non-Fiction  </a></li>

                          <li key="literature"> <a>  
                          <input type="checkbox" name="clt"
                                  label="Checkbox"
                                  checked={checkedOneclt}
                                  onChange={(e) => updateOnecm('Literature')} /> Literature </a></li>

                                                <li key="academic">    <a>
                          <input type="checkbox" name="aca"
                                  label="Checkbox"
                                  checked={checkedOneaca}
                                  onChange={(e) => updateOnecm('Academic')} /> Academics </a> </li>


                          <li key="motivational">    <a>
                          <input type="checkbox" name="mot"
                                  label="Checkbox"
                                  checked={checkedOnemot}
                                  onChange={(e) => updateOnecm('Motivational')} /> Motivational </a> </li>

                          <li key="romance">    <a>
                          <input type="checkbox" name="romance"
                                  label="Checkbox"
                                  checked={checkedOnemotromance}
                                  onChange={(e) => updateOnecm('Romance')} /> Romance </a> </li>

                          <li key="biography">    <a>
                          <input type="checkbox" name="biography"
                                  label="Checkbox"
                                  checked={checkedOnemotbio}
                                  onChange={(e) => updateOnecm('Biography')} /> Biography </a> </li>

                          <li key="poetry">    <a>
                          <input type="checkbox" name="poetry"
                                  label="Checkbox"
                                  checked={checkedOnemotpoetry}
                                  onChange={(e) => updateOnecm('Poetry')} /> Poetry </a> </li>

                          <li key="story">    <a>
                          <input type="checkbox" name="story"
                                  label="Checkbox"
                                  checked={checkedOnemotstory}
                                  onChange={(e) => updateOnecm('Short Stories')} /> Short Stories </a> </li>

                          <li key="other">    <a>
                          <input type="checkbox" name="other"
                                  label="Checkbox"
                                  checked={checkedOnemotother}
                                  onChange={(e) => updateOnecm('Others')} /> Others </a> </li>
                                                            
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
                  </div>






    )}


