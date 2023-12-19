import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const Spinner = styled.div`
  border: 4px solid ${props => props.theme.colors.white};
  border-top: 4px solid transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;
