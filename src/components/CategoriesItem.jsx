import { styled } from "styled-components";
import { categories } from "../data";


const Container = styled.div`
flex:1;
margin:4px;
height: 70vh;
background-color:;
position:relative;
margin-bottom:;

`;
const Image = styled.img`
width:100%;
height:100%;


`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
margin-bottom:20px;
color:#e6e1d8;
`;
const Button = styled.button`

border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600px;
&:hover{background-color:#72A0C1; transition:0.8s;color:orange}
`;



export default function CategoriesItem({item}) {
  return (
    <Container >
      <Image src={item.img} />
      <Info>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
      </Info>
    </Container>
  )
}
