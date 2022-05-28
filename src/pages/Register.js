import { style } from "@mui/system"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { publicRequest } from "../requestMethod"

const Container = styled.div`
display: flex;
font-family: 'Urbanist', sans-serif;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;

background: linear-gradient(to right,rgb(255, 182, 185),rgb(250, 227, 217));
`
const Wrapper = styled.div`
min-width: 20em;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
padding: 15px 15px;
/* align-items: center; */
border-radius: 5px;
margin: 0px 10px;
background-color: white;
/* background: linear-gradient(to right ,rgb(249, 206, 238),rgb(249, 243, 238)); */
box-shadow: -16px 16px 13px -12px rgba(0,0,0,0.69);;
`
const Top=styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px 0px 0px 5px;
`

const Title = styled.h2`
font-size: 2em;
`
const Bottom=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px 0px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`
const FormTop=styled.div`
display: flex;
flex-direction: column;
`
const InputTop=styled.div`
display: flex;
`
const InputCenter=styled.div`
display: flex;
`
const InputBottm=styled.div`
`


const Input = styled.input`
margin: 10px;
padding: 5px;
border: 1px solid lightgray;
outline: none;
`
const FormCenter=styled.div`
`

const Aggrements = styled.p`
display: flex;
margin: 10px 10px;
flex-wrap: wrap;
`

const FormBottom=styled.div`
`
const Button = styled.button`
padding: 10px 40px;
margin-top: 5px;
margin-left: 10px;
cursor: pointer;
font-size: 15px;
font-weight: 600;
border: 1px solid lightgray;
transition: all 0.5s ease;
&:hover{
    background-color: lightskyblue;
}
`
const Term = styled.p`
color: lightsalmon;
opacity: 0.7;
font-weight: 600;
cursor: pointer;
&:hover{
opacity: 1;
}
`


function Register() {
  const [newUser,setNewUser]=useState({})
  const navigate=useNavigate()
  const setUser=(e)=>{
    setNewUser((prev)=>{
     return {...prev,[e.target.name]:e.target.value}
    })
  }
  console.log(newUser)
  const handleRegister= async(e)=>{
     e.preventDefault()
     try{
      const res= await publicRequest.post('/auth/register',newUser)
      navigate('/login')
     }catch(err){
       console.log(err)
     }
  }
  return (
    <Container>
        <Wrapper>
          <Top>
          <Title>CREATE AN ACCOUNT</Title>
          </Top>
          <Bottom>
          <Form>
            <FormTop>
              <InputTop>
              <Input type="text" name="firstname" onChange={setUser} placeholder="First Name"></Input>
                <Input type="text" name="lastname" onChange={setUser} placeholder="Last Name"></Input>
              </InputTop>
              <InputCenter>
              <Input type="text" name="username" onChange={setUser} placeholder="Username"></Input>
                <Input type="text" name="email" onChange={setUser} placeholder="Email"></Input>
              </InputCenter>
              <InputBottm>
              <Input type="password" name="password" onChange={setUser} placeholder="Password"></Input>
              </InputBottm>
                
                
                
            </FormTop>
            <FormCenter>
            <Aggrements>By continuing, I agree to the <Term>Terms of Use</Term> & <Term>Privacy Policy</Term></Aggrements>
            </FormCenter>
            <FormBottom>
            <Button onClick={handleRegister}>Submit</Button>
            </FormBottom>  
            </Form>
          </Bottom> 
        </Wrapper>
    </Container>
  )
}

export default Register