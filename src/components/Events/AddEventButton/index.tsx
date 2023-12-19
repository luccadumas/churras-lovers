import React from 'react';
import * as S from './styles';
import IconBbq from '../../../assets/icons/icon-bbq.svg';

interface AddEventButtonProps {
  onClick: () => void;
}

const AddEventButton: React.FC<AddEventButtonProps> = ({ onClick }) => {
  return (
    <S.StyledButton onClick={onClick}>
      <S.ButtonContent>
        <S.ImageContainer>
          <IconBbq />
        </S.ImageContainer>
        <S.ButtonName>Adicionar Churras</S.ButtonName>
      </S.ButtonContent>
    </S.StyledButton>
  );
};

export default AddEventButton;
