// components/AddEventButton.tsx
import React from 'react';
import * as S from './styles'; // Atualize o caminho conforme necessário

interface AddEventButtonProps {
  onClick: () => void;
}

const AddEventButton: React.FC<AddEventButtonProps> = ({ onClick }) => {
  return (
    <S.StyledButton onClick={onClick}>
      Adicionar Churras
    </S.StyledButton>
  );
};

export default AddEventButton;
