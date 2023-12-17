// styles.ts
import styled from 'styled-components';

export const LoginContainer = styled.div`
  background-image: url('../assets/images/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  max-width: 340px;
  margin: 0 auto;
  padding: 20px;
  font-weight: 800;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
`;

export const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
`;

export const Button = styled.button`
  border-radius: 18px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background: #000000;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  color: #FFFFFF;
  padding: 10px;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin-top: 40px;
`;
