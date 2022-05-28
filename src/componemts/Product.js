import { FavoriteBorder, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Info=styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
background-color: rgba(0,0,0,0.2);
top: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
transition: all 1s ease;
`
const Container=styled.div`
flex: 1;
min-width: 260px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
position: relative;
margin: 3px;
&:hover ${Info}{
    opacity: 1;
}
`
const Image=styled.img`
height: 75%;
`

const Logo=styled.div`
width: 50px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background-color: white;
border-radius: 50%;
margin: 5px;
cursor: pointer;
transition: all 0.5s ease;
&:hover{
    transform: scale(1.2);
}
`


function Product({item}) {
  return (
    <Container>
        <Image src={item.img}></Image>
        <Info>
            <Logo><FavoriteBorder/> </Logo>
            <Logo><Link to={`/product/${item._id}`}><SearchOutlined/></Link></Logo>
            <Logo><ShoppingCartOutlined/> </Logo>
        </Info>
    </Container>
  )
}

export default Product