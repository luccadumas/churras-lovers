// components/ParticipantCard.tsx
import React from 'react';
import * as S from './styles';

interface ParticipantCardProps {
  name: string;
  amountDonated: number;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ name, amountDonated }) => {
  return (
    <S.ParticipantCard>
      <S.CircleIcon />
      <S.ParticipantInfo>
        <S.ParticipantName>{name}</S.ParticipantName>
        <S.AmountDonated>R$ {amountDonated}</S.AmountDonated>
      </S.ParticipantInfo>
    </S.ParticipantCard>
  );
};

export default ParticipantCard;