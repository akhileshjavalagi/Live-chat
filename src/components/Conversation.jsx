import React from 'react';
import styled from "styled-components";
import { SearchContainer, SearchInput } from "./ContactList";

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

const Conversation = () => {
    return (
        <Container>
            <Header>
            <ProfileImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sudeep_interview_TeachAIDS.jpg/330px-Sudeep_interview_TeachAIDS.jpg' />
              Akhilesh Javalagi
            </Header>
            <Chat>
              <SearchContainer>
              <Emoji src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgL9z0zDdZ8KFFQohMCy4biC33L-wsnxoXqQ&usqp=CAU"/>
                <SearchInput placeholder='type a message here'>
                 
                </SearchInput>
              </SearchContainer>
            </Chat>
        </Container>
    );
}

export default Conversation;
