import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.h2``;

export const ModalSubtitle = styled.p`
  color: #666;
  margin-top: 10px;
  text-align: left;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const ConfirmButton = styled.button`
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

export const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;
