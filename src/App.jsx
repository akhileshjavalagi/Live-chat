
import styled from "styled-components";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 1512px;  
  border :1px solid red;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;


function App() {

  return (
    <Container>
      <ContactList/>
      <Conversation/>
     
    </Container>
  )
}

export default App
