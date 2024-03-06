import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h1``;
const Description = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;



export default function Newsletter() {
  return (
    <Container>
    <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
      <Input placeholder="Your email"/>
      <Button>
      <SendIcon/>
      </Button>
      </InputContainer>
    </Container>
  )
}
