import { Email, Facebook, GitHub, Instagram, Phone, Room, Twitter } from "@mui/icons-material"
import styled from "styled-components"

const Container=styled.div`
width: 100vw;
height: 300px;
background-color: lightgray;
display: flex;
`
const Left=styled.div`
flex: 1;
padding: 20px;
`
const Logo=styled.h1`
font-size: 40px;
`
const Desc=styled.p`

`
const SocialContainer=styled.div`
display: flex;

`
const SocialLogo=styled.div`
margin: 8px;
width: 40px;
height: 40px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: #${props=>props.color};
cursor: pointer;
`

const Center=styled.div`
flex: 1;
padding: 20px;
`
const Title=styled.h3`
margin-bottom: 20px;
`
const List=styled.ul`
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
list-style: none;
`
const ListItem=styled.li`
width: 50%;
`

const Right=styled.div`
flex: 1;
padding: 20px;
`
const ContactItem=styled.div`
margin-top: 10px;
margin-bottom: 10px;
display: flex;
align-items: center;
`
const Payment=styled.img`
width: 200px;
margin-top: 10px;
margin-bottom: 10px;
`

function Footer() {
  return (
    <Container>
        <Left>
           <Logo>Meesho.</Logo>
           <Desc>Now you can shop for anything your heart desires from the comfort 
                 of your home. Make sure to download the Meesho app to have a smooth 
                 and enjoyable shopping experience. You can even share products you 
                 like with your friends on social media in just seconds. If you're
                  trying to save time and get the best deals, downloading the best app 
                  for shopping is the way to go!</Desc>
           <SocialContainer>
               <SocialLogo color="3B5999"><Facebook/></SocialLogo>
               <SocialLogo color="E4405F"><Instagram/></SocialLogo>
               <SocialLogo color="55ACEE"><Twitter/></SocialLogo>
               <SocialLogo color="E60023"><GitHub/></SocialLogo>
           </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem><Room style={{marginRight:"10px"}}/> C.M.P.D.I Camp Gopalpur , Sundargarh Pin-770024 </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>+91 7978478703</ContactItem>
            <ContactItem><Email style={{marginRight:"10px"}}/>Rohitsah892@gmail.com</ContactItem>
            <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwcq6KE89slwEWAYyFti8q7yynlobAc1DEvsFpZRKw0lC58Etm6njBVEdjehs1-FXzBQ&usqp=CAU"></Payment>
        </Right>
    </Container>
  )
}

export default Footer