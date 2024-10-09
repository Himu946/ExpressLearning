const http=require('http');
const express= require('express');
const bodyParser= require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:false}));
app.get('/add-product',(req,res)=>{
    res.send(`<form action="/add-product" method="POST">
        <label for ="productName">Product Name</label>
        <input type="text" id="productName" name="productName">
        <br>
        <label for ="productSize">Product Size</label>
        <input type="text" id="productSize" name="productSize">
        <br>
        <button type="submit">Add Product</button>
        </form>`);
});
app.post('/add-product',(req,res)=>{
    const productName=req.body.productName;
    const productSize=req.body.productSize;
    console.log(`Product Name:${productName}, Product Size:${productSize}`);
    res.send('Product added succesfully!');

})


app.listen(3000,()=>{
    console.log('Server is running on host')
});