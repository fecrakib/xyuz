const express = require('express')
const mongoose = require('mongoose');



const app = express()
const port = 3000;
app.use(express.json())
app.use((express.urlencoded({extended:true})))
// create schema
const productSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    price:Number,
    describe:String,
    CreatedAt:{
        type:Date,
        default:Date.now()
    }
})
// create model
const Product=mongoose.model('product',productSchema);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/products',async(req,res)=>{
    try {
    const {title,price,describe}=req.body;
    // create product instance of model(row)
    const newProduct= new Product({title,price,describe});
    // save the product ot the database
     const ProductData=await newProduct.save()
     res.status(200).send(ProductData)
    } catch (error) {
        res.status(500).send({
            message:error.message
        })
        
    }
})

// find single product
app.get('/products/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const product=await Product.findById({_id:id});
        
        if(product){
            res.status(200).send(product)
        }else{
            res.status(404).send({
                message:"Products not found"
            })
        }
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})

// get all products
app.get('/products',async (req,res)=>{
    try {
        const products=await product.find();
        if(products){
            res.status(200).send(products)
        }else{
            res.status(404).send({
                message:"Products not found"
            })
        }
    } catch (error) {
        res.status(500).send({message:error.message})
        
    }
})


async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDb');
        console.log("data base connected")
    } catch (error) {
        console.log(error)
        console.log(error.message)
        
    }

  }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main();