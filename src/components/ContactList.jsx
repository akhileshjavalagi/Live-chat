import React from 'react';
import styled from "styled-components";
import {contactList} from "../MockData"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.6;
  height: 100%;
  width: 300%;
  border-right: 1px solid #dadada;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;

const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;

export const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 540px;
  background: white;
  cursor: pointer;
  :hover {
    background: #ebebeb;
  }
`;

const ProfileIcon = styled(ProfileImage)`
  width: 50px;
  height: 45px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 12px;
`;

const ContactName = styled.span`
  width: 100%;
  font-size: 16px;
  color: black;
`;

const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  margin-top: 3px;
`;

const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  white-space: nowrap;
`;

const ContactComponent = (props) =>{
    const {userData, setChat} = props;
   // console.log("people is",userData)
    return <ContactItem onClick={()=>{
      setChat(userData)
    }}>
        <ProfileIcon src={userData.profilePic} />
        <ContactInfo>
          <ContactName>
            {userData.name}
          </ContactName>
          <MessageText>
            {userData.lastText}
          </MessageText>
        </ContactInfo>
        <MessageTime>
          {userData.lastTextTime}
        </MessageTime>
    </ContactItem>
}

const ContactList = (props) => {
  //  console.log(contactList.name)
    return (
        <Container>
          <ProfileInfoDiv>
            <ProfileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sudeep_interview_TeachAIDS.jpg/330px-Sudeep_interview_TeachAIDS.jpg" />
          </ProfileInfoDiv>
          <SearchBox>
            <SearchContainer>
                <SearchIcon src="https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png"/>
                <SearchInput placeholder='Search the contacts here'/>
            </SearchContainer>
          </SearchBox>
          {
            contactList.map((userData) => (
              <ContactComponent userData={userData} setChat = {props.setChat}/>
            ))
          }
        </Container>
    );
}

export default ContactList;
