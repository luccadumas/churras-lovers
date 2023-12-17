// styles.ts
import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #F1F1F1;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 16px;
  width: 282px;
  height: 192px;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  height: 90px;
  width: 90px;
  border-radius: 50%;
`;

export const ButtonName = styled.div`
  font-size: 21px;
  font-weight: 700;
  margin-top: 8px;
`;
