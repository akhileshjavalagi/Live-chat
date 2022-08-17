
import styled from "styled-components";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";
import React, { useState } from "react";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 1512px;  
  border :1px solid red;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;

const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);
  span {
    font-size: 32px;
    color: #525252;
  }
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
  text : connect phone;
`;

function App() {
  const [selectChat, setChat] = useState();

  return (
    <Container>
      <ContactList setChat={setChat}/>
      {selectChat ? <Conversation selectChat={selectChat}/> : 
      <Placeholder>
        <ChatPlaceholder src="https://www.guidingtech.com/wp-content/uploads/xfix-waiting-for-this-message-error-whatsapp-featured-image_9f5ee7b3a548b56a65f0c55dd78a3be5_7c4a12eb7455b3a1ce1ef1cadcf29289.png.pagespeed.ic._uANykKrjQ.jpg" />
      </Placeholder>}
      
     
    </Container>
  )
}

export default App
