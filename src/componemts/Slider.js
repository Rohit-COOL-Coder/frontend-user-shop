import React, { useState } from 'react'
import styled from 'styled-components'
import {ArrowLeftOutlined,ArrowRightOutlined} from '@mui/icons-material';
import {sliderItems} from '../data'

const Container = styled.div`
width: 100%;
height: 100vh;
border: lightgreen;
display: flex;
position: relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 40px;
height: 40px;
border: white;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: absolute;
top: 0%;
bottom: 0%;
margin: auto;
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
z-index: 2;
opacity: 0.5;
`
const Wrapper=styled.div`
display: flex;
height: 100%;
transition: all 2s ease;
transform: translateX(${props=>props.index* -100}vw);
`
const Slide=styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=>props.bg}
`
const ImgContainer=styled.div`
height: 100%;
flex: 1;
`
const Image=styled.img`
height: 80%;
`
const InfoContainer=styled.div`
flex:1;
display: block;
align-items: center;
justify-content: center;
`
const Title=styled.h1`
font-size: 50px;
margin: 10px;
`
const Decs=styled.p`
font-weight: bolder;
margin: 10px;
color: lightcoral;
letter-spacing: 3px;
`
const Button = styled.button`
margin: 10px;
font-size: 15px;
font-weight: bold;
padding: 10px;
background-color: transparent;
cursor: pointer;
`


function Slider() {
    const [sliderIndex,setSliderIndex]=useState(0)
    const changeSlide=(direction)=>{
        if(direction==="left"){
            setSliderIndex(sliderIndex>0?sliderIndex-1:2)
        }else {
            setSliderIndex(sliderIndex<2?sliderIndex+1:0)
        }
        
    }
  return (
    <Container>
       <Arrow direction="left" onClick={()=>changeSlide("left")}>
           <ArrowLeftOutlined/>
       </Arrow>
       <Wrapper index={sliderIndex}>
         {sliderItems.map((item)=>(
            <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
            <Image src={item.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Decs>{item.decs}</Decs>
                <Button>SHOW NOW</Button>
            </InfoContainer>
        </Slide>
  ))}
       </Wrapper>
       <Arrow direction="right" onClick={()=>changeSlide("right")}>
           <ArrowRightOutlined/>
       </Arrow>
    </Container>
  )
}

export default Slider