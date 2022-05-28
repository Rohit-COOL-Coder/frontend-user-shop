import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Container=styled.div`
width: 100vw;
height: 200px;
background-color: lightcyan;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title=styled.h1`
margin-bottom: 10px;
font-size: 65px;
`
const Decs=styled.p`
font-size: larger;
font-weight: bold;
`
const Info=styled.div`
width: 500px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: white;
border: 0.5px solid lightgray;
margin: 10px;
`
const Input=styled.input`
flex: 8;
border: none;
outline: none;
margin-left: 5px;

`
const Button=styled.button`
flex: 1;
border: none;
cursor: pointer;
background-color: lightskyblue;
`


function Newslatter() {
  return (
    <Container>
       <Title>NewsLetter</Title>
       <Decs>Get timely updates from your favorite products</Decs>
       <Info>
           <Input placeholder="Your email"></Input>
           <Button><Send/></Button>
       </Info>
    </Container>
  )
}

export default Newslatter