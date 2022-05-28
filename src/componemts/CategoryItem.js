import { Link } from "react-router-dom"
import styled from "styled-components"

const Container=styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image=styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
const Info=styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height:100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title=styled.h1`
color: white;
margin-bottom: 20px;
`
const Button=styled.button`
border: none;
padding: 10px;
background-color: white;
font-weight: 600;
color: gray;
cursor: pointer;
`


function CategoryItem({item}) {
  return (
    <Container>
      <Link to={`/productlist/${item.cat}`}>
        <Image src={item.img}></Image>
        <Info>
            <Title>{item.title}</Title>
            <Button>Show Now</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem