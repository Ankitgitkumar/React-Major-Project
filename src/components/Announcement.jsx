import styled from "styled-components"


const Container = styled.div`
height:30px;
background-color:#131A22;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:500;
sticky:fixed;
`


export default function Announcement() {
  return (
    <Container>
      Super Deal! Free Shopping on Orders Over &#x20b9;5000.
    </Container>
    
    
    
  )
}
