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

export const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormGroupValues = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
    gap: 0;
  }
`;

export const InputLabel = styled.label`
  text-align: left;
  display: block;
  margin-top: 10px;
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const AddButton = styled.button`
  margin-top: 10px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  background-color: ${props => props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
