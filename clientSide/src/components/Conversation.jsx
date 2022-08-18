import React, {useState} from 'react';
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactList";
import {messagesList} from "../MockData"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  border-right: 1px solid #dadada;
  border : 1px solid black;
`;

const Chat = styled.div`
  display: flex;
  flex-direction: row;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const Emoji = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  background: #e5ddd6;
`;

const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
  background : #e5ddd6
`;

const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;

const Conversation = (props) => {
    const {selectChat} = props;
    const [text, setText] = useState("")
    const [newMessage, setNewMessage] = useState(messagesList);

    const enter = (event) =>{
      if(event.key=="Enter"){
        const messages = [...newMessage];
        messages.push({
          id: 0,
          messageType: "TEXT",
          text,
          senderID: 0,
          addedOn: "12:00 PM",
        })
        setNewMessage(messages)
        setText("")
      }
    } 


  // console.log(messagesList[0].text)
    return (
        <Container>
          <Header>
          <ProfileImg src={selectChat.profilePic}/>
            {selectChat.name}
          </Header>
          <MessageContainer>
              {
                newMessage.map((e)=>(
                  <MessageDiv isYours={e.senderID===0}>
                  <Message isYours={e.senderID===0}>
                    {e.text}
                  </Message>
                  </MessageDiv>
                ))
              }
          </MessageContainer>
            <Chat>
              <SearchContainer>
              <Emoji src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL9z0zDdZ8KFFQohMCy4biC33L-wsnxoXqQ&usqp=CAU"/>
                <SearchInput onChange={(e)=>{
                  setText(e.target.value)
                }} onKeyDown={enter} value = {text} placeholder='type a message here'>
                </SearchInput>
              </SearchContainer>
            </Chat>
        </Container>
    );
}

export default Conversation;
