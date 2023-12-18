// components/AddParticipantModal/styles.ts
import styled from 'styled-components';
import Modal from 'react-modal';

export const StyledModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  text-align: center;
`;

export const ModalHeader = styled.div`
  // Estilos para o cabeçalho do modal
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButton = styled.button`
  // Estilos para o botão de deletar
  background-color: #f44336;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
`;

export const FormGroup = styled.div`
  // Estilos para o grupo de formulário
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;

export const InputLabel = styled.label`
  text-align: left;
  display: block;
  margin-top: 10px;
`;

export const Input = styled.input`
  // Estilos para o input
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
`;

export const AddButton = styled.button`
  // Estilos para o botão de adicionar
  margin-top: 10px;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

export const CloseButton = styled.button`
  // Estilos para o botão de fechar
  margin-top: 10px;
  background-color: #f44336;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
