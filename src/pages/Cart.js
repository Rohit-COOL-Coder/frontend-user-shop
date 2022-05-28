import Annousment from '../componemts/Annousment'
import Footer from '../componemts/Footer'
import Navbar from '../componemts/Navbar'
import Newslatter from '../componemts/Newslatter'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity,removeQuantity } from '../redux/cartReducer'
import StripeCheckout from 'react-stripe-checkout'
import { useEffect, useState } from 'react'
import { userRequest } from '../requestMethod'
import { useNavigate } from 'react-router-dom'


const Container=styled.div`
width: 100vw;
`
const Wrapper=styled.div``
const Top=styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
`
const Left=styled.div``
const Center=styled.div``
const Right=styled.div``
const Button=styled.button`
padding: 10px 20px;
font-size: 15px;
font-weight: 600;
cursor: pointer;
background-color: ${props=>props.name==="checkout"?"black":"white"};
color: ${props=>props.name==="checkout"?"white":"black"};
border: 0.5px solid lightgray;
`
const ProductList=styled.div`
flex: 6;
display: flex;
flex-direction: column;

`
const Link=styled.a`
text-decoration: underline;
margin: 0px 10px;
font-weight: 600;
opacity: 0.5;
cursor: pointer;
&:hover{
    opacity: 1;
}
`
const Bottom=styled.div`
width: 100%;
display: flex;
`
const ProductContainer=styled.div`
height: 20vh;
display: flex;
`
const ImageContainer=styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`
const Image=styled.img`
width: 140px;
height: 90%;
object-fit: cover;
`
const ProductDetails=styled.div`
flex: 2;
margin-left: 20px;
display: flex;
flex-direction: column;
`
const ProductName=styled.span`
font-weight: 600;
margin: 5px 0px;
`
const ProductId=styled.span`
font-weight: 600;
margin: 5px 0px;
`
const ProductColor=styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
margin: 5px 0px;
background-color: ${props=>props.color} ;
`
const ProductSize=styled.span`
font-weight: 600;
`
const AmountContainer=styled.div`
flex: 2;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Addjustment=styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const Amount=styled.span`
margin: 0px 10px;
border: 1px solid lightgrey;
font-weight: 600;
width: 30px;
height: 30px;
display: flex;
border-radius: 10px;
justify-content: center;
align-items: center;
`
const Price=styled.span`
font-size: 30px;
font-weight: 600;
margin-top: 20px;
display: flex;
flex-direction: column;
`

const SummaryContainer=styled.div`
flex: 2;
border: 0.1px solid lightgray;
height: 35vh;
border-radius: 10px;
display: flex;
flex-direction: column;
padding: 10px;
`
const Title=styled.h2`
margin-top: 5px;
font-size: 30px;
`
const SubTotal=styled.span`
padding: 5px 0px;
`
const ShippingCost=styled.span`
padding: 5px 0px;
`
const ShippingDiscount=styled.span`
padding: 5px 0px;
`
const Total=styled.span`
font-size: 20px;
font-weight: 600;
padding: 10px 0px;
`

const Hr=styled.hr`
width: 70vw;
color: lightgray;
opacity: 0.2;
margin-left: 20px;
`

function Cart() {



    const stripe_Key="pk_test_51KtIYSSBC8t0FW5KBFEQPCANk86R4zffcTsbziqrNZOLaImmJ8XpMiYfjRi4OIuUopcHPdv7WT5OxulCWJzHBS3l00OE7WHKdi"
    
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart)
    const [token , SetToken]=useState(null)
    const navigate=useNavigate()

    const handleClick=(type,id,quantity)=>{
        if(type==="add"){
            dispatch(
                addQuantity({id,quantity})
            )
        }else{
            dispatch(
                removeQuantity({id,quantity})
            )
        }
    }
    const onToken=(token)=>{
    SetToken(token)
    console.log(token)
    }
    
    useEffect(()=>{
        const sendToken=async()=>{
            try{
               const res=await userRequest.post("/checkout/payment",{
                   token:token,
                   amount:cart.total*100
               })
               navigate('/success')
               
            }catch(err){
                console.log(err)
            }
        }
     token && sendToken()
    },[token])

  return (
    <Container>
        <Annousment/>
        <Navbar/>
        <Wrapper>
            <Top>
                <Left>
                    <Button name="continue">CONTINUE SHOPPING</Button>
                </Left>
                <Center>
                    <Link>Shopping Bag(${cart.quantity})</Link>
                    <Link>Your Wishlist(0)</Link>
                </Center>
                <Right>
                <Button name="checkout">CHECKOUT NOW</Button>
                </Right>
            </Top>
            <Bottom>
                <ProductList>
                
                        {cart.products.map((item)=>(
                            
                            <div key={item._id}>
                                <Hr/>
                                <ProductContainer >
                            <ImageContainer>
                                <Image src={item.img}></Image>
                            </ImageContainer>
                            <ProductDetails>
                                <ProductName>Product: {item.title}</ProductName>
                                <ProductId>ID:{item._id}</ProductId>
                                <ProductColor color={item.color}/>
                                <ProductSize>Size:{item.size}</ProductSize>
                            </ProductDetails>
                            <AmountContainer>
                                <Addjustment>
                                <Remove onClick={()=>handleClick("remove",item._id,item.quantity)}/>
                                <Amount>{item.quantity}</Amount>
                                <Add onClick={()=>handleClick("add",item._id,item.quantity)}/>
                                </Addjustment>
                                <Price>{item.price * item.quantity}</Price>
                            </AmountContainer>
                        </ProductContainer>
                            </div>
                        ))}
                </ProductList>
                
                <SummaryContainer>
                    <Title>ORDER SUMMARY</Title>
                    <SubTotal>Subtotal : ${cart.total}</SubTotal>
                    <ShippingCost>ShippingCost : $0</ShippingCost>
                    <ShippingDiscount>ShippingDiscount : $0</ShippingDiscount>
                    <Total>Total : ${cart.total}</Total>
                    <StripeCheckout
                    name='Messho'
                    image='https://play-lh.googleusercontent.com/3yi7Fo-OtJUZ7nAlB8WB0v1WTOdz76Z1kqvuuubhNlHzU9jhP97TnI-6eVThWZMV31A'
                    description="total amount $500"
                    stripeKey={stripe_Key}
                    currency='USD'
                   
                    token={onToken}
                    amount={cart.total*100}
                    >
                    <Button name="checkout">Checkout Now</Button>
                    </StripeCheckout>
                </SummaryContainer>
            </Bottom>
        </Wrapper>
        <Newslatter/>
        <Footer/>
    </Container>
  )
}

export default Cart