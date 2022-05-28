import styled from 'styled-components'
import  Announcement  from '../componemts/Annousment'
import  Navbar  from '../componemts/Navbar'
import  Newslatter  from '../componemts/Newslatter'
import  Footer  from '../componemts/Footer'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../requestMethod'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../redux/cartReducer'


const Container=styled.div``
const Wrapper=styled.div`
padding: 20px;
width: 95vw;
display: flex;
`
const ImgContainer=styled.div`
flex: 1;
`
const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`
const InfoContainer=styled.div`
flex: 1;
padding: 20px;
`
const Title=styled.h2`
font-size: 60px;
`
const Desc=styled.p`
font-size: 25px;
margin: 10px 0px;
letter-spacing: 3px;
`
const Price=styled.span`
font-size: 30px;
font-weight: 600;
`

const FilterContainer=styled.div`
display: flex;
width: 60%;
margin-top: 20px;
align-items: center;
`
const Filter=styled.div`
display: flex;
`
const FilterTitle=styled.div`
font-size: 15px;
font-weight: 600;
display: flex;
justify-content: center;
align-items: center;
margin-right: 10px;
`
const FilterColor=styled.div`
cursor: pointer;
width: 20px;
height: 20px;
border-radius: 50%;
margin-right: 10px;
background-color: ${props=>props.color};
`
const FilterSize=styled.select`
padding: 5px;
font-size: 20px;
font-weight: 600;
cursor: pointer;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
margin-top: 20px;
width: 55%;
justify-content: space-between;
display: flex;
`
const AmountContainer=styled.div`
display: flex;
display: flex;
justify-content: center;
align-items: center;
`
const Amount=styled.h2`
margin: 0px 10px;
width: 30px;
height: 30px;
border-radius: 10px;
border: 2px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
`
const Button=styled.button`
margin-left: 20px;
padding: 10px;
background-color: white;
font-size: 15px;
font-weight: 600;
cursor: pointer;


&:hover{
    background-color: lightgrey;
}
`

function Product() {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch()

    const location =useLocation()
    const productId=location.pathname.split('/')[2]
    const [product,setProduct]=useState({})
    const [quantity,setQuantity]=useState(1)
    const [color,setColor]=useState("null")
    const [size,setSize]=useState("null")

    useEffect(()=>{
       const fetchProduct= async()=>{
           try{
               const res= await publicRequest.get(`/products/find/${productId}`)
               setProduct(res.data)
            }catch(err){
              console.log(err)
           }
       }
    fetchProduct()
    },[productId])

    const handleQuantity=(type)=>{
       if(type==="inc"){
          quantity<5 && setQuantity(quantity+1)
       }else{
         quantity > 1 &&  setQuantity(quantity-1)
       }
    }
const handleCart=()=>{
    console.log(quantity,color,size)
    dispatch(
        addProduct({...product,size,color,quantity})
        
    )
    console.log(cart)
}
    
return(
    <Container>
       <Announcement/>
       <Navbar/>
       <Wrapper>
           <ImgContainer>
           <Image src={product.img}/>
           </ImgContainer>
           <InfoContainer>
               <Title>{product.title}</Title>
               <Desc>{product.desc}</Desc>
               <Price>₹{product.price}</Price>
               <FilterContainer>
                    <Filter>
                       <FilterTitle>SELECT COLOR</FilterTitle>
                       {product.color?.map((c)=>(
                        <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                       ))} 
                     </Filter>

                   <Filter>
                     <FilterTitle>SELECT SIZE</FilterTitle>
                       <FilterSize onChange={(e)=>setSize(e.target.value)}>
                            {product.size?.map((s)=>(
                               <FilterSizeOption key={s}>{s}</FilterSizeOption>
                            ))}
                            
                       </FilterSize>
                   </Filter>
               </FilterContainer>
               <AddContainer>
                    <AmountContainer>
                    <Remove onClick={()=>handleQuantity("dec")}/>
                    <Amount>{quantity}</Amount>
                    <Add onClick={()=>handleQuantity("inc")}/>
                    </AmountContainer>
                    <Button onClick={handleCart}>Add To Cart</Button>
               </AddContainer>
           </InfoContainer>
       </Wrapper>
       <Newslatter/>
       <Footer/>
    </Container>
)

}

export default Product


