import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Main_UserProfileImage from './Main_UserProfileImage';
import Main_UserInfoInput from './Main_UserInfoInput';
import Main_UserInfoPwChange from './Main_UserInfoPwChange';
import Button from './Button';

function Main_UserInfo() {
  return (
    <UserInfo>
      <Header>회원 정보 수정</Header>
      <Main_UserProfileImage></Main_UserProfileImage>
      <SectionBox1>
        <Button>변경</Button>
        <Button>삭제</Button>
      </SectionBox1>
      <SectionBox2>
        <SectionH2>계정</SectionH2>
        <Main_UserInfoInput labelText="이메일" value="test@test.com" disabled={true}></Main_UserInfoInput>
        <Main_UserInfoInput labelText="이름" value="신콩이" disabled={true}></Main_UserInfoInput>
      </SectionBox2>
      <Main_UserInfoPwChange></Main_UserInfoPwChange>
    </UserInfo>
  )
};

export default Main_UserInfo; 

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;

  width: 50vw;
  min-width: 500px;
  height: 90vh;
  border: 1px solid #C8CCE5;
  border-radius: 10px;
  box-sizing: border-box;
  
  background-color: white;

  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  width: 95%;
  height: 38px;
  margin-top: 13px;
  margin-left: 15px;

  font-size: 30px;
  font-weight: bold;
`;

const SectionH2 = styled.h2`
  display: block;
  
  width: 95%;
  margin-bottom: 20px;  

  font-size: 20px;
  font-weight: bold;
`;

const SectionBox1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: 92%;
  height: 80px;
  border-bottom: 1px solid #C8CCE5;
  box-sizing: border-box;
`;

const SectionBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 92%;
  height: 190px;
  margin: 10px;
  border-bottom: 1px solid #C8CCE5;
  box-sizing: border-box;
`;

const SectionBox3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 92%;
  height: 190px;
  box-sizing: border-box;
`;
