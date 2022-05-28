import {Search,ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import { logoutSuccess } from '../redux/userReducer';

const Container = styled.div`
  height: 60px;
  width: 100vw;
 
`
const Wrapper =styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Left=styled.div`
flex: 1;
display: flex;
align-items: center;
`
const Language=styled.span`
font-size: 20px;
cursor: pointer;
`
const SearchContainer=styled.div`
 border: 0.5px solid lightgray;
 display: flex;
 align-items: center;
 margin-left: 25px;
 padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;
`

const Center=styled.div`
flex: 1;
`
const Logo =styled.h1`
text-align: center;
`
const Right=styled.div`
flex: 1;
display: flex;
justify-content: end;
`
const MenuItem=styled.p`
margin-left: 25px;
cursor: pointer;
text-decoration: underline;
text-decoration-color: white;
`
const Logout=styled.p`
margin-left: 25px;
cursor: pointer;
text-decoration: underline;
text-decoration-color: white;
`

function Navbar() {
  const dispatch=useDispatch()
  const user=useSelector(state=>state.user.currentUser)
  const cartQuantity=useSelector((store)=>store.cart.quantity)

const handleLogout=(e)=>{
  e.preventDefault()
  dispatch(logoutSuccess())
}

  return (
    <Container>
        <Wrapper>
           <Left>
               <Language>
                   EN
               </Language>
               <SearchContainer>
                   <Input/>
                   <Search style={{color:"gray", fontSize:16}}/>
               </SearchContainer>
           </Left>
           <Center><Logo>Meesho.</Logo></Center>
           <Right>
              {user && <Logout onClick={handleLogout}>Logout</Logout>}
               {!user && <Link to="/register"><MenuItem>Register</MenuItem></Link>}
               {!user && <Link to="/login"><MenuItem>SignIn</MenuItem></Link>}
               <Link to="/cart">
               <MenuItem>
               <Badge badgeContent={cartQuantity} color="primary">
               <ShoppingCartOutlined/>
               </Badge>
               </MenuItem>
               </Link>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar