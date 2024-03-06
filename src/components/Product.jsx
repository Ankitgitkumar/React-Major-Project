import { styled } from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info= styled.div`
opacity:0;
 //width:50%;
//height:50%;
position:absolute;
//top:0;
//left:0;
//background-color:rgba(0,0,0,0.2);
display:flex;
//align-items:center;
//justify-content:center;
z-index:3;
background-color:;
transition: all 0.5s;
 `;



 const Container = styled.div`
 postion: relative;
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
&:hover ${Info}{
opacity:1;
}
z-index:1;

`;

const Circle= styled.div`
`;
const Image= styled.img`
height:100%;
width:100%;

`;



const Icon= styled.div`
 width:20;
 height:20;
 border-radius:50%;
 background-color:white;
 opacity:0.8;
 display:flex;
 align-items: center;
 justify-content: center;
margin:7px;
cursor:pointer;
&:hover{
    background-color:#72A0C1; transition:0.5s; transform:scale(1.1);
}
`;





export default function Product({ item }) {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon/>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon/>
                </Icon>
            </Info>
        </Container>
    )
}
