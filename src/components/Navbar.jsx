import React from 'react'
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  

 

const Container = styled.div `
height:60px;
background-color:#232F3E;


`;
const Wrapper = styled.div `
padding: 10px 20px;
display: flex;
justify-content:space-between;
`;
const Left = styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language = styled.span`
font-size:14px;
cursor: pointer;
color:white;
margin-bottom:10px;
&:hover{border:1px solid white}
`;

const SearchContainer = styled.div`
border:1px solid white;
display:flex;
align-items:center;
margin-left: 25px;
padding: 5px;
border-radius:5px;
margin-bottom:10px;

`;
const Input = styled.input`
border:none;

border-radius:5px;
`;

const Center = styled.div`
flex:1
text-align:center;


`;

const Logo = styled.h1`
margin-right:20px;
color:pink;
font-size:2.3rem;
&:hover{ transition:0.8s; transform:scale(1.2)}
`;
const Right = styled.div`
display:flex;
align-item:center;
justify-content:flex-end;
margin-left:50px;

flex:1`;


const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
color:white;
margin:20px;
&:hover{border:1px solid white}

`;

export default function Navbar() {
  return (
    <Container>
    <Wrapper> 
    <Left>
    <Language>EN</Language>
    
    <SearchContainer>
<Input/>
    <SearchIcon style={{color:"brown",fontSize:17}}/>
    </SearchContainer>
    </Left>
    <Center><Logo >
    shopy.
    </Logo></Center>
    <Right>
    <MenuItem>REGISTER</MenuItem>
    <MenuItem>SIGN IN/SIGN UP</MenuItem>
    <MenuItem><Badge badgeContent={4} color="primary">
    <MailIcon color="white"/>
    </Badge></MenuItem>
    <MenuItem>
    <Badge badgeContent={6} color="primary">
    <ShoppingCartIcon color= "white" />
    </Badge>
    </MenuItem>
    </Right>
    </Wrapper>
     
    </Container>
  )
}
