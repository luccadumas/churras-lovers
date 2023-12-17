import styled from "styled-components";

export const Container = styled.header`
  padding-top: 70px;
  padding-bottom: 90px;
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 32px;
  padding-top: 20px;
`;

export const Logout = styled.button`
  background-color: transparent;
  border: none;
  color: #ffffff;
  font-size: 20px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;

  &:hover {
    opacity: 0.7;
  }
`;
