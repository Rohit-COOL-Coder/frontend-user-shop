
import styled from "styled-components"
import Product from "./Product"
import { useEffect, useState } from "react"
import axios from "axios"

const Container=styled.div`
display: flex;
padding: 25px;
flex-wrap: wrap;
`

function Products({filters,sort,cat}) {
  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])

  useEffect(()=>{
  const fetchProduct=async()=>{
   try{
    const data=await axios.get( cat? `https://rohitshop.herokuapp.com/api/products?category=${cat}` : "https://rohitshop.herokuapp.com/api/products" )
    setProducts(data.data)
   }catch(err){
     console.log(err)
   }
  }
  fetchProduct()
  },[cat])

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter((item)=>
        Object.entries(filters).every(([key,value])=>
            item[key].includes(value)
        )
      )
    )
  },[cat,filters,products])

  useEffect(()=>{
   if(sort==="newest"){
     console.log("newest")
    filteredProducts.sort((a,b)=>b.createdAt-a.createdAt)
   }else if(sort==="asc"){
    console.log("asc")
    filteredProducts.sort((a,b)=>b.price-a.price)
   }else{
    console.log("decs")
    filteredProducts.sort((a,b)=>a.price - b.price)
   }
  },[sort])
  return (
    <Container>
        {cat? filteredProducts.map(item=>(
            <Product key={item._id} item={item}/>
        )):products.slice(0,8).map(item=>(
          <Product key={item._id} item={item}/>
      ))}
    </Container>
  )
}

export default Products