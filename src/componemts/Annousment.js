import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
width: 100vw;
height: 30px;
background-color: lightskyblue;
display: flex;
justify-content: center;
align-items: center;
font-size: 17px;
font-weight: bold;
color: white;
`

function Annousment() {
  return (
    <Container>
        Super Deal Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annousment