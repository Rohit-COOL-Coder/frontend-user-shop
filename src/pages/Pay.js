import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import StripeCheckout from "react-stripe-checkout"
import axios from 'axios'




const Container=styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const Button=styled.button`
padding: 10px 30px;
font-size: 20px;
color: white;
background-color: black;
border: 1px solid lightgray;
cursor: pointer;
opacity: 0.7;
transition: all 0.5s ease;
&:hover{
    opacity: 1;
}
`

function Pay() {

    const [stripeToken,setStripeToken] = useState(null)

    const KEY="pk_test_51KtIYSSBC8t0FW5KBFEQPCANk86R4zffcTsbziqrNZOLaImmJ8XpMiYfjRi4OIuUopcHPdv7WT5OxulCWJzHBS3l00OE7WHKdi"



    const onToken=(token)=>{
      setStripeToken(token)
    }
    useEffect(()=>{
    const makeRequest= async ()=>{
    try{
       const res= await axios.post("http://localhost:5000/api/checkout/payment",{
           tokenId: stripeToken.id,
           amount:2999
       })
       console.log(res.data)
    }catch(err){
        console.log("error one")
       console.log(err)
    }
    }
    stripeToken && makeRequest()
    },[stripeToken])
  return (
    <Container>
           <StripeCheckout
           name='Meesho'
           image='https://play-lh.googleusercontent.com/3yi7Fo-OtJUZ7nAlB8WB0v1WTOdz76Z1kqvuuubhNlHzU9jhP97TnI-6eVThWZMV31A'
        shippingAddress
        billingAddress
        description='Total amount :$20'
        amount={2000}
        token={onToken}
        stripeKey={KEY}
        >
           <Button>Pay</Button>
           </StripeCheckout>
    </Container>
  )
}

export default Pay