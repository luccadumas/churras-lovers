import React from 'react';
import Modal from 'react-modal';
import * as S from './styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmButtonName?: string;
  cancelButtonName?: string;
}

const GenericModal: React.FC<ConfirmationModalProps> = (
  { isOpen, onRequestClose, onConfirm, title, message, confirmButtonName, cancelButtonName }
) => {

  return (
    <S.StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmação"
    >
      <S.ModalHeader>
        <S.ModalTitle>{title}</S.ModalTitle>
      </S.ModalHeader>
      <S.ModalSubtitle>{message}</S.ModalSubtitle>
      <S.ButtonsContainer>
        <S.CancelButton onClick={onRequestClose}>{cancelButtonName ? cancelButtonName : "Cancelar"}</S.CancelButton>
        <S.ConfirmButton onClick={onConfirm}>{confirmButtonName ? confirmButtonName : "Confirmar"}</S.ConfirmButton>
      </S.ButtonsContainer>
    </S.StyledModal>
  );
};

export default GenericModal;
