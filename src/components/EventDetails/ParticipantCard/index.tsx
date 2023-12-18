import React, { useState } from 'react';
import * as S from './styles';
import AddParticipantModal from '../detailsParticipantModal';
import api from '@/services/api';
import { customToast } from '@/utils/customToast';

interface ParticipantProps {
  id: number;
  attributes: {
    createdAt: string;
    name: string;
    paidAmount: number;
    valueWithDrink: number;
    valueWithoutDrink: number;
  };
}

interface ParticipantCardProps {
  idParticipant: number;
  name: string;
  amountDonated: number;
  valueWithDrink: number;
  valueWithoutDrink: number;
  updateData: () => void;
}

const ParticipantCard: React.FC<ParticipantCardProps> = ({ idParticipant, name, amountDonated, valueWithDrink, valueWithoutDrink, updateData, }) => {
  const isAmountWithDrinkReceived = amountDonated >= valueWithDrink;
  const isAmountWithoutDrinkReceived = amountDonated >= valueWithoutDrink;

  const amountWithDrinkStyle: React.CSSProperties = {
    textDecoration: isAmountWithDrinkReceived ? 'line-through' : 'none',
  };

  const amountWithoutDrinkStyle: React.CSSProperties = {
    textDecoration: isAmountWithoutDrinkReceived && !isAmountWithDrinkReceived ? 'line-through' : 'none',
  };

  const [isAddParticipantModalOpen, setAddParticipantModalOpen] = useState(false);

  const handleRequestClose = () => {
    setAddParticipantModalOpen(false);
  }

  return (
    <>
      <S.ParticipantCard>
        {isAmountWithDrinkReceived || isAmountWithoutDrinkReceived ? <S.CircleIcon onClick={() => { setAddParticipantModalOpen(true) }} /> : <S.CheckIcon onClick={() => { setAddParticipantModalOpen(true) }} />}
        <S.ParticipantInfo>
          <S.ParticipantName>{name}</S.ParticipantName>
          <S.AmountDonatedContainer>
            <S.AmountDonated style={amountWithDrinkStyle}>Com bebida: R$ {valueWithDrink}</S.AmountDonated>
            <S.AmountDonated style={amountWithoutDrinkStyle}>Sem bebida: R$ {valueWithoutDrink}</S.AmountDonated>
            <S.AmountDonatedReceived>Recebido: R$ {amountDonated}</S.AmountDonatedReceived>
          </S.AmountDonatedContainer>
        </S.ParticipantInfo>
      </S.ParticipantCard>

      {isAddParticipantModalOpen && (
        <AddParticipantModal
          isOpen={isAddParticipantModalOpen}
          isEdit={true}
          onRequestClose={() => handleRequestClose()}
          updateData={updateData}
          data={{
            id: idParticipant,
            name,
            valueWithDrink,
            valueWithoutDrink,
            amountReceived: amountDonated,
          }}
        />
      )}
    </>
  );
};

export default ParticipantCard;
