import Link from 'next/link';
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
  text-transform: lowercase;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);

  &:focus {
    outline: none;
    border: none;
  }
`;

export const Submit = styled.button`
  border-radius: 18px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  background: ${props => props.theme.colors.black};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.06);
  color: ${props => props.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.white};
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  display: block;
`;
