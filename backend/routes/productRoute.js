import express from 'express';
import Product from '../models/productModel.js';
import { isAuth, isAdmin } from '../util.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
const router=express.Router();

////////////////////

router.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
      // await Product.remove({});
      //const createdProducts = await Product.insertMany(data.products);
      //res.send({ createdProducts });
    })
  );

  /////////////////////

router.get("/", async(req, res)=>{
  const name = req.query.name || '';
  // const category = req.query.category || '';
  const categoryAr = req.query.category || '';
  const fcAr = req.query.fc || '';
  

  const bblanguageAr = req.query.bblanguage || '';

  const bbindAr = req.query.bbind || '';

  const bsearchStr = req.query.bsearch || '';
  //console.log("MyCategoryisSearch-------"+bsearchStr);
  //let Arrcate=explode(",",categoryAr);
  var Arrcate = categoryAr.split(",");
  let Arrblang = bblanguageAr.split(","); 
  let ArrbBind = bbindAr.split(","); 
  let Arrfc = fcAr.split(","); 

  // Arrcate = ['', 'Non Fiction']

  const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
  // const categoryFilter = category ? { category } : {};

  const categoryFilter = categoryAr ? {category: {$in:Arrcate}}  : {};

  const fcFilter = fcAr ? {fc: {$in:Arrfc}}  : {};

  
   const blangFilter = bblanguageAr ? {book_language: {$in:Arrblang}}  : {};

   const bBindFilter = bbindAr ? {book_format: {$in:ArrbBind}}  : {};
   var bSearchFilter='';
if(bsearchStr!=''){
  let jbsearchStr='/'+bsearchStr+'/';
    bSearchFilter = {$or: [{category: jbsearchStr}, {book_language:jbsearchStr},{name:jbsearchStr}]};
}else{

    bSearchFilter ="";
}
// console.log(Arrfc)

  //  {$or: [{category: /ook/}, {book_language:/ook/},{name:/ook/}]}

  const products = await Product.find({
    ...nameFilter,
    ...categoryFilter,
    ...blangFilter,
    ...fcFilter,
    ...bBindFilter,
    ...bSearchFilter,
  });

 
    res.send(products);
  //  console.log("search filter", products)
})


router.post("/", async(req, res)=>{
  //  console.log("i am isssss sss nside nodejs post method");
  
  const productc= new Product({
    name: req.body.name,
    author_name: req.body.author_name,
    isbn: req.body.isbn,
    sku: req.body.sku,
    book_format:req.body.book_format,
    fc:req.body.fc,
    book_language: req.body.book_language,
    countInStock: req.body.unit,
    mrp: req.body.mrp,
    discount:req.body.discount,
    selling_price: req.body.selling_price,
    book_size: req.body.book_size,
    page_number: req.body.page_number,
    item_weight: req.body.item_weight,
    dimension: req.body.dimension,
    brand: req.body.brand,
    image:req.body.image,
    image_name:req.body.mfilename,
    description: req.body.description,
    category:req.body.cat
    
    
  });  

  const newProduct= await productc.save();




    let mfullPath=req.body.image;
    let mfilename = mfullPath.replace(/^.*[\\\/]/, '')
    
    const product= new Product({
        name: req.body.name,
        author_name: req.body.author_name,
        isbn: req.body.isbn,
        sku: req.body.sku,
        book_format:req.body.book_format,
        fc:req.body.fc,
        book_language: req.body.book_language,
        countInStock: req.body.unit,
        mrp: req.body.mrp,
        discount:req.body.discount,
        selling_price: req.body.selling_price,
        book_size: req.body.book_size,
        page_number: req.body.page_number,
        item_weight: req.body.item_weight,
        dimension: req.body.dimension,
        brand: req.body.brand,
        image:req.body.image,
        image_name:req.body.mfilename,
        description: req.body.description,
        category:req.body.cat
    });


   

    if(newProduct){
        return    res.status(201).send({message: "Product Added Succesfully", data:newProduct})
    }
    return res.status(500).send({ message:'Error in creating Product.'});
})



router.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );

  // Delete

  router.delete('/:id', async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    //if (deletedProduct) {
      //await deletedProduct.remove();
      //res.send({ message: 'Product Deleted' });
    //} else {
      //res.send('Error in Deletion.');
    //}
  });




 router.post(
    '/:id/reviews',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const productId = req.params.id;
      const product = await Product.findById(productId);
      if (product) {
        if (product.reviews.find((x) => x.name === req.user.name)) {
          return res
            .status(400)
            .send({ message: 'You already submitted a review' });
        }
        const review = {
          name: req.user.name,
          rating: Number(req.body.rating),
          comment: req.body.comment,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
          product.reviews.reduce((a, c) => c.rating + a, 0) /
          product.reviews.length;
        const updatedProduct = await product.save();
        res.status(201).send({
          message: 'Review Created',
          review: updatedProduct.reviews[updatedProduct.reviews.length - 1],
        });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );


  //Update

router.put('/:id', async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    //console.log(product)
    product.name = req.body.name;
    product.author_name = req.body.author_name;
    product.isbn= req.body.isbn;
    product.image=req.body.image;
    
    product.sku= req.body.sku,
    product.book_format=req.body.book_format,
    product.fc=req.body.fc,
    product.book_language=req.body.book_language,
    product.countInStock=req.body.unit,
    product.mrp= req.body.mrp,
    product.discount = req.body.discount,
    product.selling_price= req.body.selling_price,
    product.book_size= req.body.book_size,
    product.page_number=req.body.page_number,
    product.item_weight=req.body.item_weight,
    product.dimension= req.body.dimension,
    product.brand= req.body.brand,
   // product.image_name=mfilename,
    product.description= req.body.description,
    product.category=req.body.cat




    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});
export default router;
