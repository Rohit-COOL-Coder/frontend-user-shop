import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { login } from "../redux/apiCall"
import img from "../img/messo.png"
import { Link } from 'react-router-dom';

const Wrapper=styled.div`
display: flex;
font-family: 'Urbanist', sans-serif;
width: 100vw;
height: 100vh;
justify-content: center;
align-items: center;
background: linear-gradient(to right,rgb(255, 182, 185),rgb(250, 227, 217));
`
const UserInput=styled.div`
height: 27em;
width: 17em;
min-width: 250px;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
border-radius: 5px;
background-color: white;
/* background: linear-gradient(to right ,rgb(249, 206, 238),rgb(249, 243, 238)); */
box-shadow: -16px 16px 13px -12px rgba(0,0,0,0.69);;
`
const Top=styled.div`
flex: 1;
margin-top: 10px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Title=styled.span`
font-size: 1.5em;
font-weight: 600;
letter-spacing: 1px;
font-family: 'Urbanist', sans-serif;
`
const LogoContainer=styled.div`
`
const Logo=styled.img`
width: 5rem;
`

const Center=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Input=styled.input`
margin: 10px;
border: none;
padding: 5px;
opacity: 0.7;
font-weight: 600;
font-size: 1em;
font-family: 'Urbanist', sans-serif;
outline: none;
border-bottom: 3px solid rgb(166, 177, 225);
`

const Bottom=styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const Button=styled.button`
width: 130px;
padding: 7px 0px;
border: none;
border-radius: 10px;
font-family: 'Urbanist', sans-serif;
color: white;
cursor: pointer;
box-shadow: -16px 16px 13px -12px rgba(0,0,0,0.69);;
background: linear-gradient(to right, rgb(66, 72, 116) , rgb(166, 177, 225));
opacity: 0.7;
transition: all 0.2s ease;
&:hover{
opacity: 1;
transform: scale(1.1);
}
`
const Register=styled.p`
font-size: 1em;
font-weight: 600;
color: lightblue;
cursor: pointer;
text-decoration: underline;
text-decoration-color: white;
font-family: 'Urbanist', sans-serif;
`
const Error=styled.span`
color: red;
`
function Login() {
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const dispatch=useDispatch()
    const {isFatching,isError}=useSelector(state=>state.user)
    const handleLogin=(e)=>{
       e.preventDefault()
       login(dispatch,{username:username,password:password})
    }
  return (
    <Wrapper>
      <UserInput>
          <Top>
            <Title>Welcome</Title>
            <LogoContainer>
            <Logo src={img}/>
            </LogoContainer>
          </Top>
          <Center>
            <Input type="text" placeholder="Email" onChange={(e)=>{ setUsername(e.target.value) }}/>
            <Input type="password" placeholder="Password" onChange={(e)=>{ setPassword(e.target.value) }}/>
            {isError && <Error>Somthing went wrong...</Error>}
          </Center>
          <Bottom>
             <Button onClick={handleLogin} disabled={isFatching}>Login</Button>
             <Link to="/register"><Register>Don't have an account?Sign Up</Register></Link>
          </Bottom>
      </UserInput>
    </Wrapper>
  )
}

export default Login