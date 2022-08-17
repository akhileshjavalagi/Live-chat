import React from 'react';
import styled from "styled-components";

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
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: white;
  cursor: pointer;
  :hover {
    background: #ebebeb;
  }
`;

const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;

const ContactComponent = () =>{
    return <ContactItem>
        <ProfileIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Sudeep_interview_TeachAIDS.jpg/330px-Sudeep_interview_TeachAIDS.jpg" />
    </ContactItem>
}

const ContactList = () => {
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
          <ContactComponent>

          </ContactComponent>
        </Container>
    );
}

export default ContactList;
